

'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <>
      {/* Removed margin and padding to eliminate the gap */}
      <div className="h-[48px] flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-24 bg-[rgb(39,35,67)] text-white mb-0">
        <p className="text-sm font-poppins text-center sm:text-left">
          Free shipping on all orders over $50
          <span className="font-semibold underline ml-2">ShopNow</span>
        </p>

        {/* Dropdown moved to the right */}
        <select
          name="select"
          id="select"
          className="bg-[rgb(39,35,67)] text-white border border-gray-500 rounded px-2 py-1 text-sm ml-auto"
        >
          <option value="English">English</option>
          <option value="Faqs">FAQs</option>
          <option value="Need Help">Need Help</option>
        </select>
      </div>

      {/* Main header section */}
      <div className="bg-white py-4 flex justify-between items-center px-0 sm:px-8 lg:px-24 rounded-lg shadow-md mb-0" style={{ backgroundColor: '#F0F2F3' }}>
        {/* Comforty image and text on the left */}
        <div className="flex items-center">
          <Image src='/images/Logo Icon.png' height={40} width={40} alt='Image' />
          <span className="ml-2">Comforty</span>
        </div>

        {/* Cart icon, image, and number 2 in one line */}
        <Link href="../Cart">
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md cursor-pointer">
            <FaCartShopping />
            <span className="ml-2 text-black">Cart</span>
            <span className="bg-sky-700 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs ml-2">2</span>
          </div>
        </Link>
      </div>
    </>
  );
};




export default TopHeader;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main header section */}
      <div className=" mt-6 py-4 flex justify-between items-center px-0 sm:px-8 lg:px-24 rounded-lg shadow-md mb-0">
        {/* Left side: Navigation links - Hidden on small screens, visible on large */}
        <div className="hidden lg:flex space-x-8">
          <Link href="../" className="text-black hover:text-[#029FAE]">Home</Link>
          <Link href="../About" className="text-black hover:text-[#029FAE]">About</Link>

          <Link href="../Product" className="text-black hover:text-[#029FAE]">Product</Link>
          <Link href="../Page" className="text-black hover:text-[#029FAE]">Pages</Link>

        </div>

        {/* Right side: Contact information */}
        <div className="flex items-center text-sm text-black hover:text-[#029FAE]">
          <Link href="/Contact ">Contact: (808) 555-0111</Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {/* Icon for the hamburger menu */}
            {isMenuOpen ? (
              <span className="text-xl">&times;</span> // Cross icon when menu is open
            ) : (
              <span className="text-xl">&#9776;</span> // Hamburger menu icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu: Conditionally render it based on state */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-2 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link href="../" className="text-black">Home</Link>

            <Link href="../Product" className="text-black">Product</Link>
            <Link href="../page" className="text-black">Pages</Link>
            <Link href="../About" className="text-black">About</Link>
            <Link href="../Contact" className="text-black">Contact: (808) 555-0111</Link>
          </div>
        </div>
      )}
    </>
  );
};
