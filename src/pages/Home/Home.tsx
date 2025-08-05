import DonationOptions from '../../components/Home-Components/DonationOptions';
import Footer from '../../components/Home-Components/Footer';
import HeaderSection from '../../components/Home-Components/HeaderSections';
import { donations } from '../../db/donations';

const Home: React.FC = () => {
  const header = {
    id: 1,
    heading: 'PLEASE DONATE GENEROUSLY',
    message: `Your contribution are the heartbeat of Masjid Yusuf's progress. With a
          £472k debt and upcoming projects including a £30k main Hall carpet
          refresh post-Ramadan, your support ensures our community's growth and
          vitality. Thank your generosity and commitment.`,
  };
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection HomeModel={header} />

      <main className="flex-grow p-4 bg-gray-100">
        {/*Donation listing. */}
        <DonationOptions donations={donations} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
