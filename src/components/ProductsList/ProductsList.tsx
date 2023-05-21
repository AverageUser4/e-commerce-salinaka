import css from './ProductsList.module.css';
import { Product } from '../../app/types';
import { Link } from 'react-router-dom';

export default function ProductsList({ products } : { products: Product[] }) {
  return (
    <ul className={css['list']}>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`} className={css['item']}>
            <div className={css['top']}>
              <img className={css['image']} src={product.src} alt=""/>
            </div>
            <div className={css['bottom']}>
              <h3 className="head head--small">{product.name}</h3>
              <p className="para para--no-margin">{product.company}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}