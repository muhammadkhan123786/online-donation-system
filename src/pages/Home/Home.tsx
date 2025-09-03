import { useEffect, useMemo, useState } from 'react';
import DonationOptions from '../../components/Home-Components/DonationOptions';

import { useUpdatePageContent } from '../../store/CustomHooks';
import { API_CALL } from '../../apis/API';
import type {
  donationOption,
  pageContent,
} from '../../models/TypeScript/Types';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Home: React.FC = () => {
  const [donations, setDonations] = useState<donationOption[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchDonation = async () => {
      try {
        const apiDonations = await API_CALL<donationOption[]>(
          'https://hfdonor.helpfoundation.org.uk/ods/getdonationsamount'
        );
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
  const pageContent: pageContent = useMemo(
    () => ({
      heading: 'Please donate generously'.toLocaleUpperCase(),
      message:
        'Please donate generously to support our cause and help bring hope to those in need. Your kindness can make a real difference.',
      footer:
        'Every contribution, big or small, helps us continue our mission of serving humanity. Thank you for your generosity.',
      backButton: false,
    }),
    []
  );

  useUpdatePageContent(pageContent);
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
