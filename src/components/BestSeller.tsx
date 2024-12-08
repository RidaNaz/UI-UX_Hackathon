import Image from "next/image";
import { products } from "@/helper"

export default function BestSeller() {
    return (
        <section className="pt-20 px-6 sm:px-8 md:px-16 lg:px-32 bg-white">
            {/* Section Title */}
            <div className="text-center pb-20">
                <h2 className="text-xl md:text-2xl tracking-md font-thin text-[#737373]">
                    Featured Products
                </h2>
                <h3 className="text-2xl md:text-3xl tracking-tiny font-bold text-[#252B42] mt-2">
                    BESTSELLER PRODUCTS
                </h3>
                <p className="text-[#737373] tracking-md mt-2 font-light text-[14px]">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                    >
                        {/* Product Image */}
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="mt-4 font-bold text-center">
                            <h4 className="text-[16px] text-[#252B42]">
                                {product.title}
                            </h4>
                            <p className="text-sm text-[#737373] mt-1">{product.category}</p>
                            <div className="flex items-center mt-2">
                                <p className="text-sm text-[#BDBDBD]">{product.price}</p>
                                <p className="text-sm text-[#23856D] ml-2">
                                    {product.originalPrice}
                                </p>
                            </div>

                            <div className="flex items-center mt-2">
                                {product.colors.map((color, index) => (
                                    <Image
                                        key={index}
                                        src={`/${color}.svg`} // Use custom SVG or PNG paths
                                        alt={`Color ${index + 1}`}
                                        width={16} // Set width for icons
                                        height={16} // Set height for icons
                                        className="mr-2"
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
