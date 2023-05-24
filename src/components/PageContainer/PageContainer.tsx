import { useLocation } from 'react-router-dom';
import css from './PageContainer.module.css';
import { ReactNode, useEffect } from 'react';

export default function PageContainer({ children, isCenter } : { children: ReactNode, isCenter?: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className={`
      ${css['container']}
      ${isCenter && css['container--center']}
    `}>
      {children}
    </div>
  );
}