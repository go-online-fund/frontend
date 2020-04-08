import { FundApplication, SponsorApplication } from "../interfaces/forms.interface";

const BASE_URL = 'https://nasdailyworker.herokuapp.com/api/go-online-fund'
const AUTHORIZATION_TOKEN = 'g0Gc6HdwC3'

class FormsService {
  async postFundApplication(fundApplication: FundApplication) {
    const { 
      companyName: company_name, 
      companySize: company_size, 
      companyEmail: company_email, 
      businessDescription: business_description,
      businessChallenge: business_challenge,
      businessPriority: business_priority, 
    } = fundApplication;

    const body = {
      company_name,
      company_size,
      company_email,
      business_description,
      business_challenge,
      business_priority,
    };
    
    const response = await fetch(`${BASE_URL}/application`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': AUTHORIZATION_TOKEN,
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
    // const result = await response.json();
    return response.status;
  }

  async postSponsorApplication(sponsorApplication: SponsorApplication) {
    const { 
      companyName: company_name,
      companyEmail: company_email,
      contactNumber: phone,
      contributionArea: contribution_area,
    } = sponsorApplication;

    const body = {
      company_name,
      company_email,
      phone,
      contribution_area
    };
    
    const response = await fetch(`${BASE_URL}/sponsors`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': AUTHORIZATION_TOKEN,
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
    // const result = await response.json();

    return response.status;
  }
}

export default new FormsService();