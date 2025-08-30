import { useState } from 'react';

import { useLayoutContext } from '../../store/useLayoutContext';
import { useNavigate } from 'react-router-dom';

const CustomDonation: React.FC = () => {
  const navigate = useNavigate();
  const { addDonation } = useLayoutContext();
  const [amount, setAmount] = useState<string>('');
  const digitClickHandler = (digit: string) => {
    setAmount((pre) => pre + digit);
  };
  const sliceString = () => {
    setAmount(amount.slice(0, -1));
  };

  const submitHandler = () => {
    if (amount === '') {
      alert('Please Enter Donation.');
      return;
    }

    addDonation({ id: -1, amount: +amount });
    navigate('/donation-types');
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-100 p-4 bg-gray-100 rounded-lg shadow-md">
          {/* Display Textbox */}
          <input
            type="text"
            readOnly
            className="w-full p-3 mb-4 text-right text-2xl border rounded bg-white"
            placeholder="£0"
            value={amount}
          />

          {/* Numeric keypad */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((num) => (
              <button
                onClick={() => digitClickHandler(num.toString())}
                key={num}
                className="bg-white border rounded py-3 text-xl hover:bg-blue-200"
              >
                {num}
              </button>
            ))}
            <button
              onClick={sliceString}
              className="bg-yellow-200 border rounded py-3 text-xl hover:bg-yellow-300"
            >
              ⌫
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button
              onClick={() => setAmount('')}
              className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400"
            >
              Clear
            </button>
            <button
              onClick={submitHandler}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDonation;
