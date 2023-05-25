import PageContainer from "../components/PageContainer/PageContainer";
import { useParams } from "react-router-dom";
import { useAppSelector, useProductsData } from "../app/hooks";
import { selectAllProducts } from "../features/products/productsSlice";
import Grid from "../components/Grid/Grid";
import { Product } from "../app/types";
import DetailedProductCard from "../components/DetailedProductCard/DetailedProductCard";
import Text from "../components/Text/Text";
import ProductSearchForm from "../components/ProductSearchForm/ProductSearchForm";

export default function Search() {
  useProductsData();
  const { query } = useParams() as { query: string };
  const products = useAppSelector(selectAllProducts);
  const filteredProducts = products.filter(product => product.name.includes(query));
  
  let message = `No products found matching keyword "${query}".`;
  if(filteredProducts.length === 1) {
    message = `Found 1 product with keyword "${query}".`;
  } else if(filteredProducts.length > 1) {
    message = `Found ${filteredProducts.length} products with keyword "${query}".`;
  }

  return (
    <PageContainer>
      <ProductSearchForm/>
      <Text variant="h3" element="h3" style={{ textAlign: 'center', margin: '32px 0' }}>{message}</Text>
      <Grid>
        {filteredProducts.map((product: Product) => (
          <DetailedProductCard product={product}/>
        ))}
      </Grid>
    </PageContainer>
  );
}