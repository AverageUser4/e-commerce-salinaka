import Button from "../components/Button/Button";
import FullProductData from "../components/FullProductData/FullProductData";
import PageContainer from "../components/PageContainer/PageContainer";
import RecommendedProductsList from "../components/RecommendedProductsList/RecommendedProductsList";

import { ReactComponent as ArrowSVG } from '../assets/arrow.svg';
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams() as { id: string };

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
      <FullProductData id={id}/>
      <RecommendedProductsList ignoreId={id}/>
    </PageContainer>
  );
}