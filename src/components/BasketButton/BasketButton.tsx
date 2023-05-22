import { ReactComponent as BasketSVG } from '../../assets/basket.svg';
import Button from '../Button/Button';

export default function BasketButton() {
  return (
    <Button color="b">
      <BasketSVG style={{ color: 'rgb(16, 16, 16)', width: 24, height: 24 }}/>
    </Button>
  );
}