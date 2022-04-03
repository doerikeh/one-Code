import React from 'react';
import Navbar from '../components/Navbar';

export default function Users() {
  const users = JSON.parse(localStorage.getItem("user") || "[]");
  return (
    <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-32">
      <Navbar />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="flex justify-center">
          <div className='flex justify-center flex-wrap w-full space-y-6'>
            <div className='w-full'>
              <p>
                Username: {users.username}
              </p>
            </div>
            <div className='w-full'>
              <p>
                Email: {users.email}
              </p>
            </div>
            <div className='w-full'>
              <p>
                Address: {users.address.street}
              </p>
            </div>
            <div className='w-full'>
              <p>
                Phone: {users.phone}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
