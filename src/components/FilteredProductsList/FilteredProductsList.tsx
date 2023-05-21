import css from './FilteredProductsList.module.css';
import ProductsList from "../ProductsList/ProductsList";
import { Link } from 'react-router-dom';
import { useAppSelector, useProductsData } from '../../app/hooks';
import { selectProducts } from '../../features/products/productsSlice';

export default function FilteredProductsList({ href, heading, hasHeading = true, filterCallback } : { hasHeading: boolean, heading: string, href: string, filterCallback: (x: any) => any }) {
  useProductsData();
  const products = useAppSelector(selectProducts);
  const filteredProducts = products.filter(filterCallback);

  return (
    <section className={css['container']}>
      {
        hasHeading &&
          <div className={css['top']}>
            <h2 className="head head--medium">{heading}</h2>
            <Link to={href} className="link link--big">See All</Link>
          </div>
      }
      <ProductsList products={filteredProducts}/>
    </section>
  )
}