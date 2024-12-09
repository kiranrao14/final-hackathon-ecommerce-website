
import React from 'react';
import TopHeader from '../Component/Header';
import { Header } from '../Component/Header';
import Footer from '../Component/Footer';
import Image from 'next/image';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <TopHeader />
      <Header />

      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src='/images/Image (1).png'
            height={400}
            width={400}
            alt='Library Stool Chair'
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-8">Library Stool Chair</h1>
          <span className="bg-[#029FAE] p-1 rounded text-gray-700 mb-8">$20.00 USD</span>
          <p className="text-sm text-gray-600 mb-8 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />
            Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button className="bg-[#029FAE] text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="flex items-center justify-between mt-12">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <span className="text-[#029FAE] cursor-pointer text-2xl border-b-4">View all</span>
      </div>

      {/* Featured Products Grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/images/card (1).png" height={200} width={180} alt="Card 1" />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/images/Category (2).png" height={200} width={180} alt="Category 2" />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/images/card (2).png" height={200} width={180} alt="Card 2" />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/images/Products (12).png" height={200} width={180} alt="Product 12" />
        </div>
        <div className="hover:scale-110 transition-transform duration-300">
          <Image src="/images/Products.png" height={200} width={180} alt="Product" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
