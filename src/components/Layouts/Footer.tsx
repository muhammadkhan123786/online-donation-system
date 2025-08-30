import { IoSettings } from 'react-icons/io5';
import { useLayoutContext } from '../../store/useLayoutContext';
const Footer: React.FC = () => {
  const { pageContent } = useLayoutContext();
  return (
    <footer className="bg-gray-800 text-white">
      <hr className="p-4 bg-amber-50" />
      <div className="p-4 text-center">
        {pageContent.footer && (
          <>
            <strong>Please note:</strong> {pageContent.footer}
          </>
        )}
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
