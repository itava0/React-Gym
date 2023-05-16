'use client';
import { useState, useEffect } from 'react';
import Profile from '@/components/Profile/Profile';
import { useSearchParams } from 'next/navigation';

const Cart = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const searchParams = useSearchParams();
  const priceId = searchParams.get('id');
  const price = searchParams.get('price');
  let date = new Date().toLocaleDateString();

  const handleCheckout = async (priceId) => {
    try {
      const resp = await fetch('http://localhost:8000/users', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        Body: {
          name: firstName + ' ' + lastName,
          email: email,
          birthdate: birthdate,
          gender: gender,
          address: address,
          phone: phoneNumber,
        },
        Cache: 'default',
      });
      console.log(resp.data);
    } catch (error) {
      console.error('Create User error:', error);
    }

    try {
      const response = await fetch(
        'https://react-gym.azurewebsites.net/create-checkout-session',
        {
          Method: 'POST',
          Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json',
          },
          Body: { priceId },
          Cache: 'default',
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Stripe error:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center md:gap-[5rem] lg:gap-2 mt-[150px]">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <form onClick={handleCheckout} className="p-8">
          <Profile
            setFirstName={setFirstName}
            setLastName={setLastName}
            setBirthdate={setBirthdate}
            setGender={setGender}
            setAddress={setAddress}
            setPhoneNumber={setPhoneNumber}
            setEmail={setEmail}
          />
          <button
            type="submit"
            className="mt-10 block w-1/2 rounded-md bg-indigo-600 px-3 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Checkout
          </button>
        </form>
      </div>
      <div className=" w-full md:w-1/4 p-8">
        <h1 className="text-3xl font-bold mb-4">Summary</h1>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Gym:</p>
          <p className="text-lg">University Place</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Primary Member:</p>
          <p className="text-lg">John Doe</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Enrollment Fee:</p>
          <p className="text-lg">{price}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold mb-2 text-xl">Annual Fee:</p>
          <p className="text-lg">$49.00</p>
        </div>
        <div>
          <p className="mb-2 text-xl">
            Annual fee will be billed on June 20th. Taxes may apply.
          </p>
          <p className="font-bold mb-2 text-xl">Effective Date:</p>
          <p className="text-lg">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
