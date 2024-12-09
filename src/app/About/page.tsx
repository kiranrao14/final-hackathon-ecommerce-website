
import React from 'react';
import TopHeader from '../Component/Header';
import { Header } from '../Component/Header';
import Footer from '../Component/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div>
      <TopHeader />
      <Header />

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 p-5 md:p-9">
        {/* Text Section */}
        <div className="w-full md:w-1/2 bg-[#029FAE] flex flex-col justify-center p-4 md:h-[300px]">
          <h2 className="text-3xl text-white font-bold mb-4">About Us - Comforty</h2>
          <p className="text-white text-sm mb-6">
            At Comforty, we believe that the right chair can transform your space
            and elevate your comfort. Specializing in ergonomic design,
            <br />
            premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with
            functionality.
          </p>
          <button className="bg-[#2f6a70] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
            View Collection
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:h-[300px]">
          <Image src="/images/card (1).png" height={300} width={300} alt="Comforty Chair" className="object-cover" />
        </div>
      </div>

      {/* What makes our Brand Different Section */}
      <div className="p-8">
        <h2 className="text-2xl flex items-center justify-center font-bold mb-4">What makes our Brand Different</h2>
        <div className="flex justify-between gap-6 text-[#029FAE]">
          <span className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all w-1/4">
            Next day as standard<br />
            Order before 3pm and get your order the next day as standard
          </span>
          <span className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all w-1/4">
            Made by true artisans<br />
            Handmade crafted goods made with real passion and craftsmanship
          </span>
          <span className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all w-1/4">
            Unbeatable prices<br />
            For our materials and quality you won&apos;t find better prices anywhere
          </span>
          <span className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all w-1/4">
            Recycled packaging<br />
            We use 100% recycled to ensure our footprint is more manageable
          </span>
        </div>
      </div>

      {/* Our Popular Products Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Popular Products</h2>
        <div className="flex flex-wrap gap-6 justify-center transition-transform duration-300 group-hover:scale-200">
          <Image src='/images/Product Card.png' height={300} width={300} alt='Product 1' />
          <Image src='/images/Product Card (1).png' height={200} width={200} alt='Product 2' />
          <Image src='/images/Product Card (2).png' height={200} width={200} alt='Product 3' />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
