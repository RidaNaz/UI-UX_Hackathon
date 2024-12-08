export default function Hero() {
    return (
      <section
        className="relative 2xl:max-h-96 bg-cover bg-center h-screen flex items-center text-[#FAFAFA]"
        style={{ backgroundImage: "url('/heroimage2.jpg')" }}
      >
        <div className="container mx-auto px-8 lg:px-32">
          {/* Text Content */}
          <div className="w-full sm:w-1/2 text-center md:text-start">
            <p className="uppercase tracking-tiny text-[16px] font-bold">Summer 2020</p>
            <h1 className="text-[40px] lg:text-[58px] font-bold mt-2">New Collection</h1>
            <p className="mt-4 text-[20px] font-normal text-[#FAFAFA] tracking-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="mt-6 lg:px-10 px-8 py-3 lg:py-5 font-bold bg-[#2DC071] text-[24px] uppercase rounded-md tracking-tiny">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    );
  }
  