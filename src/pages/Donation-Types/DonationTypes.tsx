import { useEffect, useState } from 'react';
import {
  usePageHeaderUpdate,
  useUpdateFooter,
  useUpdateStep,
} from '../../store/CustomHooks';
import { donationType } from '../../models/Home-model/Home-model';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Button from '../../UI/Button';
import { fetchDonationTypes } from '../../apis/API';

const DonationTypes: React.FC = () => {
  usePageHeaderUpdate(1, 'Donation Type', `Select type of donation.`);
  useUpdateFooter(``);
  useUpdateStep(2);

  const [donationTypes, setdonationTypes] = useState<donationType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchDonationsType = async () => {
      try {
        const donationTypes = await fetchDonationTypes();
        if (donationTypes === undefined) {
          setError(true);
          return;
        }
        setdonationTypes(donationTypes);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDonationsType();
  }, []);
  if (error)
    return (
      <p className="text-red-500 text-2xl text-center font-bold">
        Something is wrong!
      </p>
    );
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="grid grid-cols-4 gap-4">
      {donationTypes?.map((donationType) => (
        <div key={donationType.id}>
          <Button cssClasses="px-4 py-4 bg-green-600 text-white text-center rounded-full hover:bg-blue-700 hover:text-white h-20 w-50 cursor-pointer font-bold text-2xl shadow-lg hover:shadow-blue-300">
            {donationType.donationType}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DonationTypes;
