import {
  usePageHeaderUpdate,
  useUpdateFooter,
  useUpdateStep,
} from '../../store/CustomHooks';

const CustomDonation: React.FC = () => {
  usePageHeaderUpdate(
    1,
    'Custom Donation',
    `Please enter your desired donation`
  );
  useUpdateFooter(``);
  useUpdateStep(4);
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
          />

          {/* Numeric keypad */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0].map((num) => (
              <button
                key={num}
                className="bg-white border rounded py-3 text-xl hover:bg-blue-200"
              >
                {num}
              </button>
            ))}
            <button className="bg-yellow-200 border rounded py-3 text-xl hover:bg-yellow-300">
              ⌫
            </button>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button className="bg-gray-300 px-5 py-2 rounded hover:bg-gray-400">
              Clear
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDonation;
