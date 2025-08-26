import type {
  donationOption,
  donationType,
} from '../models/Home-model/Home-model';
const CI_API_KEY = 'j23n98fn2938fn2-2309fn2-fnsd2390';
export const fetchDonations = async (): Promise<
  donationOption[] | undefined
> => {
  try {
    const response = await fetch(
      'https://hfdonor.helpfoundation.org.uk/ods/getDonationsAmount/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CI_API_KEY,
        },
        body: JSON.stringify({ api_key: CI_API_KEY }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDonationTypes = async (): Promise<
  donationType[] | undefined
> => {
  try {
    const response = await fetch(
      'http://hfdonor.helpfoundation.org.uk/ods/getDonationsTypes/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': CI_API_KEY,
        },
        body: JSON.stringify({ api_key: CI_API_KEY }),
      }
    );
    console.log(response);
    if (!response.ok)
      throw new Error('Donation Types not fetched successfully.');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
