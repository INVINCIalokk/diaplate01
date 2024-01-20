'use client';
import React from 'react'




export default function Header() {


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
  <header className="bg-white">
    <nav className="mx-auto flex flex-col lg:flex-row max-w-7xl items-center justify-between p-4 lg:px-8 border-b border-gray-300 px-15px">

      {/* Logo and Brand */}
      <div className="flex items-center">
        <a href="#" className="font-black flex items-center">
          <span className="sr-only">Displate</span>
          <img className="h-8 w-auto" height={34} width={130} src="https://displate.com/img/svg/logo_dark.svg" alt="" />
          <span className='small-brand text-right'>METAL POSTERS</span>
        </a>
      </div>

      {/* Search Input */}
      <div className="mt-4 lg:mt-0">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search"
        />
      </div>

      {/* Navigation Links */}
      <div className='flex mt-4 lg:mt-0 space-x-6'>
        <div className='cursor-pointer hover:text-blue-500'>Club</div>
        <div className='cursor-pointer hover:text-blue-500'>Wishlist</div>
        <div className='cursor-pointer hover:text-blue-500'>Cart</div>
        <div className='cursor-pointer hover:text-blue-500'>Join</div>
      </div>
    </nav>
  </header>
</div>
    )
}
