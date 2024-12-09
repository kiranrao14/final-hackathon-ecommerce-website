
import React from 'react';
import Image from 'next/image';

const NewStyle = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:pl-2 lg:-ml-14 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Vertical Text and Big Image Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4">
        {/* Vertical Text */}
        <div className="text-center lg:text-left lg:mr-4">
          <h1 className="text-xl font-bold transform lg:-rotate-90 whitespace-nowrap lg:mt-[100px]">
            Explore new and popular styles
          </h1>
        </div>

        {/* Large Image */}
        <div className="relative">
          <Image
            src="/images/item-category 1 (1).png"
            height={500}
            width={500}
            alt="Big Product"
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Smaller Images Section */}
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="/images/card (1).png"
          height={200}
          width={200}
          alt="Small Product 1"
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/card (2).png"
          height={200}
          width={200}
          alt="Small Product 2"
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/card (3).png"
          height={200}
          width={200}
          alt="Small Product 3"
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/card.png"
          height={200}
          width={200}
          alt="Small Product 4"
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default NewStyle;
