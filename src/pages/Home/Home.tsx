import { useEffect, useState } from 'react';
import DonationOptions from '../../components/Home-Components/DonationOptions';

import {
  usePageHeaderUpdate,
  useUpdateFooter,
  useUpdateStep,
} from '../../store/CustomHooks';
import { fetchDonations } from '../../apis/API';
import { donationOption } from '../../models/Home-model/Home-model';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Home: React.FC = () => {
  const [donations, setDonations] = useState<donationOption[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const apiDonations = await fetchDonations();
        if (apiDonations === undefined) {
          setError(true);
          return;
        }
        setDonations(apiDonations);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDonation();
  }, []);
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
  if (error)
    return (
      <p className="text-red-500 text-2xl text-center font-bold">
        Something is wrong!
      </p>
    );
  if (isLoading) return <LoadingSpinner />;
  return <DonationOptions donations={donations} />;
};

export default Home;
