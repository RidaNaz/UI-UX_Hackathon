import Image from "next/image";
import Logos from "../sub/Logos";

export default function Companies() {
    return (
        <div className="mt-32 bg-[#FAFAFA] ">
            <div className="font-bold grid justify-items-center text-center py-10">
                <h2 className="text-[40px] tracking-md text-[#252B42] pt-12 px-6">Big Companies Are Here</h2>
                <p className="text[14px] text-[#737373] tracking-md font-normal w-[80%] md:w-1/2 mt-5 px-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="pb-10">
                <Logos />
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                <div className="bg-[#2A7CC7] lg:col-span-2 lg:px-40 py-32 font-bold text-white md:text-left text-center justify-items-center lg:justify-items-start grid">
                    <h3 className="text-[16px] tracking-tiny">WORK WITH US</h3>
                    <h1 className="tracking-md text-[40px] mt-4 px-4">Now Let&apos;s grow Yours</h1>
                    <p className="font-normal mt-4 tracking-md w-[80%] text-center lg:text-left">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                    <button className="mt-4 px-10 py-3 font-bold text-[14px] w-fit border border-white rounded-md tracking-md">
                        Button
                    </button>
                </div>
                <div>
                    <Image
                        src="/aboutimage2.jpg"
                        alt="Shopping Woman"
                        width={2000}
                        height={2000}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}