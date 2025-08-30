import { useCallback, useState } from 'react';
import type {
  donationOption,
  donationType,
  pageContent,
} from '../models/TypeScript/Types';

import { LayoutContext } from './LayoutContext';

const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pageContent, setPageContent] = useState<pageContent>({
    heading: '',
    message: '',
    footer: '',
    backButton: false,
  });
  const [donation, setDonation] = useState<donationOption>({
    id: 0,
    amount: 0,
  });
  const [donationType, setDonationType] = useState<donationType>({
    id: 0,
    donationType: '',
  });

  const addDonationType = (donationType: donationType) => {
    setDonationType(donationType);
  };

  const addDonation = (donation: donationOption) => {
    setDonation(donation);
  };
  const updatePageContent = useCallback((pageContent: pageContent) => {
    setPageContent(pageContent);
  }, []);

  const cxtValue = {
    updatePageContent,
    pageContent,
    donationAmount: donation,
    addDonation,
    addDonationType,
    donationType,
  };

  return (
    <LayoutContext.Provider value={cxtValue}>{children}</LayoutContext.Provider>
  );
};

export default LayoutProvider;
