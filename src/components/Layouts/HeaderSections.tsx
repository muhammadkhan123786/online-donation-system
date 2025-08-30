import { Link, useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { useLayoutContext } from '../../store/useLayoutContext';
const HeaderSection: React.FC = () => {
  const { pageContent } = useLayoutContext();
  const navigate = useNavigate();

  const onClickBackHandler = () => {
    navigate(-1);
  };
  return (
    <header>
      <div className="flex justify-between py-4 px-4">
        {pageContent.backButton && (
          <div>
            <button
              onClick={onClickBackHandler}
              className="flex items-center gap-0.5 cursor-pointer"
            >
              <IoIosArrowBack />
              Back
            </button>
          </div>
        )}
        <div>
          <Link to="/help">Help</Link>
        </div>
      </div>
      <div className="w-full justify-center items-center px-4 py-4">
        <h1 className="text-4xl font-bold text-center py-8">
          {pageContent.heading}
        </h1>
        <p className="text-center">{pageContent.message}</p>
      </div>
    </header>
  );
};
export default HeaderSection;
