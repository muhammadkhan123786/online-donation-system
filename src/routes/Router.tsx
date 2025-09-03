import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import DonationTypes from '../pages/Donation-Types/DonationTypes';
import RootLayout from '../components/Layouts/RootLayout';
import CustomDonation from '../pages/custom-donation/Custom-Donation';
import GiftAidDeclaration from '../pages/Gift-Aid/GiftAidDeclaration';
import GiftAidForm from '../pages/Gift-Aid/GiftAidForm';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'donation-types',
          element: <DonationTypes />,
        },
        { path: 'custom-donation', element: <CustomDonation /> },
        { path: 'gift-aid-declaration', element: <GiftAidDeclaration /> },
        { path: 'gift-aid-info', element: <GiftAidForm /> },
      ],
    },
  ],
  {
    basename: '/online-donation-system', // ✅ this is important
  }
);
