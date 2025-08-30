import type { donationOption } from '../../models/TypeScript/Types';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../../store/useLayoutContext';

const DonationOptions: React.FC<{
  donations: donationOption[] | undefined;
}> = ({ donations }) => {
  const { addDonation } = useLayoutContext();
  const navigate = useNavigate();
  const handleButtonClick = (donation: donationOption, id: number) => {
    if (id === -1) {
      navigate('/custom-donation');
    } else {
      addDonation(donation);
      navigate('/donation-types');
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4 place-items-center">
        {donations?.map((donation) => (
          <div
            key={donation.id}
            onClick={() => handleButtonClick(donation, donation.id)}
          >
            <Button cssClasses="md:block bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 hover:text-white h-20 w-50 cursor-pointer font-bold text-3xl shadow-lg hover:shadow-blue-300">
              £ {donation.amount}
            </Button>
          </div>
        ))}
        <div onClick={() => handleButtonClick({ id: 0, amount: 0 }, -1)}>
          <button className="md:block bg-amber-600-600 text-black px-6 py-2.5 rounded-full hover:text-white hover:bg-blue-700 h-20 w-50 transition-all duration-300 cursor-pointer font-medium shadow-lg hover:shadow-blue-300">
            Custom Donation
          </button>
        </div>
      </div>
    </>
  );
};

export default DonationOptions;
