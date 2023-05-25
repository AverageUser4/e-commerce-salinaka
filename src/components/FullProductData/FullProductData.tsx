import css from './FullProductData.module.css';
import { useAppDispatch, useAppSelector, useProductsData } from '../../app/hooks';
import { selectProductById } from '../../features/products/productsSlice';
import { RootState } from '../../app/store';
import Text from '../Text/Text';
import Separator from '../Separator/Separator';
import Select from '../Select/Select';
import ColorInputs from '../ColorInputs/ColorInputs';
import { SyntheticEvent, useEffect, useState } from 'react';
import { parsePrice } from '../../app/utils';
import Button from '../Button/Button';
import { addToBasket } from '../../features/basket/basketSlice';


export default function FullProductData({ id } : { id: string }) {
  useProductsData();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state: RootState) => selectProductById(state, id));
  const [currentColor, setCurrentColor] = useState(product.colors[0].value);
  const [size, setSize] = useState('28 mm');

  useEffect(() => {
    setCurrentColor(product.colors[0].value)
  }, [id, product.colors]);

  function onChange(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setSize(target.value);
  }

  return (
    <article className={css['container']}>
      <div className={css['all-thumbnails-container']}>
        <div className={css['thumbnail-container']}>
          <img className={css['thumbnail']} src={product.src} alt={product.name}/>
        </div>
      </div>

      <div className={css['image-container']}>
        <img src={product.src} className={css['image']} alt={product.name}/>
      </div>

      <div className={css['data-container']}>
        <div>
          <Text variant="h5" element="p" color="p-b">{product.company}</Text>
          <Text style={{ marginBottom: 16 }} variant="h2" element="h2">{product.name}</Text>
          <Text variant="p" element="p">{product.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.'}</Text>
        </div>

        <Separator/>

        <label className={css['label']} htmlFor="product-size"><Text variant="h5" element="h3" color="p-b">Lens Width and Frame Size</Text></label>
        <Select id="product-size" value={size} onChange={onChange}>
          <option value="28 mm">28 mm</option>
          <option value="36 mm">36 mm</option>
          <option value="42 mm">42 mm</option>
        </Select>

        <Separator style={{ backgroundColor: 'transparent', margin: '12px 0' }}/>

        <Text variant="h5" element="h3" color="p-b">Choose Color</Text>
        <ColorInputs
          colors={product.colors.map(color => color.value)}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />

        <Text style={{ display: 'block', margin: '16px 0' }} variant="h2" element="span">{parsePrice(product.price)}</Text>

        <Button onClick={() => dispatch(addToBasket({ id, color: currentColor, size }))}>Add To Basket</Button>
      </div>
    </article>
  );
}