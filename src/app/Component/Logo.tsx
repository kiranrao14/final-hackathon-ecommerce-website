
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-white p-4 rounded-lg mt-9">
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (1).png'
          height={70}
          width={50}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (2).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (3).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (4).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (5).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (6).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
      <div className="logo-item group hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 relative flex justify-center items-center">
        <Image
          src='/images/Logo (7).png'
          height={70}
          width={70}
          alt='logo'
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Small purple line to the right */}
        <div className="absolute right-0 top-5 h-[30px] w-[2px] bg-pink-600"></div>
      </div>
    </div>
  )
}

export default Logo
