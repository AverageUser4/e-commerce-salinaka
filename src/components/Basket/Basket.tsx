import css from './Basket.module.css';
import Text from '../Text/Text';
import Button from '../Button/Button';
import BasketItem from '../BasketItem/BasketItem';
import { useAppSelector, useProductsData } from '../../app/hooks';
import { selectBasket } from '../../features/basket/basketSlice';
import { parsePrice } from '../../app/utils';
import { selectAllProducts } from '../../features/products/productsSlice';

export default function Basket({ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: Function }) {
  useProductsData();
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
          <Text variant="h6" element="p" color="p-a">(1 item)</Text>
        </div>

        <div className={css['top__buttons']}>
          <Button color="d" style={{ borderRight: 'none' }} onClick={() => setIsOpen(false)}>Close</Button>
          <Button color="d">Clear Basket</Button>
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

        <Button style={{ fontSize: 16 }}>CHECKOUT</Button>
      </div>

    </div>
  );
}