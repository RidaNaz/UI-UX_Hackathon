import TeamMember from "@/components/Team";
import Image from "next/image";

export default function Team() {
    return (
        <div>
            <div className="grid justify-items-center">
                <p className="font-bold text-[#737373] text-[16px] tracking-tiny text-center mt-12">WHAT WE DO</p>
                <h2 className="md:text-[58px] sm:text-[48px] text-[40px] text-[#252B42] tracking-md font-bold text-center mt-4">Innovation tailored for you</h2>
                <div className="flex items-center gap-4 font-bold text-center mt-8">
                    <span className="text-[#252B42] ">Home</span>
                    <Image src="/arrowgray.svg" alt="arrow" width={7} height={7} />
                    <span className="text-[#737373]">Team</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 mt-12">
                <div className="col-span-2">
                    <Image src="/image1.jpg" alt="" width={2000} height={2000} className="object-cover w-full h-auto" />
                </div>
                <div className="grid gap-2">
                    <Image src="/image2.jpg" alt="" width={1000} height={1000} className="object-cover h-full w-auto" />
                    <Image src="/image4.jpg" alt="" width={1000} height={1000} className="object-cover h-full w-auto" />
                </div>
                <div className="grid gap-2">
                    <Image src="/image3.jpg" alt="" width={1000} height={1000} className="object-cover h-full w-auto" />
                    <Image src="/image5.jpg" alt="" width={1000} height={1000} className="object-cover h-full w-auto" />
                </div>
            </div>

            <div className="px-6 sm:px-8 lg:px-32 md:px-16 mt-24">
                <div>
                    <h2 className="text-[40px] text-[#252B42] tracking-md text-center font-bold">Meet Our Team</h2>
                    <TeamMember />
                </div>

                <div className="font-bold mt-48 mb-20 grid justify-items-center text-center">
                    <h1 className="text-[#252B42] text-[40px] tracking-md">Start your 14 days free trial</h1>
                    <p className="text-[#737373] text-[14px] tracking-md mt-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>

                    <button className="mt-8 text-white bg-[#23A6F0] rounded-md py-4 px-9">Try it free now</button>

                    <div className="flex gap-8 mt-8 items-center">
                        <Image src="/twitter3.svg" alt="Twitter" width={30} height={30} />
                        <Image src="/fb2.svg" alt="Facebook" width={30} height={30} />
                        <Image src="/insta3.svg" alt="Instagram" width={25} height={25} />
                        <Image src="/linkedin3.svg" alt="Linkedin" width={26} height={26} />
                    </div>
                </div>
            </div>
        </div>
    )
}