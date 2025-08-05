import { Link } from 'react-router-dom';
import type { HomeModel } from '../../models/Home-model/Home-model';
const HeaderSection: React.FC<{ HomeModel: HomeModel }> = ({ HomeModel }) => {
  return (
    <header>
      <div className="py-4 text-right px-8">
        <Link to="/help">Help</Link>
      </div>
      <div className="w-full justify-center items-center px-4 py-4">
        <h1 className="text-4xl font-bold text-center py-8">
          {HomeModel.heading}
        </h1>
        <p className="text-center">{HomeModel.message}</p>
      </div>
    </header>
  );
};
export default HeaderSection;
