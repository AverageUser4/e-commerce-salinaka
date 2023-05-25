import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useProductsData } from '../../app/hooks';
import { RootState } from '../../app/store';
import { selectProductById } from '../../features/products/productsSlice';
import Button from '../Button/Button';
import Text from '../Text/Text';
import css from './BasketItem.module.css';
import { parsePrice } from '../../app/utils';
import { BasketItemType } from '../../app/types';
import { addToBasket, removeFromBasket, subtractFromBasket } from '../../features/basket/basketSlice';

export default function BasketItem({ id, color, quantity, size } : BasketItemType) {
  const dispatch = useAppDispatch();
  useProductsData();
  const product = useAppSelector((state: RootState) => selectProductById(state, id));

  return (
    <article className={css['container']}>
      <div className={css['buttons']}>
        <Button onClick={() => dispatch(addToBasket({ id, color, size }))} color="d" style={{ fontSize: 16, borderWidth: '0 1px 1px 0' }}>+</Button>
        <Button onClick={() => dispatch(subtractFromBasket({ id, color, size }))} color="d" style={{ fontSize: 16, borderWidth: '0 1px 0 0' }}>-</Button>
      </div>

      <Link to={`/product/${product.id}`}>
        <img className={css['image']} src={product.src} alt=""/>
      </Link>

      <div className={css['data-container']}>
        <Link className={css['item-1']} to={`/product/${product.id}`}>
          <Text variant="h4" element="h4">{product.name}</Text>
        </Link>

        <div className={css['item-2']}>
          <Text variant="h6" element="h5" color="p-a" style={{ marginBottom: 4 }}>Quantity</Text>
          <Text variant="h6" element="p">{quantity}</Text>
        </div>

        <div className={css['item-3']}>
          <Text variant="h6" element="h5" color="p-a" style={{ marginBottom: 4 }}>Size</Text>
          <Text variant="h6" element="p">{size}</Text>
        </div>

        <div className={css['item-4']}>
          <Text variant="h6" element="h5" color="p-a" style={{ marginBottom: 4 }}>Color</Text>
          <div className={css['color']} style={{ backgroundColor: color }}/>
        </div>
      </div>

      <div className={css['right']}>
        <Text variant="h4" element="p">{parsePrice(product.price * quantity)}</Text>
        <Button onClick={() => dispatch(removeFromBasket({ id, color, size }))} color="d" style={{ margin: '0 16px 0 auto' }}>X</Button>
      </div>
    </article>
  );
}