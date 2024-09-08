import React from 'react';
import AdmissionOverview from './AdmissionOverview';
import AdmissionRequirements from './AdmissionRequirements';
import HowToApply from './HowToApply';
import ImportantDates from './ImportantDates';
import ContactInformation from './ContactInformation';
import FAQ from './FAQ';

const AdmissionPage = () => {
  return (
    <div className="admission-page">
      <AdmissionOverview />
      <AdmissionRequirements />
      <HowToApply />
      <ImportantDates />
      <ContactInformation />
      <FAQ />
    </div>
  );
};

export default AdmissionPage;
