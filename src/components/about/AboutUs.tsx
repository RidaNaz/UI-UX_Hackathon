import { team } from "@/helper";
import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="min-h-screen px-6 sm:px-8 lg:px-32 md:px-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 items-center justify-between mt-12">
                {/* Text Section */}
                <div className="lg:w-2/3 text-center md:text-left">
                    <h3 className="text-[#252B42] font-bold text-[16px] uppercase tracking-tiny sm:block hidden">
                        About Company
                    </h3>
                    <h1 className="md:text-[58px] sm:text-[48px] text-[40px] uppercase font-bold text-[#252B42] tracking-md mt-2">
                        About Us
                    </h1>
                    <p className="text-[#737373] tracking-md text-[20px] mt-4 font-bold">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    <a
                        href="/quote"
                        className="mt-6 inline-block bg-[#23A6F0] text-white px-11 py-4 rounded-md shadow-lg hover:bg-blue-600 transition duration-300 tracking-md text-[14px] font-bold"
                    >
                        Get Quote Now
                    </a>
                </div>

                {/* Image Section */}
                <div className=" flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute top-12 -left-6 bg-pink-100 w-80 h-80 rounded-full mix-blend-multiply"></div>
                        <Image
                            src="/aboutimage.png"
                            alt="Shopping Woman"
                            width={400}
                            height={400}
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>

            <div className="md:text-left text-center">
                <p className="text-[#E74040] text-[14px] tracking-md font-bold mt-12">Problems trying</p>
                <div className="grid md:grid-cols-2 justify-items-center mt-6 gap-10">
                    <div className="font-bold">
                        <h3 className="text-[#252B42] text-[24px] tracking-tiny">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                    </div>
                    <div>
                        <p className="tracking-md text-[14px] text-[#737373] font-bold">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 font-bold mt-32 gap-14">
                <div className="grid justify-items-center">
                    <h3 className="text-[#252B42] tracking-md md:text-[58px] sm:text-[48px] text-[40px]">15K</h3>
                    <p className="text-[#737373] tracking-tiny text-[16px]">Happy Customers</p>
                </div>
                <div className="grid justify-items-center">
                    <h3 className="text-[#252B42] tracking-md md:text-[58px] sm:text-[48px] text-[40px]">150K</h3>
                    <p className="text-[#737373] tracking-tiny text-[16px]">Monthly Visitors</p>
                </div>
                <div className="grid justify-items-center">
                    <h3 className="text-[#252B42] tracking-md md:text-[58px] sm:text-[48px] text-[40px]">15</h3>
                    <p className="text-[#737373] tracking-tiny text-[16px]">Countries  Worldwide</p>
                </div>
                <div className="grid justify-items-center">
                    <h3 className="text-[#252B42] tracking-md md:text-[58px] sm:text-[48px] text-[40px]">100+</h3>
                    <p className="text-[#737373] tracking-tiny text-[16px]">Top Partners</p>
                </div>
            </div>

            <div className="mt-48 h-full w-auto relative">
                <Image
                    src="/videoimage.jpg"
                    alt="Video"
                    width={2000}
                    height={2000}
                    className="object-cover rounded-xl md:rounded-3xl h-full w-auto"
                />
                <Image
                    src="/filter.png"
                    alt="Video"
                    width={1000}
                    height={1000}
                    className="absolute top-0 left-0 rounded-xl md:rounded-3xl mix-blend-overlay z-10 h-full w-auto"
                />
                <div className="bg-[#23A6F0] absolute p-8 rounded-full -mt-12 -ml-10 top-2/4 left-2/4">
                    <Image
                        src="/playbutton.svg"
                        alt="Video"
                        width={20}
                        height={20}
                        className="absolute top-1/4 left-1/4 w-5 z-10 mt-1 ml-2 object-cover"
                    />
                </div>
            </div>

            <div className="font-bold mt-48">
                <div className="grid justify-items-center">
                    <h2 className="text-[40px] text-[#252B42] tracking-md text-center">Meet Our Team</h2>
                    <p className="text-[#737373] text-[14px] tracking-md md:w-1/2 text-center mt-2">Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-10 mb-6 w-full mt-20">
                    {team.map((teamMember) => (
                        <div key={teamMember.id}>
                            <Image
                                src={teamMember.image}
                                alt={teamMember.name}
                                width={1000}
                                height={1000}
                                className="w-full h-64 object-cover"
                            />

                            <div className="font-bold mt-10 text-center grid justify-items-center">
                                <h1 className=" text-[#252B42] tracking-tiny text-[16px]">{teamMember.name}</h1>
                                <p className="text-[#737373] tracking-md text-[14px] mt-2">{teamMember.profession}</p>

                                <div className="flex gap-4 mt-3 items-center">
                                    <Image src="/fb2.svg" alt="Facebook" width={21} height={21} />
                                    <Image src="/insta2.svg" alt="Instagram" width={18} height={18} />
                                    <Image src="/twitter3.svg" alt="Twitter" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
