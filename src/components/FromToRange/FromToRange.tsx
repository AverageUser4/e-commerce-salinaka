import css from './FromToRange.module.css';
import Text from '../Text/Text';
import { useEffect, useState, useRef, useCallback } from 'react';
import { clamp } from '../../app/utils';

export default function FromToRange({ min, max, values, setValues } : { min: number, max: number, values: number[], setValues: Function }) {
  const [currentDot, setCurrentDot] = useState<0 | 1 | null>(null);
  const rangeRef = useRef<HTMLDivElement>(null);
  const dotARef = useRef<HTMLDivElement>(null);
  const dotBRef = useRef<HTMLDivElement>(null);

  const arrowMoveAmount = Math.round((max - min) / 10);
  const big = Math.max(...values);
  const small = Math.min(...values);

  const step = Math.round((max - min) / 6);
  const stepsArray: number[] = [];

  for(let i = 1; i <= 5; i++) {
    stepsArray.push(step * i + min);
  }

  const doSetValue = useCallback((which: 0 | 1, value: number, isAddToPrev = false) => {
    console.log('hi')
    setValues((prev: number[]) => {
      const copy = [...prev];
      let usedValue = isAddToPrev ? (copy[which] + value) : value;
      usedValue = clamp(min, usedValue, max);
      copy[which] = usedValue;
      return copy;
    });
  }, [min, max, setValues]);

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
    let which: 0 | 1 = 0;

    if(Math.abs(newValue - values[0]) > Math.abs(newValue - values[1])) {
      which = 1;
    }

    doSetValue(which, newValue);
    setCurrentDot(which);
  }

  useEffect(() => {
    function onPointerUp() {
      setCurrentDot(null);
    }

    function onPointerMove(event: any) {
      if(!rangeRef.current) {
        return;
      }
      
      const { x: rangeX, width: rangeWidth } = rangeRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rangeX;
      const pointerPercent = offsetX / rangeWidth * 100;
      const newValue = percentToValue(pointerPercent);

      if(currentDot !== null) {
        doSetValue(currentDot, newValue);
      }
    }

    if(currentDot !== null) {
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
          doSetValue(0, amount, true);
        } else if(document.activeElement === dotBRef.current) {
          doSetValue(1, amount, true);
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
          <div aria-controls={values[0] <= values[1] ? 'ftr-min' : 'ftr-max'} ref={dotARef} tabIndex={0} className={css['dot']} style={{ left: getPercent(values[0]) }}/>
          <div aria-controls={values[1] >= values[0] ? 'ftr-max' : 'ftr-min'} ref={dotBRef} tabIndex={0} className={css['dot']} style={{ left: getPercent(values[1]) }}/>
        </div>
      </div>
    </div>
  );
}