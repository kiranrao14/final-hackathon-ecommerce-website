
import React from 'react';
import TopHeader from "../Component/Header";
import { Header } from "../Component/Header";
import Footer from "../Component/Footer";
import OurProduct from '../Component/Ourproduct';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />
      <OurProduct />

      {/* Newsletter and Images Section */}
      <div className="bg-[#F0F2F3] py-10 px-5 text-center">
        <h2 className="text-2xl fontbold mb-12">
          Or subscribe to the Newsletter
        </h2>
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className="border-b border-gray-400 px-2">Email address...</span>
          <span className="border-b border-gray-400 px-4 font-medium cursor-pointer">SUBMIT</span>
        </div>
        <p className="text-2xl font-bold text-gray-600 mb-8">
          Follow products and discounts on Instagram
        </p>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/card (1).png" height={100} width={100} alt="Card 1" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/Category (2).png" height={100} width={100} alt="Category 2" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/card (2).png" height={100} width={100} alt="Card 2" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/Products (12).png" height={100} width={100} alt="Product 12" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/Products.png" height={100} width={100} alt="Product" />
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Image src="/images/Products (1).png" height={100} width={100} alt="Product 1" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
