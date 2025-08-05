import { IoSettings } from 'react-icons/io5';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <hr className="p-4 bg-amber-50" />
      <div className="p-4 text-center">
        <strong>Please note:</strong> There is a 1.69% transection charges for
        all payments made charged as a registered charity. We are able to claim
        25% Gift Aid on all eligible donation which will cover the charges.
      </div>
      <hr className="bg-amber-100" />
      <div className="flex justify-between items-center w-full">
        <div className="w-fit py-4 px-2">
          <IoSettings />
        </div>
        <div className="text-center">
          <p className="p-4">Reg Charity No. SC052005</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
