import React from 'react';
import { useLayoutContext } from '../../store/useLayoutContext';
import Button from '../../UI/Button';
import { useNavigate } from 'react-router-dom';

const GiftAidDeclaration: React.FC = () => {
  const { donationAmount, donationType } = useLayoutContext();
  const navigate = useNavigate();

  const giftAidClickHandler = () => {
    navigate('/gift-aid-info');
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-green-600 pb-4">
        Gift Aid Declaration
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 w-5xl px-4 py-8">
          <div className="flex gap-4 items-baseline pb-2">
            <h1 className="text-xl font-bold">Donation Type: </h1>
            <p className="text-xl">{donationType.donationType}</p>
          </div>
          <div className="flex gap-4 items-baseline pb-2">
            <h1 className="text-xl font-bold">Donation Amount: </h1>
            <p className="text-xl">£{donationAmount.amount}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <p className="pb-8">
            Gift Aid allows us to claim an extra 25p for every £1 you give, at
            no extra cost to you. Please confirm if you are eligible.
          </p>
          <div className="flex gap-4">
            <div onClick={giftAidClickHandler}>
              <Button cssClasses="bg-green-500 p-4 rounded-2xl text-white font-bold cursor-pointer">
                Yes, I want to Gift Aid my donation.
              </Button>
            </div>
            <Button cssClasses="bg-gray-500 p-4 rounded-2xl text-white font-bold cursor-pointer">
              No - Don't Gift Aid.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAidDeclaration;
