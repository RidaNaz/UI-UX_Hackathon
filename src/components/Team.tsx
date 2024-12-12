import { team2 } from "@/helper";
import Image from "next/image";

export default function TeamMember() {
    return (
        <div>
            {/* Team Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-6 w-full mt-20">
                {team2.map((teamMember) => (
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
    )
}