import Image from "next/image";

export default function Contact() {
    return (
        <div className="mt-12">
            <div className="container px-6 sm:px-8 lg:px-32 md:px-16 mx-auto grid md:grid-cols-2">
                {/* Text Section */}
                <div className="text-center md:text-left">
                    <h3 className="text-[#252B42] font-bold text-[16px] uppercase tracking-tiny sm:block hidden">
                        Contact Us
                    </h3>
                    <h1 className="md:text-[58px] sm:text-[48px] text-[40px] uppercase font-bold text-[#252B42] tracking-md mt-2">
                        Get in touch today!
                    </h1>
                    <p className="text-[#737373] tracking-md text-[20px] mt-4 font-bold">
                        We know how large objects will act, but things on a small scale
                    </p>

                    <h3 className="tracking-tiny font-bold text-[24px] text-[#252B42] mt-4">Phone ; +451 215 215</h3>
                    <h3 className="tracking-tiny font-bold text-[24px] text-[#252B42] mt-2">Fax : +451 215 215</h3>

                    <div className="flex gap-8 mt-8 items-center">
                        <Image src="/twitter4.svg" alt="Twitter" width={30} height={30} />
                        <Image src="/fb2.svg" alt="Facebook" width={30} height={30} />
                        <Image src="/insta4.svg" alt="Instagram" width={25} height={25} />
                        <Image src="/linkedin4.svg" alt="Linkedin" width={26} height={26} />
                    </div>
                </div>
                <div>
                    <Image
                        src="/contactimage.png"
                        alt="Family"
                        width={2000}
                        height={2000}
                        className="object-cover h-full w-auto"
                    />
                </div>
            </div>

            <div className="grid justify-items-center font-bold mt-32">
                <p className="text-[#252B42] text-[14px] tracking-md">VISIT OUR OFFICE</p>
                <h2 className="text-[40px] text-[#252B42] tracking-md mx-4 text-center sm:w-[60%] xl:w-[45%] mt-2">We help small businesses with big ideas</h2>
            </div>

            {/* Team Grid */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-12 mb-6 w-full mt-20 container px-6 sm:px-4 md:px-16">

                <div className="grid w-full justify-items-center py-20 mx-auto text-[#252B42]">
                    <Image
                        src="/phone2.svg"
                        alt="Family"
                        width={70}
                        height={70}
                    />
                    <div className="font-bold mt-4 text-center grid justify-items-center">
                        <p className=" text-[#252B42] tracking-md text-[16px]">georgia.young@example.com</p>
                        <p className=" text-[#252B42] tracking-md text-[16px]">georgia.young@ple.com</p>
                        <h3 className="text-[#252B42] tracking-md text-[14px] mt-4">Get Support</h3>

                        <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] rounded-full py-3 px-8 hover:text-white hover:bg-[#23A6F0]">Submit Request</button>
                    </div>
                </div>
                <div className="bg-[#252B42] grid w-full justify-items-center py-20 mx-auto text-white ">
                    <Image
                        src="/location.svg"
                        alt="Family"
                        width={60}
                        height={60}
                    />
                    <div className="font-bold mt-4 text-center grid justify-items-center">
                        <p className=" tracking-md text-[16px]">georgia.young@example.com</p>
                        <p className=" tracking-md text-[16px]">georgia.young@ple.com</p>
                        <h3 className="tracking-md text-[14px] mt-4">Get Support</h3>

                        <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] rounded-full py-3 px-8 hover:text-white hover:bg-[#23A6F0]">Submit Request</button>
                    </div>
                </div>
                <div className="grid w-full justify-items-center py-20 mx-auto text-[#252B42] ">
                    <Image
                        src="/email2.svg"
                        alt="Family"
                        width={70}
                        height={70}
                    />
                    <div className="font-bold mt-4 text-center grid justify-items-center">
                        <p className=" text-[#252B42] tracking-md text-[16px]">georgia.young@example.com</p>
                        <p className=" text-[#252B42] tracking-md text-[16px]">georgia.young@ple.com</p>
                        <h3 className="text-[#252B42] tracking-md text-[14px] mt-4">Get Support</h3>

                        <button className="mt-4 text-[#23A6F0] border border-[#23A6F0] rounded-full py-3 px-8 hover:text-white hover:bg-[#23A6F0]">Submit Request</button>
                    </div>
                </div>
            </div>

            <div className="text-[#252B42] font-bold mt-24 grid justify-items-center">

                <Image
                    src="/arrowdown.svg"
                    alt="arrow"
                    width={50}
                    height={50}
                    className="object-cover h-full w-auto"
                />
                <h3 className="tracking-tiny text-[16px] mt-6">WE Can&apos;t WAIT TO MEET YOU</h3>
                <h1 className="text-[58px] tracking-md">Let&apos;s Talk</h1>

                <button className="text-white bg-[#23A6F0] py-3 px-8 rounded-md mt-4 mb-20">Try it free now</button>
            </div>
        </div>
    );
}
