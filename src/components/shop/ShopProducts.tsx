import { products2 } from "@/helper";
import Image from "next/image";

export default function ShopProducts() {

    return (
        <div className=" bg-white">

            <div className="px-6 sm:px-8 lg:px-32 md:px-16 pt-5 pb-4">
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {products2.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-col items-center text-center font-bold mt-10"
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
            </div>
        </div>
    )
}