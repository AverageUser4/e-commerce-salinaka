import css from './ProductsList.module.css';
import { Product } from '../../app/types';
import { Link } from 'react-router-dom';
import Text from '../Text/Text';

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
              <Text element="h3" variant="h3">{product.name}</Text>
              <Text style={{ fontStyle: 'italic' }} color="p-b" element="p" variant="p">{product.company}</Text>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}