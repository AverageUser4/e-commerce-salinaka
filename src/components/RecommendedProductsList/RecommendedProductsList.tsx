import { Product } from "../../app/types";
import FilteredProductsList from "../FilteredProductsList/FilteredProductsList";

export default function RecommendedProductsList({ hasHeading = true }) {
  return (
    <FilteredProductsList
      hasHeading={hasHeading}
      href="/Recommended"
      heading="Recommended Products"
      filterCallback={(product: Product) => product.isRecommended}
    />
  )
}