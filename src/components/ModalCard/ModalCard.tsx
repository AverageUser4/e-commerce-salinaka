import { ReactNode } from 'react';
import css from './ModalCard.module.css';

export default function ModalCard({ children } : { children: ReactNode }) {
  return (
    <div className={css['container']}>
      {children}
    </div>
  );
}