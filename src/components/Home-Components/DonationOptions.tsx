import { useState } from 'react';
import type { donationOption } from '../../models/Home-model/Home-model';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';
const buttonCss =
  'md:block px-6 py-2.5 rounded-full hover:bg-blue-700 hover:text-white h-20 w-50 cursor-pointer font-bold text-3xl shadow-lg hover:shadow-blue-300';

const DonationOptions: React.FC<{
  donations: donationOption[] | undefined;
}> = ({ donations }) => {
  const [selectedBtn, setSelectedBtn] = useState<number>(0);
  const navigate = useNavigate();
  const handleButtonClick = (amount: number, id: number) => {
    console.log(amount);
    setSelectedBtn(id);
    if (id === -1) {
      navigate('/custom-donation');
    } else {
      navigate('/donation-types');
    }
  };
  return (
    <>
      <h1 className="font-bold text-2xl text-center mb-4">Donation Amount</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-4 place-items-center">
        {donations?.map((donation) => (
          <div
            key={donation.id}
            onClick={() => handleButtonClick(donation.amount, donation.id)}
          >
            <Button
              cssClasses={`${buttonCss} ${
                selectedBtn === donation.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              £ {donation.amount}
            </Button>
          </div>
        ))}
        <div onClick={() => handleButtonClick(0, -1)}>
          <button className="md:block bg-amber-600-600 text-black px-6 py-2.5 rounded-full hover:text-white hover:bg-blue-700 h-20 w-50 transition-all duration-300 cursor-pointer font-medium shadow-lg hover:shadow-blue-300">
            Custom Donation
          </button>
        </div>
      </div>
    </>
  );
};

export default DonationOptions;
