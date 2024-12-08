import Image from "next/image";

export default function NeuralUniverse() {
    return (
        <div className="max-h-screen">
            <div className="grid grid-cols-1 lg:-mt-5 mt-16 md:grid-cols-2 px-6 gap-10 sm:px-8 md:px-16 lg:px-32 items-center">
                {/* Image Section */}
                <div className="order-last md:order-first justify-center flex">
                    <Image
                        src="/herocover2.jpg" // Make sure this is the correct path
                        alt="Vita Classic Product"
                        width={500} // Adjust the width as needed
                        height={500} // Adjust the height as needed
                        className="max-w-full h-auto object-contain"
                    />
                </div>
                
                {/* Text Content */}
                <div className="lg:w-[80%] w-full text-center lg:text-left">
                    <p className="uppercase tracking-wider text-[#BDBDBD] text-[16px] font-bold">
                        Summer 2020
                    </p>
                    <h1 className="text-[40px] text-[#252B42] font-bold mt-2 leading-tight">
                        Part of the Neural Universe
                    </h1>
                    <p className="mt-4 text-[14px] lg:text-[20px] font-light text-[#737373] leading-relaxed">
                        We know how large objects will act, but things on a small scale.
                    </p>

                    {/* Price and Button */}
                    <div className="grid sm:flex justify-items-center sm:justify-center gap-6 mt-6 ">
                        <button className="px-8 py-3 font-bold bg-[#2DC071] text-white text-[14px] uppercase rounded-md tracking-md w-fit">
                            BUY NOW
                        </button>
                        <button className="px-8 py-3 font-bold border border-[#2DC071] text-[#2DC071] bg-white text-[14px] uppercase w-fit rounded-md tracking-md">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
