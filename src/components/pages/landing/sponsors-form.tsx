import React, {Suspense, useState} from 'react';
import styled from 'styled-components';
import {TextField, SuccessText, Select} from '../../elements/form-control';
import {PrimaryButton} from '../../elements/buttons';
import FormsService from '../../../shared/services/forms.service';
import {SponsorApplication} from '../../../shared/interfaces/forms.interface';
import Loading from "../../common/loading";

interface SponsorHelpOption {
    value: string;
    label: string;
}

const SponsorSection = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  text-align: center;
  align-items: center;
  height: 100%;
  background: #f8c446
  }
`;


const LoadingDiv = styled.div`
 height: 400px;
 padding-top: 400px;
`;

const SponsorsFormWrapper = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586095383/go-online-fund_tgapcj.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left -20px;
  padding-top: 680px;
  
  @media (max-width: 415px){
    background: url('https://res.cloudinary.com/doaxab4ly/image/upload/v1586131835/mobile_ljxlfe.jpg') !important
    background-size: contain;
    padding-top: 240px;
    height: 100%;
    background-repeat: no-repeat;
  }
  
  @media (min-width: 1800px){
    background-size: cover
  }
`;

const options: SponsorHelpOption[] = [
    {value: 'Finance', label: 'Finance'},
    {value: 'Resources, Logistics, or Operations', label: 'Resources, Logistics, or Operations'},
    {value: 'Talent', label: 'Talent'},
    {value: 'Training', label: 'Training'},
];

const defaultForm = {
    companyName: '',
    companyEmail: '',
    contributionArea: '',
};

const SponsorsForm: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectValues, setSelectValues] = useState<SponsorHelpOption[]>([]);
    const [sponsorForm, setSponsorForm] = useState<SponsorApplication>(defaultForm);

    const onSelect = (e: SponsorHelpOption[]) => {
        setSelectValues(e);
        const contributionArea = e.map(({value}) => value).join(',');
        setSponsorForm({
            ...sponsorForm,
            contributionArea
        })
    };

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        const responseStatus = await FormsService.postSponsorApplication(sponsorForm);
        if (responseStatus === 200) {
            setIsLoading(false);
            setSponsorForm(defaultForm);
            setSelectValues([]);
            setIsSubmitted(true);
        }
    };

    return (
        <SponsorSection id='beASponsor'>
            {
                !isLoading && !isSubmitted && (
                    <SponsorsFormWrapper onSubmit={submitForm}>
                        <TextField
                            style={{background: 'white', paddingTop: '15px', paddingBottom: '15px'}}
                            required
                            placeholder='Company name'
                            value={sponsorForm.companyName}
                            onChange={(e) => setSponsorForm({
                                ...sponsorForm,
                                companyName: e.target.value,
                            })}
                        />
                        <TextField
                            style={{background: 'white', paddingTop: '15px', paddingBottom: '15px'}}
                            required
                            type='email'
                            placeholder='Company Email'
                            value={sponsorForm.companyEmail}
                            onChange={(e) => setSponsorForm({
                                ...sponsorForm,
                                companyEmail: e.target.value,
                            })}
                        />
                        <Suspense fallback={<div>Loading Options...</div>}>
                            <Select
                                placeholder={<div>What would you like to contribute?</div>}
                                required
                                style={{paddingTop: '40px', paddingBottom: '40px', height: '60px'}}
                                options={options}
                                isMulti
                                onChange={onSelect}
                                value={selectValues}
                            />
                        </Suspense>
                        <PrimaryButton
                            type='submit'
                        >
                            BE A SPONSOR
                        </PrimaryButton>
                    </SponsorsFormWrapper>
                )
            }
            {
                isLoading && !isSubmitted && (
                    <LoadingDiv>
                        <Loading/>
                    </LoadingDiv>
                )
            }
            {
                isSubmitted && !isLoading && (
                    <LoadingDiv>
                        <SuccessText type='dark'>
                            Thank you for. Your response has been submitted. <br/>We will be in touch with you shortly to discuss
                            how you can support this initiative.
                        </SuccessText>
                    </LoadingDiv>
                )
            }
        </SponsorSection>
    );
}

export default SponsorsForm;
