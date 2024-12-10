import Image from "next/image";
import { products } from "@/helper";

export default function BestSeller() {
    return (
        <section className="pt-20 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
            {/* Section Title */}
            <div className="text-center pb-20 font-bold">
                <h2 className="text-xl md:text-2xl tracking-md text-[#737373]">
                    Featured Products
                </h2>
                <h3 className="text-2xl md:text-3xl tracking-tiny text-[#252B42] mt-2">
                    BESTSELLER PRODUCTS
                </h3>
                <p className="text-[#737373] tracking-md mt-2  text-[14px]">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col items-center text-center font-bold"
                    >
                        {/* Product Image */}
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={1000}
                                height={1000}
                                className="object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="mt-4">
                            {/* Title and Category */}
                            <h4 className="text-[16px] text-[#252B42] font-bold">
                                {product.title}
                            </h4>
                            <p className="text-sm text-[#737373] mt-1">
                                {product.category}
                            </p>

                            {/* Price Section */}
                            <div className="flex justify-center items-center mt-2">
                                <p className="text-sm text-[#BDBDBD] mr-2">
                                    {product.originalPrice}
                                </p>
                                <p className="text-sm text-[#23856D] font-semibold">
                                    {product.price}
                                </p>
                            </div>

                            {/* Colors Section */}
                            <div className="flex justify-center items-center mt-2 space-x-2">
                                {product.colors.map((color, index) => (
                                    <Image
                                        key={index}
                                        src={`/${color}.svg`} // Use custom SVG or PNG paths
                                        alt={`Color ${index + 1}`}
                                        width={16} // Set width for icons
                                        height={16} // Set height for icons
                                        className="rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
