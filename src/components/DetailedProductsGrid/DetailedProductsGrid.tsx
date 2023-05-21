import { useSelector } from 'react-redux';
import { useProductsData } from '../../app/hooks';
import css from './DetailedProductsGrid.module.css';
import { selectProducts } from '../../features/products/productsSlice';
import { Product } from '../../app/types';
import DetailedProductCard from '../DetailedProductCard/DetailedProductCard';

export default function DetailedProductsGrid() {
  useProductsData();
  const products = useSelector(selectProducts);
  
  return (
    <ul className={css['container']}>
      {products.map((product: Product) => (
        <li key={product.id}>
          <DetailedProductCard product={product}/>
        </li>
      ))}
    </ul>
  );
}