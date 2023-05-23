import css from './FromToRange.module.css';
import Text from '../Text/Text';
import { useEffect, useState, useRef } from 'react';
import { clamp } from '../../app/utils';

export default function FromToRange() {
  const min = 100;
  const max = 700;

  const [valueA, setValueA] = useState(333);
  const [valueB, setValueB] = useState(125);
  const [currentDot, setCurrentDot] = useState('');
  const rangeRef = useRef<HTMLDivElement>(null);

  const big = Math.max(valueA, valueB);
  const small = Math.min(valueA, valueB);

  const step = (max - min) / 6;
  const stepsArray: number[] = [];

  for(let i = 1; i <= 5; i++) {
    stepsArray.push(step * i + min);
  }

  function getPercent(value: number, parse = true): any {
    let percent = clamp(0, (value - min) / (max - min) * 100, 100);
    if(parse) {
      return `${percent}%`;
    }

    return percent;
  }

  function percentToValue(percent: number): number {
    return Math.round((max - min) / 100 * percent + min);
  }

  function onPointerDownRange(event: any) {
    const { offsetX } = event.nativeEvent;
    const rangeWidth = event.target.getBoundingClientRect().width;
    const pointerPercent = offsetX / rangeWidth * 100;
    const newValue = percentToValue(pointerPercent);

    if(Math.abs(newValue - valueA) < Math.abs(newValue - valueB)) {
      setValueA(newValue);
      setCurrentDot('a');
    } else {
      setValueB(newValue);
      setCurrentDot('b');
    }
  }

  useEffect(() => {
    function onPointerUp() {
      setCurrentDot('');
    }

    function onPointerMove(event: any) {
      if(!rangeRef.current) {
        return;
      }
      
      const { x: rangeX, width: rangeWidth } = rangeRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rangeX;
      const pointerPercent = offsetX / rangeWidth * 100;
      const newValue = clamp(min, percentToValue(pointerPercent), max);

      if(currentDot === 'a') {
        setValueA(newValue);
      } else {
        setValueB(newValue);
      }
    }

    if(currentDot) {
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointermove', onPointerMove);
    }

    return () => {
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [currentDot]);

  return (
    <div>
      <div className={css['top']}>
        <input readOnly value={small} className={css['input']} type="number"/>
        <Text variant="h2">—</Text>
        <input readOnly value={big} className={css['input']} type="number"/>
      </div>

      <div>
        <div ref={rangeRef} onPointerDown={onPointerDownRange} className={css['range-container']}>
          <div 
            className={css['active-indicator']}
            style={{
              left: `${getPercent(small)}`,
              width: `calc(${getPercent(big)} - ${getPercent(small)})`,
            }}
          />
          {stepsArray.map((step, i) => (
            <div 
              className={css['step']} 
              key={step}
              style={{ left: `${17 * (i + 1)}%` }}
            >
              {step}
            </div>
          ))}
          <div className={css['dot']} style={{ left: getPercent(valueA) }}/>
          <div className={css['dot']} style={{ left: getPercent(valueB) }}/>
        </div>
      </div>
    </div>
  );
}