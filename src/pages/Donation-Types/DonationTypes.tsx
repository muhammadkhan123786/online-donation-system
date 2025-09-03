import { useEffect, useState } from 'react';
import type { donationType } from '../../models/TypeScript/Types';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Button from '../../UI/Button';
import { API_CALL } from '../../apis/API';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../store/useLayoutContext';

const DonationTypes: React.FC = () => {
  const [donationTypes, setdonationTypes] = useState<donationType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pageContent, updatePageContent, addDonationType } =
    useLayoutContext();

  const handlerDonationTypeClick = (donationType: donationType) => {
    addDonationType(donationType);
    navigate('/gift-aid-declaration');
  };

  useEffect(() => {
    if (!pageContent.backButton) {
      updatePageContent({ ...pageContent, backButton: true });
    }
  }, [pageContent, updatePageContent]);

  useEffect(() => {
    const fetchDonationsType = async () => {
      try {
        const donationTypes = await API_CALL<donationType[]>(
          'https://hfdonor.helpfoundation.org.uk/ods/getDonationsTypes'
        );
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
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 place-items-center">
      {donationTypes?.map((donationType) => (
        <div
          key={donationType.id}
          onClick={() => handlerDonationTypeClick(donationType)}
        >
          <Button cssClasses="px-4 py-4 bg-green-600 text-white text-center rounded-full hover:bg-blue-700 hover:text-white h-20 w-50 cursor-pointer font-bold text-2xl shadow-lg hover:shadow-blue-300">
            {donationType.donationType}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DonationTypes;
