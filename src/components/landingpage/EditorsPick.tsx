import Image from 'next/image';

export default function EditorsPick() {
    return (
        <section className="bg-[#FAFAFA] pt-20 px-6 sm:px-8 md:px-16 lg:px-32">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-[24px] font-bold tracking-tiny text-[#252B42]">
                    EDITOR&apos;S PICK
                </h2>
                <p className="text-[#737373] tracking-md mt-2 text-[14px] font-normal px-6">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            {/* Grid Layout */}
            <div className='container w-full mt-2'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Men */}
                <div className="relative group md:col-span-2">
                    <Image
                        src="/men.jpg"
                        alt="Men"
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white py-2 px-6 md:py-3 md:px-12 text-black text-sm font-semibold group-hover:bg-black group-hover:text-white ">
                        MEN
                    </div>
                </div>

                {/* Women - Larger Image */}
                <div className="relative group ">
                    <Image
                        src="/women.jpg"
                        alt="Women"
                        width={1000}
                        height={1000}
                        className= "object-cover h-full w-full"
                    />
                    <div className="absolute bottom-4 left-4 bg-white py-2 px-6 md:py-3 md:px-12 text-black text-sm font-semibold group-hover:bg-black group-hover:text-white ">
                        WOMEN
                    </div>
                </div>

                <div className='grid gap-4 lg:grid-cols-1 grid-cols-1 sm:grid-cols-2 md:col-span-3 lg:col-span-1'>
                    {/* Accessories */}
                    <div className="relative group">
                        <Image
                            src="/accessories.jpg"
                            alt="Accessories"
                            width={1000}
                            height={1000}
                            className= "object-cover h-full w-full"
                        />
                        <div className="absolute bottom-4 left-4 bg-white py-2 px-6 md:py-3 md:px-6 xl:px-8 text-black text-sm font-semibold group-hover:bg-black group-hover:text-white ">
                            ACCESSORIES
                        </div>
                    </div>

                    {/* Kids */}
                    <div className="relative group">
                        <Image
                            src="/kids.jpg"
                            alt="Kids"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-white py-2 px-6 md:py-3 md:px-12 text-black text-sm font-semibold group-hover:bg-black group-hover:text-white ">
                            KIDS
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
