
import Image from 'next/image';
import React from 'react';

const FeaturedProducts = () => {
  return (
    <>
    <h1 className='font-bold mt-6 text-3xl mb-3'>Featured Products</h1>

    <div className="flex flex-wrap justify-center gap-6 p-4">
        <div className="group relative">
        <Image
          src="/images/Products (1).png"
          height={400}
          width={300}
          alt="Product 1"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="group relative">
        <Image
          src="/images/Products (2).png"
          height={400}
          width={300}
          alt="Product 2"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="group relative">
        <Image
          src="/images/Products (3).png"
          height={400}
          width={300}
          alt="Product 3"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="group relative">
        <Image
          src="/images/Products.png"
          height={400}
          width={300}
          alt="Product 4"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
    </>
  );
};

export default FeaturedProducts;
