"use client";

import Image from "next/image";

export default function ProductDetail() {

    return (
        <section className="py-12 px-6 sm:px-8 lg:px-32 md:px-16 bg-[#FAFAFA]">

            <div className="flex gap-4 font-bold tracking-md text-[14px] mb-4 -mt-4 ml-4">
                <p className="text-[#252B42]">Home</p>
                <Image src="/arrowgray.svg" alt="arrow" width={7} height={7} />
                <p className="text-[#BDBDBD]">Shop</p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
                {/* Product Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/product.jpg" // Replace with actual product image
                            alt="Floating Phone"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                        {/* Optional Carousel for Images */}
                        <div className="absolute top-1/2 left-0 p-4 cursor-pointer">
                            <Image src="arrowl.svg" alt="Prev" width={16} height={16} />
                        </div>
                        <div className="absolute top-1/2 right-2 p-4 cursor-pointer">
                            <Image src="/arrowr.svg" alt="Next" width={16} height={16} />
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#252B42]">Floating Phone</h1>
                    <div className="flex items-center mt-2">

                        <div className="text-[#737373] text-[14px] font-bold tracking-md flex gap-1 items-center">
                            <Image src="/starsolid.svg" alt="Next" width={16} height={16} />
                            <Image src="/starsolid.svg" alt="Next" width={16} height={16} />
                            <Image src="/starsolid.svg" alt="Next" width={16} height={16} />
                            <Image src="/starsolid.svg" alt="Next" width={16} height={16} />
                            <Image src="/staroutline.svg" alt="Next" width={16} height={16} />
                            <p className="ml-3">10 Reviews</p>
                        </div>
                    </div>
                    <p className="text-[24px] font-bold tracking-tiny mt-2 text-[#252B42]">$1,139.33</p>
                    <p className="mt-2 text-gray-500 font-bold text-[14px]">Availability : <span className="text-[#23A6F0]"> In Stock</span></p>
                    <p className="text-sm text-[#858585] tracking-md mt-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>

                    {/* Color Options */}
                    <div className="flex gap-2 mt-6">
                        <Image src="/blue.svg" alt="Next" width={23} height={23} />
                        <Image src="/green.svg" alt="Next" width={23} height={23} />
                        <Image src="/yellow.svg" alt="Next" width={23} height={23} />
                        <Image src="/navyblue.svg" alt="Next" width={23} height={23} />
                    </div>

                    {/* Select Options and Actions */}
                    <div className="flex gap-6 items-center mt-6">
                        <button className="bg-[#23A6F0] text-white font-bold text-[14px] tracking-md py-2 px-4 rounded-md">Select Options</button>
                        <div className="flex items-center gap-4">
                            <button className="p-2 bg-[#FFFFFF] border border-black/2 rounded-full hover:bg-[#FAFAFA]">
                                <Image src="/like2.svg" alt="Wishlist" width={20} height={20} />
                            </button>
                            <button className="p-2 bg-[#FFFFFF] border border-black/2 rounded-full hover:bg-[#FAFAFA]">
                                <Image src="/cart2.svg" alt="Cart" width={20} height={20} />
                            </button>
                            <button className="p-2 bg-[#FFFFFF] border border-black/2 rounded-full hover:bg-[#FAFAFA]">
                                <Image src="/eye.svg" alt="Eye" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:block hidden">
                <div className="flex gap-4 items-center justify-start mt-4">
                    <Image src="/p1.png" alt="product" width={100} height={100} />
                    <Image src="/p2.png" alt="product" width={100} height={100} />
                </div>
            </div>
        </section>
    );
}
