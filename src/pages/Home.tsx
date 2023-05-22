import Card from "../components/Card/Card";

import personSrc from '../assets/person1.png';
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedProductsList from "../components/FeaturedProductsList/FeaturedProductsList";
import RecommendedProductsList from "../components/RecommendedProductsList/RecommendedProductsList";
import Text from "../components/Text/Text";

export default function Home() {
  return (
    <PageContainer>
      <Card
        heading={<><Text style={{ fontWeight: 'bold' }}>See</Text> everything with <Text style={{ fontWeight: 'bold' }}>Clarity</Text></>}
        text="Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered."
        href="/shop"
        linkText="Shop Now"
        src={personSrc}
      />
      <FeaturedProductsList/>
      <RecommendedProductsList/>
    </PageContainer>
  );
}