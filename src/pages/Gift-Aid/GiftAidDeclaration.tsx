import React from 'react';

const GiftAidDeclaration: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-green-600">
        Gift Aid Declaration
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 w-5xl px-4 py-8">
          <div className="flex gap-4 items-baseline pb-2">
            <h1 className="text-xl font-bold">Donation Type: </h1>
            <p>Zakat</p>
          </div>
          <div className="flex gap-4 items-baseline pb-2">
            <h1 className="text-xl font-bold">Donation Amount: </h1>
            <p>£10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAidDeclaration;
