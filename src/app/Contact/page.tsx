
import React from 'react';
import TopHeader from '../Component/Header';
import { Header } from '../Component/Header';
import Footer from '../Component/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaShieldAlt, FaTrophy } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <TopHeader />
      <Header />

      {/* Heading Section */}
      <div className="text-center my-12">
        <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
        <p className="text-sm text-gray-600 mt-2">
          For more information about our product & services, please feel free to drop us
          an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-sm text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-sm text-gray-600">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaClock className="text-orange-500 text-xl" />
            <div>
              <h4 className="font-semibold">Working Time</h4>
              <p className="text-sm text-gray-600">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Subject</label>
            <input
              type="text"
              placeholder="This is optional"
              className="w-full border rounded-lg p-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              placeholder="Hi! I&apos;d like to ask about..."
              className="w-full border rounded-lg p-2 mt-1"
              rows={4}
            ></textarea>
          </div>

          <button className="w-full bg-[#029FAE] text-white py-2 rounded-lg hover:bg-blue-500 transition">
            Submit
          </button>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 px-10 text-center mb-9">
        {/* 24/7 Support */}
        <div className="flex flex-col items-center">
          <MdOutlineSupportAgent className="text-blue-500 text-4xl mb-4" />
          <h4 className="font-semibold text-lg">24/7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated support anytime</p>
        </div>

        {/* High Quality */}
        <div className="flex flex-col items-center">
          <FaTrophy className="text-yellow-500 text-4xl mb-4" />
          <h4 className="font-semibold text-lg">High Quality</h4>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-green-500 text-4xl mb-4" />
          <h4 className="font-semibold text-lg">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 years of protection</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

