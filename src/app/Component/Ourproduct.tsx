
import React from 'react';
import Image from 'next/image';

const OurProduct = () => {
  return (
    <div className=" sm:px-6 md:px-24 mb-9">
      <h1 className="flex justify-center text-3xl font-bold mb-10 mt-9">Our Products</h1>
      
      {/* Grid layout for images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        <Image
          src="/images/Products (1).png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Products (2).png"
          height={150}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Products (3).png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Products.png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Category.png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Frame 614.png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/card (1).png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/images/Products (12).png"
          height={200}
          width={200}
          alt=""
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default OurProduct;
