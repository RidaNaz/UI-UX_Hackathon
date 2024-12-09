import Image from "next/image";

export default function Description() {
    return (
        <div className="px-6 sm:px-8 lg:px-32 md:px-16 mt-10 mb-5">
            {/* Tabs Section */}
            <div className="flex justify-center mb-8 border-b items-center pb-5">
                <ul className="flex space-x-4 text-[14px] md:gap-5 gap-1 font-semibold tracking-md text-[#737373]">
                    <li className="cursor-pointer">
                        Description
                    </li>
                    <li className="cursor-pointer">
                        Additional Information
                    </li>
                    <li className="cursor-pointer">
                        Reviews <span className="text-[#23856D]"> (0) </span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Image Section */}
                <div className="image-container">
                    <Image
                        src="/product2.jpg" // Replace with actual product image
                        alt="Floating Phone"
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                </div>

                {/* Right Text Section */}
                <div className="text-section">
                    <h3 className="tracking-tiny font-bold text-[24px] text-[#252B42] mb-7">
                        The quick fox jumps over
                    </h3>
                    <div className="space-y-5">
                        <p className="text-[14px] font-bold tracking-md text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[14px] font-bold tracking-md text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                        <p className="text-[14px] font-bold tracking-md text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 md:gap-0">
                    <div className="text-section">
                        <h3 className="tracking-tiny font-bold text-[24px] text-[#252B42] mb-7">
                            The quick fox jumps over
                        </h3>
                        <ul className="space-y-2 text-[14px] font-bold tracking-md text-[#737373]">
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                        </ul>
                    </div>

                    <div className="text-section">
                        <h3 className="tracking-tiny font-bold text-[24px] text-[#252B42] mb-7">
                            The quick fox jumps over
                        </h3>
                        <ul className="space-y-2 text-[14px] font-bold tracking-md text-[#737373]">
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src="/arrowgray.svg" alt="Next" width={8} height={8} />
                                The quick fox jumps over the lazy dog
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
