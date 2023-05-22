import css from './FromToRange.module.css';
import Text from '../Text/Text';
import { useState } from 'react';

export default function FromToRange() {
  const min = 67;
  const max = 674;

  const [valueA, setValueA] = useState(179);
  const [valueB, setValueB] = useState(max);

  const step = Math.round(max / 6 + min);
  const stepsArray: number[] = [];

  for(let i = 1; i <= 5; i++) {
    stepsArray.push(step * i);
  }

  function getPercent(value: number): string {
    const percent = Math.round((value - min) / (max - min) * 100);
    return `${percent}%`;
  }

  return (
    <div>
      <div className={css['top']}>
        <input value={23} className={css['input']} type="number"/>
        <Text variant="h2">—</Text>
        <input value={100} className={css['input']} type="number"/>
      </div>

      <div className={css['bottom']}>
        <div className={css['range-container']}>
          <div 
            className={css['active-indicator']}
            style={{
              left: 'calc(12% + 14px)',
              width: 'calc(66% - 12%)',
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