import css from './Select.module.css';
import { ReactNode } from "react";

export default function Select({ id, children } : { id?: string, children: ReactNode }) {
  return (
    <div className={css['container']}>
      <select 
        id={id}
        className={css['select']}
      >
        {children}
      </select>
    </div>
  );
}