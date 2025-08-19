import type { donationOption } from '../models/Home-model/Home-model';

export const fetchDonations = async (): Promise<
  donationOption[] | undefined
> => {
  try {
    const api_key = 'j23n98fn2938fn2-2309fn2-fnsd2390';
    const response = await fetch(
      'https://hfdonor.helpfoundation.org.uk/ods/getDonationsAmounts/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': api_key },
        body: JSON.stringify({ api_key: api_key }),
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
