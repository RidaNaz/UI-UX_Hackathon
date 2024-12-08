import Image from "next/image";

export default function ClassicProduct() {
    return (
        <section
            className="relative md:max-h-screen mt-16 bg-[#23856D] text-white flex items-center"
        >
            <div className="container pt-32 md:pt-32 lg:pt-0 mx-auto grid md:grid-cols-2 gap-10 px-6 sm:px-8 lg:px-32 md:px-16 items-center">
                {/* Text Content */}
                <div className="w-full text-center lg:text-left">
                    <p className="uppercase tracking-wider text-[16px] font-bold">
                        Summer 2020
                    </p>
                    <h1 className="text-[40px] lg:text-[58px] font-bold mt-2 leading-tight">
                        Vita Classic Product
                    </h1>
                    <p className="mt-4 text-[18px] lg:text-[20px] font-light text-[#FAFAFA] leading-relaxed">
                        We know how large objects will act, We know how objects will act, We know
                    </p>

                    {/* Price and Button */}
                    <div className="flex items-center gap-6 mt-6 justify-center lg:justify-start">
                        <span className="text-[24px] font-bold">$16.48</span>
                        <button className="px-8 py-3 font-bold bg-[#2DC071] text-[14px] uppercase rounded-md tracking-wider">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full p-4 -mb-4 flex justify-center lg:justify-end">
                    <Image
                        src="/classic.png" // Make sure this is the correct path
                        alt="Vita Classic Product"
                        width={500} // Adjust the width as needed
                        height={500} // Adjust the height as needed
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}