import Card from "../components/Card/Card";

import personSrc from '../assets/person3.png';
import PageContainer from "../components/PageContainer/PageContainer";
import RecommendedProductsList from "../components/RecommendedProductsList/RecommendedProductsList";

export default function Recommended() {
  return (
    <PageContainer>
      <Card
        heading={<span className="bold">Recommended Products</span>}
        src={personSrc}
      />
      <RecommendedProductsList hasHeading={false}/>
    </PageContainer>
  );
}