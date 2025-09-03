import type { APIMETHOD } from '../models/TypeScript/Types';

export const API_CALL = async <T, U extends object | undefined = undefined>(
  url: string,
  body?: U,
  method: APIMETHOD = 'GET'
): Promise<T | undefined> => {
  if (!url) return undefined;

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'j23n98fn2938fn2-2309fn2-fnsd2390',
      },
      body: body && method === 'POST' ? JSON.stringify(body) : undefined,
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
