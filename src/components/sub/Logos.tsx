import Image from "next/image";

export default function Logos() {
    return (
        <div className="px-6 sm:px-8 md:px-16 lg:px-32  bg-[#FAFAFA] py-12 ">

            <div className="grid lg:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 items-center justify-items-center">
            <Image src="/logo1.svg" alt="logos" width={80} height={80} />
            <Image src="/logo2.svg" alt="logos" width={80} height={80} />
            <Image src="/logo3.svg" alt="logos" width={80} height={80} />
            <Image src="/logo4.svg" alt="logos" width={80} height={80} />
            <Image src="/logo5.svg" alt="logos" width={80} height={80} />
            <Image src="/logo6.svg" alt="logos" width={80} height={80} />
            </div>
        </div>
    )
}