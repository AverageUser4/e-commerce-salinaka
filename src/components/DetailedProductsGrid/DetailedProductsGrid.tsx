import { useState } from 'react';
import { useAppSelector, useProductsData } from '../../app/hooks';
import css from './DetailedProductsGrid.module.css';
import { selectFilteredProducts, selectProducts } from '../../features/products/productsSlice';
import { Product } from '../../app/types';
import DetailedProductCard from '../DetailedProductCard/DetailedProductCard';
import Button from '../Button/Button';
import FiltersModal from "../FiltersModal/FiltersModal";
import Text from '../Text/Text';

import { ReactComponent as FilterSVG } from '../../assets/filter.svg';
import { selectFilters } from '../../features/filters/filtersSlice';
import { RootState } from '../../app/store';
import AppliedFilters from '../AppliedFilters/AppliedFilters';

export default function DetailedProductsGrid() {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  useProductsData();
  const filters = useAppSelector(selectFilters);
  const products = useAppSelector(selectProducts);
  const filteredProducts = useAppSelector((state: RootState) => selectFilteredProducts(state, filters));
  const data: { min: number, max: number, brands: string[] } = {
    min: Number.MAX_SAFE_INTEGER,
    max: 0,
    brands: [],
  };

  products.forEach((product: Product) => {
    data.min = Math.min(data.min, product.price);
    data.max = Math.max(data.max, product.price);
    if(!data.brands.includes(product.company)) {
      data.brands.push(product.company);
    }
  });
  
  return (
    <div>
      <Button 
        onClick={() => setIsFiltersModalOpen(prev => !prev)}
        style={{ marginBottom: 16, width: '100%', fontSize: 14 }}
        color="a"
      >
        Filters <FilterSVG style={{ width: 14 }}/>
      </Button>

      <AppliedFilters/>

      {
        filteredProducts.length ?
          <ul className={css['container']}>
            {filteredProducts.map((product: Product) => (
              <li key={product.id}>
                <DetailedProductCard product={product}/>
              </li>
            ))}
          </ul>
        :
          <Text variant="h3" element="h3" style={{ textAlign: 'center', marginTop: 32 }}>No products found.</Text>
      }

      <FiltersModal 
        isOpen={isFiltersModalOpen}
        setIsOpen={setIsFiltersModalOpen}
        min={data.min}
        max={data.max}
        brands={data.brands}
      />
    </div>
  );
}