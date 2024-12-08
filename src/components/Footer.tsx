"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();

    // Set color based on pathname
    const isLandingPage = pathname === "/";
    const footerColor = isLandingPage ? "bg-[#FAFAFA]" : "bg-[#FFFFFF] border-b border-[#737373] border-opacity-50 ";

    return (
        <footer>
            {/* Top Section */}
            <div className={`px-6 sm:px-8 lg:px-32 md:px-16 py-12 sm:flex justify-between items-center ${footerColor} `}>

                {/* Logo and Social Icons */}

                <h1 className="text-xl font-bold text-[#252B42]">Bandage</h1>

                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    {/* Facebook Icon */}
                    <a href="#" className="hover:opacity-75">
                        <Image
                            src="/fb2.svg" // Replace with your SVG path
                            alt="Facebook"
                            width={20}
                            height={20}
                        />
                    </a>
                    {/* Instagram Icon */}
                    <a href="#" className="hover:opacity-75">
                        <Image
                            src="/insta2.svg" // Replace with your SVG path
                            alt="Instagram"
                            width={18}
                            height={18}
                        />
                    </a>
                    {/* Twitter Icon */}
                    <Link href="#" className="hover:opacity-75">
                        <Image
                            src="twitter2.svg" // Replace with your SVG path
                            alt="Twitter"
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </div>
            <div className='bg-white py-12 w-full px-6 sm:px-8 lg:px-32 md:px-16'>
                {/* Links Section */}
                <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-6 gap-6 font-bold lg:text-left">
                    {/* Column 1 */}
                    <div>
                        <h3 className="font-semibold text-[#252B42] text-[16px] tracking-tiny">Company Info</h3>
                        <ul className="mt-4 space-y-2 text-sm text-[#737373] text-[14px] tracking-md">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold text-[#252B42] text-[16px] tracking-tiny">Legal</h3>
                        <ul className="mt-4 space-y-2 text-sm text-[#737373] text-[14px] tracking-md">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">We are hiring</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold text-[#252B42] text-[16px] tracking-tiny">Features</h3>
                        <ul className="mt-4 space-y-2 text-sm text-[#737373] text-[14px] tracking-md">
                            <li><a href="#">Business Marketing</a></li>
                            <li><a href="#">User Analytic</a></li>
                            <li><a href="#">Live Chat</a></li>
                            <li><a href="#">Unlimited Support</a></li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div>
                        <h3 className="font-semibold text-[#252B42] text-[16px] tracking-tiny">Resources</h3>
                        <ul className="mt-4 space-y-2 text-sm text-[#737373] text-[14px] tracking-md">
                            <li><a href="#">iOS & Android</a></li>
                            <li><a href="#">Watch a Demo</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>


                    {/* Subscription Section */}
                    <div className="w-full text-left sm:col-span-2">
                        <h3 className="font-bold text-[#252B42] text-[16px] tracking-tiny">Get In Touch</h3>
                        <form className="mt-4 flex items-center max-w-20">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="font-normal w-auto bg-[#F9F9F9] px-2 sm:px-4 py-3 border border-[#E6E6E6] rounded-tl rounded-bl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[14px]"
                            />
                            <button
                                type="submit"
                                className="w-fit lg:w-auto text-white px-4 sm:px-6 py-3 bg-[#23A6F0] rounded-tr rounded-br"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 font-extralight text-[12px] text-[#737373]">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full py-6 font-bold text-[#737373] text-[14px] tracking-md bg-[#FAFAFA]">
                <p className='text-center sm:text-left px-6 sm:px-8 lg:px-32 md:px-16'>
                    Made With Love By Finland. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
