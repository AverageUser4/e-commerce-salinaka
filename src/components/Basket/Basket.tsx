import css from './Basket.module.css';
import Text from '../Text/Text';
import Button from '../Button/Button';
import BasketItem from '../BasketItem/BasketItem';
import { useAppDispatch, useAppSelector, useProductsData } from '../../app/hooks';
import { selectBasket } from '../../features/basket/basketSlice';
import { parsePrice } from '../../app/utils';
import { selectAllProducts } from '../../features/products/productsSlice';
import { clearBasket } from '../../features/basket/basketSlice';

export default function Basket({ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: Function }) {
  useProductsData();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const basket = useAppSelector(selectBasket);
  let subtotal = 0;
  basket.forEach(item => subtotal += (item.quantity * (products.find(x => x.id === item.id)?.price || 0)))
  
  if(!isOpen) {
    return null;
  }
  
  return (
    <div className={css['container']}>
      <div className={css['top']}>
        <div className={css['heading']}>
          <Text variant="h4" element="h4">My Basket</Text>
          {
            basket.length > 0 &&
              <Text variant="h6" element="p" color="p-a">
                ({basket.length} item{basket.length > 1 && 's'})
              </Text>
          }
        </div>

        <div className={css['top__buttons']}>
          <Button color="d" style={{ borderRight: 'none' }} onClick={() => setIsOpen(false)}>Close</Button>
          <Button color="d" onClick={() => dispatch(clearBasket())}>Clear Basket</Button>
        </div>
      </div>

      <ul className={css['products-list']}>
        {
          basket.length ?
            basket.map(item =>
              <li key={item.id}>
                <BasketItem {...item}/>
              </li>
            )
          :
            <li><Text variant="p" element="p">Your basket is empty.</Text></li>
        }
      </ul>

      <div className={css['bottom']}>
        <div>
          <Text variant="h6" element="h4" color="p-a" style={{ marginBottom: 16 }}>Subtotal Amount:</Text>
          <Text variant="h4" element="p">
            {parsePrice(subtotal)}
          </Text>
        </div>

        <Button href="/checkout" style={{ fontSize: 16 }}>CHECKOUT</Button>
      </div>
    </div>
  );
}