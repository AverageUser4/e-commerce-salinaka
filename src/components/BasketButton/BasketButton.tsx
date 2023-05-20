import { ReactComponent as BasketSVG } from '../../assets/basket.svg';
import css from './BasketButton.module.css';

export default function BasketButton() {
  return (
    <button className="button button--color-b">
      <BasketSVG style={{ color: 'rgb(16, 16, 16)' }}/>
    </button>
  );
}