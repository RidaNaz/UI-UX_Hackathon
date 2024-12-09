import { bestProducts } from "@/helper";
import Image from "next/image";

export default function BestProduct() {

    return (
        <div className="bg-[#FAFAFA] px-6 sm:px-8 lg:px-32 md:px-16 pt-14 pb-2">
            {/* Section Title */}
            <h2 className="text-[24px] tracking-tiny font-bold text-[#252B42] mb-6 border-b pb-4">
                BESTSELLER PRODUCTS
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white"
                    >
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="px-5 py-7">
                            <h3 className="text-[16px] text-[#252B42] font-bold tracking-tiny">
                                {product.title}
                            </h3>
                            <p className="text-sm text-[#737373] mt-1 tracking-md font-bold">{product.department}</p>
                            <div className="flex items-center mt-2">
                                <span className="text-sm text-[#BDBDBD] mr-2 font-bold">
                                    {product.oldPrice}
                                </span>
                                <span className="text-sm text-[#23856D] font-bold">
                                    {product.newPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
