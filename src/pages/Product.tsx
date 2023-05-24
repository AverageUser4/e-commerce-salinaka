import Button from "../components/Button/Button";
import FullProductData from "../components/FullProductData/FullProductData";
import PageContainer from "../components/PageContainer/PageContainer";
import RecommendedProductsList from "../components/RecommendedProductsList/RecommendedProductsList";

import { ReactComponent as ArrowSVG } from '../assets/arrow.svg';

export default function Product() {
  return (
    <PageContainer>
      <Button 
        color="b"
        href="/shop"
        style={{ 
          display: 'inline-flex',
          color: 'rgb(16, 16, 16)',
          fontSize: 16,
        }}
      >
        <ArrowSVG style={{ transform: 'scaleX(-1)' }}/>
        Back to shop
      </Button>
      <FullProductData/>
      <RecommendedProductsList/>
    </PageContainer>
  );
}