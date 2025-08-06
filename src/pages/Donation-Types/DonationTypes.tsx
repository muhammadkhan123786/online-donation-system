import {
  usePageHeaderUpdate,
  useUpdateFooter,
  useUpdateStep,
} from '../../store/CustomHooks';

const DonationTypes: React.FC = () => {
  usePageHeaderUpdate(1, 'Donation Type', `Select type of donation.`);
  useUpdateFooter(``);
  useUpdateStep(2);
  return <div>
    
  </div>;
};

export default DonationTypes;
