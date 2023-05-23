import css from './FromToRange.module.css';
import Text from '../Text/Text';
import { useEffect, useState, useRef, useCallback } from 'react';
import { clamp } from '../../app/utils';

export default function FromToRange({ min, max } : { min: number, max: number }) {
  const [valueA, setValueA] = useState(333);
  const [valueB, setValueB] = useState(125);
  const [currentDot, setCurrentDot] = useState('');
  const rangeRef = useRef<HTMLDivElement>(null);
  const dotARef = useRef<HTMLDivElement>(null);
  const dotBRef = useRef<HTMLDivElement>(null);

  const arrowMoveAmount = Math.round((max - min) / 10);
  const big = Math.max(valueA, valueB);
  const small = Math.min(valueA, valueB);

  const step = Math.round((max - min) / 6);
  const stepsArray: number[] = [];

  for(let i = 1; i <= 5; i++) {
    stepsArray.push(step * i + min);
  }

  const doSetValue = useCallback((which: 'a' | 'b', value: number, isAddToPrev = false) => {
    if(which === 'a') {
      if(isAddToPrev) {
        setValueA(prev => clamp(min, prev + value, max));
      } else {
        setValueA(clamp(min, value, max));
      }
    } else {
      if(isAddToPrev) {
        setValueB(prev => clamp(min, prev + value, max));
      } else {
        setValueB(clamp(min, value, max));
      }
    }
  }, [min, max]);

  const percentToValue = useCallback((percent: number) => {
    return Math.round((max - min) / 100 * percent + min);
  }, [min, max]);

  function getPercent(value: number, parse = true): any {
    let percent = clamp(0, (value - min) / (max - min) * 100, 100);
    if(parse) {
      return `${percent}%`;
    }

    return percent;
  }

  function onPointerDownRange(event: any) {
    const { offsetX } = event.nativeEvent;
    const rangeWidth = event.target.getBoundingClientRect().width;
    const pointerPercent = offsetX / rangeWidth * 100;
    const newValue = percentToValue(pointerPercent);

    if(Math.abs(newValue - valueA) < Math.abs(newValue - valueB)) {
      doSetValue('a', newValue);
      setCurrentDot('a');
    } else {
      doSetValue('b', newValue);
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
      const newValue = percentToValue(pointerPercent);

      if(currentDot === 'a') {
        doSetValue('a', newValue);
      } else {
        doSetValue('b', newValue);
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
  }, [currentDot, doSetValue, percentToValue]);

  useEffect(() => {
    function onKeyDown(event: any) {
      let amount = 0;
      
      switch(event.key) {
        case 'ArrowRight':
          amount = 1;
          break;
        case 'ArrowLeft':
          amount = -1;
          break;
        case 'ArrowUp':
          amount = arrowMoveAmount;
          break;
        case 'ArrowDown':
          amount = -arrowMoveAmount;
          break;
      }
      
      if(amount) {
        if(document.activeElement === dotARef.current) {
          doSetValue('a', amount, true);
        } else if(document.activeElement === dotBRef.current) {
          doSetValue('b', amount, true);
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [arrowMoveAmount, doSetValue]);

  return (
    <div>
      <div className={css['top']}>
        <input id="ftr-min" aria-label="Minimum price." readOnly value={small} className={css['input']} type="number"/>
        <Text variant="h3" style={{ userSelect: 'none' }}>—</Text>
        <input id="ftr-max" aria-label="Maximum price." readOnly value={big} className={css['input']} type="number"/>
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
          <div aria-controls={valueA <= valueB ? 'ftr-min' : 'ftr-max'} ref={dotARef} tabIndex={0} className={css['dot']} style={{ left: getPercent(valueA) }}/>
          <div aria-controls={valueB >= valueA ? 'ftr-max' : 'ftr-min'} ref={dotBRef} tabIndex={0} className={css['dot']} style={{ left: getPercent(valueB) }}/>
        </div>
      </div>
    </div>
  );
}