import React from 'react'
import Link from 'next/link'

export default function SideNavBar() {
    return (
        <div className="min-w-1/4 flex flex-col items-center gap-4 pr-24 ">
            <ul className="flex flex-col min-w-64 w-full mb-24 border border-solid border-gray-300">
                <li>
                    <Link className="text-base leading-6 no-underline block text-blue-500 w-full p-3 a hover:bg-blue-500 hover:text-white" href="/about-us">About Us</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/open-shop">Open Displate Shop</Link>
                </li>
                <li>
                    <Link className="text-base font-normal leading-6 no-underline block text-blue-500 w-full p-3" href="/influencers">Become an Influencer</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/join-displate-club">Displate Club</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-shipping">Shipping &amp; Returns</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-mounting">Magnet Mounting</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-faq">FAQ</Link>
                </li>
                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-copyright">Copyright</Link>
                </li>
                <li>
                    <Link className="text-base  hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-contact">Contact us</Link>
                </li>
                <li>
                    <Link className="text-base  hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/career">Career</Link>
                </li>

                <hr className="w-full border-t border-solid border-gray-300 m-0"></hr>

                <li>
                    <Link className="text-base hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-regulations">Terms of Use</Link>
                </li>
                <li>
                    <Link className="text-base  hover:bg-blue-500 hover:text-white leading-6 no-underline block text-blue-500 w-full p-3" href="/about-privacy">Privacy</Link>
                </li>
            </ul>
        </div>
    )
}
