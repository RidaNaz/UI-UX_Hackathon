"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    // Set color based on pathname
    const isLandingPage = pathname === "/";
    const headerColor = isLandingPage ? "bg-[#252B42]" : "bg-[#23856D]";

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className={`${headerColor} text-white`}>
            <div className="sm:block hidden">
                <div className="px-8 py-4 flex items-center justify-center md:justify-between text-sm font-bold">
                    <div className="flex gap-6">
                        <div className="flex gap-2">
                            <Image src="/phone.svg" alt="Phone" width={16} height={16} />
                            <p>(225) 555-0118</p>
                        </div>
                        <div className="flex gap-2">
                            <Image src="/email.svg" alt="Email" width={16} height={16} />
                            <p>michelle.rivera@example.com</p>
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <p>Follow Us  and get a chance to win 80% off</p>
                    </div>
                    <div className="lg:block hidden">
                        <div className="flex gap-4 items-center">
                            <p>Follow Us  :</p>
                            <Link href="#"><Image src="/insta.svg" alt="Instagram" width={16} height={16} /></Link>
                            <Link href="#"><Image src="/yt.svg" alt="YouTube" width={18} height={18} /></Link>
                            <Link href="#"><Image src="/fb.svg" alt="Facebook" width={17} height={17} /></Link>
                            <Link href="#"><Image src="/twitter.svg" alt="Twitter" width={16} height={16} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white px-8 py-6 flex items-center justify-between font-bold">
                <h1 className="text-[26px] text-[#252B42]">Bandage</h1>
                <div className="md:block hidden">
                    <nav className="flex gap-6 text-[#737373]">
                        <Link href="/">Home</Link>
                        <select
                            className="outline-none border-none lg:block hidden"
                            onChange={(e) => {
                                const selectedValue = e.target.value;
                                if (selectedValue) {
                                    window.location.href = selectedValue; // Navigate to the URL
                                }
                            }}
                        >
                            <option value="/shop">Shop</option>
                            <option value="/team">Team</option>
                        </select>
                        <Link href="/about">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/product">Pages</Link>
                    </nav>
                </div>
                <div className="md:block hidden">
                    <div className="flex items-center gap-8 text-[#23A6F0]">
                        <div className="flex lg:gap-2 items-center">
                            <Image src="/login.svg" alt="Login" width={16} height={16} />
                            <Link href="/search"><p className="text-sm lg:block hidden">Login / Register</p></Link>
                        </div>
                        <div className="flex items-center gap-8">
                            <Link href=""><Image src="/search.svg" alt="Search" width={16} height={16} /></Link>
                            <div className="flex items-center gap-2">
                                <Link href="/cart"><Image src="/cart.svg" alt="Cart" width={18} height={16} /></Link>
                                <p className="text-xs font-light">1</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href="/wishlist"><Image src="/like.svg" alt="Wishlist" width={16} height={16} /></Link>
                                <p className="text-xs font-light">1</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:hidden block">
                    <div className="flex items-center gap-3">
                        <Image src="/search2.svg" alt="Search icon" width={20} height={20} />
                        <Link href="/cart"><Image src="/cart2.svg" alt="Cart icon" width={20} height={20} /></Link>
                        <button onClick={toggleMobileNav}>
                            <Image
                                src="/hamburger.svg"
                                alt="Hamburger icon"
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileNavOpen && (
                <div className="bg-white px-8 py-6 text-[#737373] text-center text-lg flex flex-col gap-6">
                    <Link href="/" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
                    <Link href="/shop" onClick={() => setIsMobileNavOpen(false)}>Shop</Link>
                    <Link href="/about" onClick={() => setIsMobileNavOpen(false)}>About</Link>
                    <Link href="/blog" onClick={() => setIsMobileNavOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setIsMobileNavOpen(false)}>Contact</Link>
                    <Link href="/product" onClick={() => setIsMobileNavOpen(false)}>Pages</Link>

                    <div className="text-center flex flex-col gap-4 items-center">
                        <div className="flex gap-2 items-center text-[#23A6F0] font-bold">
                            <Image src="/login.svg" alt="Login" width={16} height={16} />
                            <Link href="/search"><p className="text-sm ">Login / Register</p></Link>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <Link href="/search"><Image src="/search.svg" alt="Search" width={16} height={16} /></Link>
                            <div className="flex items-center gap-2">
                                <Link href="/cart"><Image src="/cart.svg" alt="Cart" width={18} height={16} /></Link>
                                <p className="text-xs font-bold text-[#23A6F0]">1</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href="/wishlist"><Image src="/like.svg" alt="Wishlist" width={16} height={16} /></Link>
                                <p className="text-xs font-bold text-[#23A6F0]">1</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header >
    );
}