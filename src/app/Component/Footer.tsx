
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaCcVisa, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#f5f5f5] py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-24">
        {/* Comforty, Category, Support, and Newsletter in a Single Line */}
        <div className="flex flex-wrap justify-between items-start mb-6">
          {/* Comforty Section with Logo, Text, and Icons */}
          <div className="flex flex-col items-center w-full md:w-1/4 text-center mb-6 md:mb-0">
            <Image src="/images/Logo Icon.png" height={40} width={40} alt="Logo" />
            <span className="mt-2 text-lg font-semibold">Comforty</span>
            {/* Description Text */}
            <p className="mt-4 text-sm text-gray-600 hover:text-[#029FAE]">
              Vivamus tristique odio sit amet velit
              <br />
              semper, eu posuere turpis
              <br />
              interdum. Cras egestas purus.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#">
                <FaFacebookF size={20} className="text-gray-600 hover:text-blue-800" />
              </Link>
              <Link href="#">
                <FaInstagram size={20} className="text-gray-500 hover:text-pink-700" />
              </Link>
              <Link href="#">
                <FaTwitter size={20} className="text-[#1DA1F2] hover:text-[#1a91da]" />
              </Link>
              <Link href="#">
                <FaYoutube size={20} className="text-[#FF0000] hover:text-[#e60000]" />
              </Link>
            </div>
          </div>

          {/* Category Section */}
          <div className="text-center w-full md:w-1/4 mb-6 md:mb-0">
            <p className="font-semibold mb-2">Category</p>
            <ul>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Sofa</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Armchair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Wing Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Desk Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Wooden Chair</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Park Bench</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="text-center w-full md:w-1/4 mb-6 md:mb-0">
            <p className="font-semibold mb-2">Support</p>
            <ul>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Help & Support</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-[#029FAE]">Help</Link></li>

            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center w-full md:w-1/4">
            <p className="font-semibold mb-2">Newsletter</p>
            <p className="text-sm text-gray-600 mb-2">Your email</p>
            <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 text-sm border rounded-lg w-full md:w-auto"
              />
              <button className="bg-[#029FAE] text-white px-4 py-2 text-sm rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t pt-6 text-sm text-gray-500">
          {/* Copyright Section */}
          <p className="text-left">&copy; 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          {/* Payment Icons */}
          <div className="flex space-x-4 items-center">
            <div className="flex items-center">
              <FaCcVisa size={20} className="text-gray-600" />
              <span className="ml-2">Visa</span>
            </div>
            <div className="flex items-center">
              <FaCcPaypal size={20} className="text-gray-600" />
              <span className="ml-2">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
