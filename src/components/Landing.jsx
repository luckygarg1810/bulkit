import React from 'react';   
import { CardDemo } from './ui/Card';
import { CardDemo2 } from './ui/Card2';
import { CardDemo3 } from './ui/Card3';
import { InfiniteMovingCardsDemo } from './ui/MovingCard';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Hero Section */}

      <main className="flex-grow  ">
        <div className="container mx-auto px-6 py-16 text-center bg-gradient-to-r from-[rgb(213,200,197)] to-[rgb(161,145,133)]">
          <h1 className="text-4xl font-bold text-[rgb(65,64,61)] mb-4">
            Welcome to BulkIt
          </h1>
          <p className="text-lg text-[rgb(20,20,20)] mb-8">
            Schedule your   orders and combine with friends for a seamless shopping experience.
          </p>
          <div>
            <a
              href="/create-order"
              className="bg-[rgb(71,63,57)] text-white px-6 py-3 rounded-md hover:bg-[rgb(42,32,33)] transition-all duration-200"
              >
              Get Started
            </a>
          </div>
        </div> 

         {/*Cards  */}

        <section  className="py-6  bg-white">
          <div className='justify-center flex'>
          <div className='flex space-x-16 mt-5'>
        <CardDemo/> 
        <CardDemo2/>
        <CardDemo3/>
          </div>
          </div>
        </section>

        {/* Features */}'
        
        {/* <div className='  w-full'>
          <InfiniteMovingCardsDemo/>
        </div> */}

        
 
        <section className="py-6  bg-white">
  <div className="container mx-auto flex flex-col items-center px-6">
    <div className="flex flex-col space-y-8">
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg hover:bg-[rgb(161,145,133)] transition-shadow duration-200">
        <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
        <p className="text-gray-600 text-xs"> 
        Consolidating orders can lead to fewer delivery trips, thereby reducing the carbon footprint and contributing to more sustainable consumption.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg hover:bg-[rgb(161,145,133)] transition-shadow duration-200">
        <h3 className="text-xl font-semibold mb-2">Community Building</h3>
        <p className="text-gray-600 text-xs">
        The platform fosters a sense of community, enabling users to connect, share deals, and coordinate their orders with friends, colleagues, or neighbors.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg hover:bg-[rgb(161,145,133)] transition-shadow duration-200">
        <h3 className="text-xl font-semibold mb-2">
        Improved Organization
        </h3>
        <p className="text-gray-600 text-xs">
        With a centralized platform to manage orders, users have a clearer overview of upcoming deliveries and can better plan their shopping.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Bulkit. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
