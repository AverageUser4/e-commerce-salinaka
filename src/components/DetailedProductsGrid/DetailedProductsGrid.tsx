import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useProductsData } from '../../app/hooks';
import css from './DetailedProductsGrid.module.css';
import { selectProducts } from '../../features/products/productsSlice';
import { Product } from '../../app/types';
import DetailedProductCard from '../DetailedProductCard/DetailedProductCard';
import Button from '../Button/Button';
import FiltersModal from "../FiltersModal/FiltersModal";

import { ReactComponent as FilterSVG } from '../../assets/filter.svg';

export default function DetailedProductsGrid() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  useProductsData();
  const products = useSelector(selectProducts);
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
        onClick={() => setIsFiltersOpen(prev => !prev)}
        style={{ marginBottom: 16, width: '100%', fontSize: 14 }}
        color="a"
      >
        Filters <FilterSVG style={{ width: 14 }}/>
      </Button>

      <ul className={css['container']}>
        {products.map((product: Product) => (
          <li key={product.id}>
            <DetailedProductCard product={product}/>
          </li>
        ))}
      </ul>

      <FiltersModal 
        isOpen={isFiltersOpen}
        setIsOpen={setIsFiltersOpen}
        min={data.min / 100}
        max={data.max / 100}
        brands={data.brands}
      />
    </div>
  );
}