import { HomeModel } from '../models/Home-model/Home-model';
import { createContext } from 'react';
type contextType = {
  headerModel: HomeModel;
  footerModel: string;
  step: number;
  updateStep: (step: number) => void;
  updateHeader: (headerModal: HomeModel) => void;
  updateFooter: (message: string) => void;
  donationAmount: string;
  addDonation: (amount: string) => void;
};

export const LayoutContext = createContext<contextType>({
  headerModel: new HomeModel(0, '', ''),
  footerModel: '',
  updateHeader: () => {},
  updateFooter: () => {},
  step: 1,
  updateStep: () => {},
  donationAmount: '',
  addDonation: () => {},
});
