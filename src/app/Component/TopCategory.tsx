
import React from 'react';
import Image from 'next/image';

const TopCategory = () => {
  return (
    <div className="p-4">
      <h1 className=" text-3xl font-semibold mb-9 mt-6">Top Categories</h1>
      <div className="flex flex-wrap justify-center gap-9">
        <div className="group relative">
          <Image
            src="/images/Category.png"
            
            height={300}
            width={300}
            alt="Category 1"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="group relative">
          <Image
            src="/images/Category (2).png"
            height={300}
            width={300}
            alt="Category 2"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="group relative">
          <Image
            src="/images/Category (1).png"
            height={300}
            width={300}
            alt="Category 3"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
