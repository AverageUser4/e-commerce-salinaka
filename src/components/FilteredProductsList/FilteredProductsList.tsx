import css from './FilteredProductsList.module.css';
import ProductsList from "../ProductsList/ProductsList";
import { Link } from 'react-router-dom';
import { useAppSelector, useProductsData } from '../../app/hooks';
import { selectAllProducts } from '../../features/products/productsSlice';
import Text from '../Text/Text';

export default function FilteredProductsList({ href, heading, hasHeading = true, filterCallback } : { hasHeading: boolean, heading: string, href: string, filterCallback: (x: any) => any }) {
  useProductsData();
  const products = useAppSelector(selectAllProducts);
  const filteredProducts = products.filter(filterCallback);

  return (
    <section className={css['container']}>
      {
        hasHeading &&
          <div className={css['top']}>
            <Text element="h2" variant="h2">{heading}</Text>
            <Link to={href} className="link link--big">See All</Link>
          </div>
      }
      <ProductsList products={filteredProducts}/>
    </section>
  )
}