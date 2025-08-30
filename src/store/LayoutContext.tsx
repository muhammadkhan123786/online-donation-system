import type {
  donationOption,
  donationType,
  pageContent,
} from '../models/TypeScript/Types';
import { createContext } from 'react';
type contextType = {
  pageContent: pageContent;
  updatePageContent: (pageContent: pageContent) => void;
  donationAmount: donationOption;
  addDonation: (donation: donationOption) => void;
  donationType: donationType;
  addDonationType: (dt: donationType) => void;
};

export const LayoutContext = createContext<contextType>({
  updatePageContent: () => {},
  pageContent: { heading: '', message: '', footer: '', backButton: false },
  donationAmount: { id: 0, amount: 0 },
  addDonation: () => {},
  donationType: { id: 0, donationType: '' },
  addDonationType: () => {},
});
