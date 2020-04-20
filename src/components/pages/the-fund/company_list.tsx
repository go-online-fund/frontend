import React from 'react';
import styled from 'styled-components';
import './css/company_list.css';
import companyList from '../../../data/sponsor_list';

const CompanyListWrapper = styled.section`
  width: 78%;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCompanies = (companies: any[]) => {
  const listOfCompanies = companies.map((company, index) => (
    <tr key={company}>
      <td>{index + 1}</td>
      <td className='c-table__cell'>{company.name}</td>
      <td className='c-table__cell'>{company.expertise}</td>
      <td className='c-table__cell'>
        {
            company.resources.map((resource: string | undefined) => (
              <span className={`resource ${resource?.toLowerCase()}`}>{resource}</span>
            ))
      }
      </td>
    </tr>
  ));

  return listOfCompanies;
};

const CompanyList: React.FC = () => (
  <CompanyListWrapper className='wrapper'>
    <table className='c-table'>
      <thead className='c-table__header'>
        <tr>
          <th />
          <th className='c-table__col-label'>Name</th>
          <th className='c-table__col-label'>Area of expertise</th>
          <th className='c-table__col-label'>Resource contribution</th>
        </tr>
      </thead>
      <tbody className='c-table__body'>
        {renderCompanies(companyList)}
      </tbody>
    </table>
  </CompanyListWrapper>
);

export default CompanyList;
