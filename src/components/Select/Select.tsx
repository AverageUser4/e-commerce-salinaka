import css from './Select.module.css';
import { ReactNode, SyntheticEvent } from "react";

export default function Select({ id, children, onChange, name, value } : { id?: string, children: ReactNode, onChange?: Function, name?: string, value?: string }) {
  return (
    <div className={css['container']}>
      <select 
        id={id}
        className={css['select']}
        onChange={(event: SyntheticEvent) => onChange && onChange(event)}
        name={name}
        value={value}
      >
        {children}
      </select>
    </div>
  );
}