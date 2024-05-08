import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";
// import { UserButton } from "@clerk/nextjs";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
    {/* <div className="py-1">
      <UserButton />
    </div> */}
      <section className="px-6 md:px-20 py-12 md:py-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center text-center mt-2"> 
           <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold overflow-hidden mb-8 text-center">
  <span className="block md:inline text-blue-500 md:mx-2 lg:mx-1">"💻 SMART</span>
  <span className="block md:inline text-green-700 md:mx-2 lg:mx-1">💲PRICE </span>
  <span className="block md:inline text-purple-900 md:mx-2 lg:mx-1">📈 INSIGHT "</span>
</h1>


            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text text-6xl md:text-6xl lg:text-5xl font-bold text-center">
  Elevate Your Journey with :
  <span className="block mx-4 text-center mt-4 md:inline">
    💸 <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-red-500 text-transparent bg-clip-text">PriceScraper</span> 💸
  </span>
</h1>



            <p className="mt-4">
              "Elevate your business with robust, self-serve analytics, empowering you to optimize conversions, enhance engagement, and foster lasting customer retention."
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending / Your Searches</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;