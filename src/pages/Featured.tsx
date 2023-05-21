import Card from "../components/Card/Card";

import personSrc from '../assets/person2.png';
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedProductsList from "../components/FeaturedProductsList/FeaturedProductsList";

export default function Featured() {
  return (
    <PageContainer>
      <Card
        heading={<span className="bold">Featured Products</span>}
        src={personSrc}
      />
      <FeaturedProductsList hasHeading={false}/>
    </PageContainer>
  );
}