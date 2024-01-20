import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

export default function SideNavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        { label: 'About Us', link: '/about-us' },
        { label: 'Open Displate Shop', link: '/open-shop' },
        { label: 'Become an Influencer', link: '/influencers' },
        { label:'Displate', link:'/join-displate-club'},
        { label:'Shipping', link:'/about-shipping'},
        { label:'Magnet', link:'/Mounting'},
        { label:'FAQ', link:'/FAQ'},
        { label:'Copyright', link:'/about-copyright'},
        { label:'Contact Us', link:'/about-contact'},
        { label:'Career', link:'/career'},
        { label:'Terms of Use',link:'/terms-of-use'},
        { label: 'Privacy', link: '/about-privacy' },
      ];
    return (
        <div className="lg:min-w-1/4 lg:flex lg:flex-col lg:items-center lg:gap-4 lg:pr-24 relative">
        {/* Hamburger button for small screens */}
        <button
          className="lg:hidden block text-blue-500 p-3 focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>
  
        {/* Floating Sidebar for small screens */}
        {isNavOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-1/2 h-full bg-white z-50 overflow-y-scroll">
            <button
              className="text-blue-500 p-3 absolute top-0 right-0 focus:outline-none"
              onClick={() => setIsNavOpen(false)}
            >
              ✕
            </button>
  
            <ul className="flex flex-col w-full  mt-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-base no-underline block w-full p-3 hover:bg-blue-500 hover:text-white" 
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {/* Side Navbar for larger screens */}
        <ul
          className={`hidden lg:flex lg:min-w-64 lg:flex-col lg:w-full mb-4 lg:mb-24 lg:border lg:border-solid lg:border-gray-300`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className="text-base no-underline block w-full p-3 hover:bg-blue-500 hover:text-white"
                href={item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
    )
}
