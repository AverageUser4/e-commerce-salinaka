import css from './FilterIndicator.module.css';
import Text from '../Text/Text';

export default function FilterIndicator({ name, value, onClose } : { name: string, value: string, onClose?: Function }) {
  return (
    <div className={css['container']}>
      <Text variant="p" element="h4">{name}</Text>

      <div className={css['value-container']}>
        <Text variant="h5" element="p">{value}</Text>
        {onClose && <button onClick={(event) => onClose(event)} className={css['close-button']}>x</button>}
      </div>
    </div>
  );
}