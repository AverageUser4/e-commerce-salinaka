import { Link } from 'react-router-dom';
import { useAppSelector, useProductsData } from '../../app/hooks';
import { RootState } from '../../app/store';
import { selectProductById } from '../../features/products/productsSlice';
import Button from '../Button/Button';
import Text from '../Text/Text';
import css from './BasketItem.module.css';

export default function BasketItem() {
  useProductsData();
  const product = useAppSelector((state: RootState) => selectProductById(state, '0'));

  return (
    <article className={css['container']}>
      <div className={css['buttons']}>
        <Button color="d" style={{ fontSize: 16, borderWidth: '0 1px 1px 0' }}>+</Button>
        <Button color="d" style={{ fontSize: 16, borderWidth: '0 1px 0 0' }}>-</Button>
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
          <Text variant="h6" element="p">1</Text>
        </div>

        <div className={css['item-3']}>
          <Text variant="h6" element="h5" color="p-a" style={{ marginBottom: 4 }}>Size</Text>
          <Text variant="h6" element="p">28 mm</Text>
        </div>

        <div className={css['item-4']}>
          <Text variant="h6" element="h5" color="p-a" style={{ marginBottom: 4 }}>Color</Text>
          <Text variant="h6" element="p">red</Text>
        </div>
      </div>
    </article>
  );
}