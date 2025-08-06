import DonationOptions from '../../components/Home-Components/DonationOptions';

import { donations } from '../../db/donations';
import {
  usePageHeaderUpdate,
  useUpdateFooter,
  useUpdateStep,
} from '../../store/CustomHooks';

const Home: React.FC = () => {
  usePageHeaderUpdate(
    1,
    'PLEASE DONATE GENEROUSLY',
    `Your contributions are the heartbeat of Masjid Yusuf's progress. With a
          £472k debt and upcoming projects including a £30k main Hall carpet
          refresh post-Ramadan, your support ensures our community's growth and
          vitality. Thank you for your generosity and commitment.`
  );
  useUpdateFooter(`There is a 1.69% transaction charge for
        all payments made. As a registered charity, we are able to claim
        25% Gift Aid on all eligible donations which will cover the charges.`);
  useUpdateStep(1);
  return <DonationOptions donations={donations} />;
};

export default Home;
