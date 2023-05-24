import css from './PageContainer.module.css';
import { ReactNode } from 'react';

export default function PageContainer({ children, isCenter } : { children: ReactNode, isCenter?: boolean }) {
  return (
    <div className={`
      ${css['container']}
      ${isCenter && css['container--center']}
    `}>
      {children}
    </div>
  );
}