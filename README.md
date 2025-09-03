# 🏦 Online Donation System

A complete online donation platform for mosques, churches, and charitable organizations.  
Users can select projects, project type, custom donation entry choose a payment method (card, PayPal, Stripe), and donate easily.

## 🚀 Features

- [x] Home page donation options with amount selection (completed).
- [x] API integration to call amount of projects from backend with loading, and error state handler(done).
- Secure payment gateway integration
- Admin panel to manage projects and donors
- Responsive design for all devices

🚀 Improvements & Optimizations
🔹 Generic API Utility

I refactored the project by creating a generic async API function that supports both GET and POST requests.

Handles request body automatically for POST methods

Reduces duplicate fetch logic across the codebase

Improves maintainability and scalability of the project

Simplifies adding new API endpoints in the future

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

## 🛠️ Tech Stack

- Frontend: React.js / Bootstrap / jQuery
- Backend: Codeigniter (PHP framework)
- Database: MySQL
- Payment: Sumup card reader machine.
