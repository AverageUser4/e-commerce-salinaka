import css from './DetailedProductCard.module.css';
import { Product } from "../../app/types";
import { parsePrice } from "../../app/utils";
import { Link } from 'react-router-dom';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { useAppDispatch } from '../../app/hooks';
import { addToBasket } from '../../features/basket/basketSlice';

export default function DetailedProductCard({ product } : { product: Product }) {
  const dispatch = useAppDispatch();
  
  return (
    <article className={css['container']}>
      <Link className={css['link']} to={`/product/${product.id}`}>
        <div className={css['top']}>
          <img className={css['image']} src={product.src} alt=""/>
        </div>

        <div className={css['bottom']}>
          <div className={css['text-container']}>
            <Text element="h3" variant="h4" style={{ marginBottom: 6 }}>{product.name}</Text>
            <Text element="p" variant="h5" color="p-c" style={{ fontStyle: 'italic' }}>{product.company}</Text>
          </div>
          <Text element="p" variant="h3">{parsePrice(product.price)}</Text>
        </div>
      </Link>

      <div className={css['button-container']}>
        <Button 
          className={css['button']}
          onClick={() => dispatch(addToBasket({ id: product.id, color: product.colors[0].value, size: '28 mm' }))}
        >
          Add to basket
        </Button>
      </div>
    </article>
  );
}