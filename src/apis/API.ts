const CI_API_KEY = 'j23n98fn2938fn2-2309fn2-fnsd2390';

export const fetchRecords = async <T>(url: string): Promise<T | undefined> => {
  if (!url) return undefined;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CI_API_KEY,
      },
      body: JSON.stringify({ api_key: CI_API_KEY }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: T = await response.json();
    return data as Promise<T>;
  } catch (error) {
    console.log(error);
  }
};

