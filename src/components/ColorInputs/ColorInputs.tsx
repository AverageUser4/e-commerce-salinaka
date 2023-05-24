import css from './ColorInputs.module.css';

import { ReactComponent as CheckmarSVG } from '../../assets/checkmark.svg';

export default function ColorInputs({ colors, currentColor, setCurrentColor } : { colors: string[], currentColor: string, setCurrentColor: Function }) {
  return (
    <div className={css['container']}>
      {colors.map(color => {
        const isActive = currentColor === color;
        
        return (
          <button 
            key={color}
            className={`${css['button']} ${isActive && css['button--active']}`}
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          >
            {isActive && <CheckmarSVG style={{ width: 20, height: 20, color: 'white' }}/>}
          </button>
        );
      })}
    </div>
  );
}