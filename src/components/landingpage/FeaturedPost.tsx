import { featuredPosts } from "@/helper";
import Image from "next/image";

export default function FeaturedPost() {
    return (
        <div className="mt-24 mb-28 px-6 sm:px-8 md:px-16 lg:px-32">
            <div className="grid justify-items-center ">
                <p className="text-[#23A6F0] text-[14px] font-bold">Practice Advice</p>
                <h1 className="text-[#252B42] text-[40px] font-bold text-center">Featured Posts</h1>
                <p className="text-[#737373] text-[14px] w-[80%] md:w-[60%] lg:w-[50%] text-center">
                    Problem trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>

            {/* Product Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center ">
                {featuredPosts.map((product) => (
                    <div className="shadow-md" key={product.id}>
                        {/* Product Image */}
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                            <div className="absolute top-4 left-4 text-[14px] font-bold py-1 px-4 rounded-md bg-[#E74040] text-white tracking-md">
                                NEW
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-6 ">
                            <div className="text-[12px] text-[#737373] flex gap-4 font-light">
                                <p className="text-[#8EC2F2]">Google</p>
                                <p>Trending</p>
                                <p>New</p>
                            </div>

                            <h1 className="mt-4 text-left text-[20px] text-[#252B42]">
                                {product.title}
                            </h1>
                            <p className="text-left text-sm text-[#737373] mt-2 font-light">{product.des}</p>
                            <div className="flex items-center justify-between mt-4 text-[#737373] text-[12px]">
                                <div className="flex gap-2 items-center font-light">
                                    <Image src="/clock.svg" alt="clock icon" width={16} height={16} />
                                    <p>{product.date}</p>
                                </div>
                                <div className="flex gap-2 items-center font-light">
                                    <Image src="/comment.svg" alt="comment icon" width={16} height={16} />
                                    <p>{product.comments}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4">
                                <h3 className="text-[14px] text-[#737373] font-bold">Learn More</h3>
                                <Image src="/arrow.svg" alt="arrow icon" width={10} height={10} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
