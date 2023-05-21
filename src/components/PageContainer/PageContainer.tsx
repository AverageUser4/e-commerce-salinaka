import css from './PageContainer.module.css';
import { ReactNode } from 'react';

export default function PageContainer({ children } : { children: ReactNode }) {
  return (
    <div className={css['container']}>
      {children}
    </div>
  );
}