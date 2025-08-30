import { Outlet } from 'react-router-dom';
import Section from '../../UI/Section';
import HeaderSection from './HeaderSections';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  return (
    <Section>
      <HeaderSection />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <Footer />
    </Section>
  );
};

export default RootLayout;
