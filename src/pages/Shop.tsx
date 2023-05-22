import DetailedProductsGrid from "../components/DetailedProductsGrid/DetailedProductsGrid";
import PageContainer from "../components/PageContainer/PageContainer";

import { ReactComponent as FilterSVG } from '../assets/filter.svg';
import { useState } from "react";
import FiltersModal from "../components/FiltersModal/FiltersModal";
import Button from "../components/Button/Button";

export default function Shop() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  
  return (
    <>
      <PageContainer>
        <Button 
          onClick={() => setIsFiltersOpen(prev => !prev)}
          style={{ marginBottom: 16, width: '100%', fontSize: 14 }}
          color="a"
        >
          Filters <FilterSVG style={{ width: 14 }}/>
        </Button>
        <DetailedProductsGrid/>
      </PageContainer>

      <FiltersModal isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen}/>
    </>
  );
}