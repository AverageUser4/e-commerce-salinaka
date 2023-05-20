import { ReactComponent as BasketSVG } from '../../assets/basket.svg';
import css from './BasketButton.module.css';

export default function BasketButton() {
  return (
    <button className={css['button']}>
      <BasketSVG/>
    </button>
  );
}