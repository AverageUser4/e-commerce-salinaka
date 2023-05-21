import { Product } from "../../app/types";
import FilteredProductsList from "../FilteredProductsList/FilteredProductsList";

export default function FeaturedProductsList({ hasHeading = true }) {
  return (
    <FilteredProductsList
      hasHeading={hasHeading}
      href="/featured"
      heading="Featured Products"
      filterCallback={(product: Product) => product.isFeatured}
    />
  )
}