import BestSeller from "@/components/BestSeller";
import ClassicProduct from "@/components/ClassicProduct";
import EditorsPick from "@/components/EditorsPick";
import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/Hero";
import NeuralUniverse from "@/components/NeuralUniverse";

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
