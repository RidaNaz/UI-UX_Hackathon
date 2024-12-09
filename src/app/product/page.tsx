import BestProduct from "@/components/sub/BestProduct";
import Description from "@/components/sub/Description";
import Logos from "@/components/sub/Logos";
import ProductDetail from "@/components/sub/ProductDetail";

export default function Products () {
    return (
        <div>
            <ProductDetail />
            <Description />
            <BestProduct />
            <Logos />
        </div>
    )
}