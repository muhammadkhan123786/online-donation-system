import type React from 'react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { googlePlaces_API_Key } from '../../apis/config';

const GiftAidForm: React.FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googlePlaces_API_Key}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const cancelHandler = () => {
    navigate(-1);
  };
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formvalue = new FormData(form);

    console.log(formvalue.get('taxpayer') ? '1' : '0');
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleForm}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              ref={inputRef}
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name."
              className="py-3 px-2 border border-gray-200 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Please enter your address."
              className="py-3 px-2 border border-gray-200 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Post code</label>
            <input
              type="text"
              id="post-code"
              name="post-code"
              placeholder="Please enter post code."
              className="py-3 px-2 border border-gray-200 rounded md:w-2xl"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="taxpayer"
              name="taxpayer"
              className="transform scale-150"
            />
            <span>I confirm I am a UK taxpayer.</span>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white rounded cursor-pointer px-4 py-2"
              onClick={cancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GiftAidForm;
