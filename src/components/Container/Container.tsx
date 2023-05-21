import css from './Container.module.css';
import { ReactNode } from 'react';

export default function Container({ children } : { children: ReactNode }) {
  return (
    <div className={css['container']}>
      {children}
    </div>
  );
}