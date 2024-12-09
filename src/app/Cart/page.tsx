
import React from 'react'
import TopHeader from '../Component/Header';
import { Header } from '../Component/Header';
import Footer from '../Component/Footer';
import Image from 'next/image';
import { RiHeartLine, RiDeleteBinLine } from 'react-icons/ri'; // Importing the heart and delete icons

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <h3 className="text-center my-4">Bag</h3>

      {/* Section for the images and summary */}
      <div className="flex justify-center gap-8 mt-6 mb-6">

        {/* Left: Images */}
        <div className="flex flex-col items-center gap-4">
          {/* First Item */}
          <div className="flex items-center gap-4 mb-4">
            <Image src='/images/item-category 1 (1).png' height={150} width={150} alt='' />
            <div>
              <h4>Library Stool Chair</h4>
              <p>MRP: $99</p>
              <p>Ashen Slate/Cobalt Bliss</p>
              <p>Size: L</p>
              <p>Quantity: 1</p>
              {/* Icons for Heart and Delete */}
              <div className="flex gap-4 mt-2">
                <RiHeartLine className="text-red-500 cursor-pointer" size={24} />
                <RiDeleteBinLine className="text-gray-700 cursor-pointer" size={24} />
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex items-center gap-4 mb-4">
            <Image src='/images/Category.png' height={150} width={150} alt='' />
            <div>
              <h4>Library Stool Chair</h4>
              <p>MRP: $99</p>
              <p>Ashen Slate/Cobalt Bliss</p>
              <p>Size: L</p>
              <p>Quantity: 1</p>
              {/* Icons for Heart and Delete */}
              <div className="flex gap-4 mt-2">
                <RiHeartLine className="text-red-500 cursor-pointer" size={24} />
                <RiDeleteBinLine className="text-gray-700 cursor-pointer" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary */}
        <div className="w-[300px] ml-10 mb-6">
          <h4>Summary</h4>
          <div className="mb-5 flex justify-between">
            <span>Subtotal</span>
            <span>$198.00</span>
          </div>
          <div className="mb-6 flex justify-between">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Total</span>
            <span>$198.00</span>
          </div>
          <button className="bg-[#029FAE] text-white px-4 py-2 rounded-lg mt-4">Member Checkout</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page;
