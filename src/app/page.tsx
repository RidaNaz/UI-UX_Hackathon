import BestSeller from "@/components/landingpage/BestSeller";
import ClassicProduct from "@/components/landingpage/ClassicProduct";
import EditorsPick from "@/components/landingpage/EditorsPick";
import FeaturedPost from "@/components/landingpage/FeaturedPost";
import Hero from "@/components/landingpage/Hero";
import NeuralUniverse from "@/components/landingpage/NeuralUniverse";

export default function Home() {
  return (
    <div>
      <Hero />
      <EditorsPick />
      <BestSeller />
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPost />
    </div>
  );
}
