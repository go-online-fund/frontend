import React from 'react';
import './css/SuccessStories.css';
import companies from './succesStories';

const renderStories = () => companies.map((company) => (
  <div className='content-container'>
    <div className='img-wrapper'>
      <img
        className='story-img'
        src={company.sme_logo}
        alt={company.sme_name}
      />
    </div>
    <div className='text-title sme-name'>
      <a href={company.sme_link} target='_blank' rel='noopener noreferrer'>{company.sme_name}</a>
    </div>
    <div className='text-body'>
      {company.description}
    </div>
    <div className='text-title'>Sponsored by</div>
    <div className='text-body'>
      <a href={company.sponsor_link} target='_blank' rel='noopener noreferrer'>{company.sponsor_name}</a>
    </div>
    <div className='text-title'>How We Help</div>
    <div className='text-body'>
      {company.how_we_help}
    </div>
  </div>
));

const SuccessStories: React.FC = () => (
  <>
    <section className='section'>
      <div className='header'>SUCCESS STORIES</div>
      <div className='campaign-desc text-body'>
        <p>
          Throughout the 2-month Circuit Breaker, The Move Online Fund supported small
          businesses across different industries go digital and enhance their
          shift to operate online. We quickly helped the companies built websites and
          ran social media marketing, as well as facilitated free 1-on-1 consultations and
          webinars with our sponsors.
          <br />
          <br />
          The topics revolved around online payment, automation and chatbots, cyber security and digital marketing.
          Thanks to your support, we&apos;ve helped 120 SMEs and raised SGD$200,000 worth of
          resources! Our heartfelt gratitude to those who have contributed, this success is indeed ours.
        </p>
      </div>
      <div className='content-wrapper'>
        {renderStories()}
      </div>
    </section>
  </>
);

export default SuccessStories;
