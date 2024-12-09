
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div  className="flex justify-center items-center  mt-1 p-0" >
      <div
        className="bg-[#F0F2F3] text-white rounded-lg p-10 w-full lg:w-[60%] lg:h-[450px] pt-16 relative flex flex-col lg:flex-row items-center shadow-md"
      >
        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start lg:mr-4">
          <div className="flex items-center mb-2 text-gray-500">
            <span className="text-xl">Welcome to Chairy</span>
          </div>
          {/* Promo Text */}
          <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-left text-black">
            Best Furniture
            <br />
            Collection for your
            <br />
            interior.
          </h2>
          <p
            className="flex items-center text-lg font-medium cursor-pointer rounded-lg
            px-4 py-2 text-white bg-[#029FAE] mt-2"
          >
            Shop Now <FaArrowRight className="ml-2" />
          </p>
        </div>
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center mt-4 lg:mt-0">
          <Image
            src="/images/Product Image.png"
            height={350}
            width={300}
            alt="Product"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
