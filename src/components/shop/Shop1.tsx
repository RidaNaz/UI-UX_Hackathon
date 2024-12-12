import { categories } from "@/helper";
import Image from "next/image";

export default function Shop1() {

  return (
    <div className=" bg-[#FAFAFA]">
      <div className="px-6 sm:px-8 lg:px-32 md:px-16">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-4 pt-10">
          <h1 className="text-[#252B42] text-[24px] tracking-tiny font-bold">Shop</h1>

          <div className="flex items-center gap-4 font-bold">
            <span className="text-[#252B42] ">Home</span>
            <Image src="/arrowgray.svg" alt="arrow" width={7} height={7} />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 w-full">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <Image
                src={category.image}
                alt={category.name}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 hover:bg-black hover:bg-opacity-20 flex flex-col justify-center items-center transition-opacity">
                <h3 className="text-white text-[16px] font-bold tracking-tiny">{category.name}</h3>
                <p className="text-white text-sm font-bold tracking-md">{category.items} Items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Options */}
        <div className="lg:block hidden">
          <div className="flex justify-between font-bold items-center py-4">
            <span className="text-gray-500">Showing all 12 results</span>
            <div className="flex items-center space-x-4">
              {/* View Options */}
              <div className="flex space-x-2">
                <button className="p-2 border rounded focus:outline-none hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h4v4H3zM9 4h4v4H9zM15 4h4v4h-4zM3 10h4v4H3zM9 10h4v4H9zM15 10h4v4h-4zM3 16h4v4H3zM9 16h4v4H9zM15 16h4v4h-4z"
                    />
                  </svg>
                </button>
                <button className="p-2 border rounded focus:outline-none hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h18M3 10h18M3 16h18"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown */}
              <select className="border rounded px-3 py-2 focus:outline-none">
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>

              {/* Filter Button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}  