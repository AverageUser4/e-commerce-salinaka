import DetailedProductsGrid from "../components/DetailedProductsGrid/DetailedProductsGrid";
import PageContainer from "../components/PageContainer/PageContainer";

import { ReactComponent as FilterSVG } from '../assets/filter.svg';
import { useState } from "react";
import FiltersModal from "../components/FiltersModal/FiltersModal";

export default function Shop() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  
  return (
    <>
      <PageContainer>
        <button 
          onClick={() => setIsFiltersOpen(prev => !prev)}
          style={{ marginBottom: 16, width: '100%' }}
          className="button button--color-a button--medium"
        >
          Filters <FilterSVG style={{ width: 14 }}/>
        </button>
        <DetailedProductsGrid/>
      </PageContainer>

      <FiltersModal isOpen={isFiltersOpen} setIsOpen={setIsFiltersOpen}/>
    </>
  );
}