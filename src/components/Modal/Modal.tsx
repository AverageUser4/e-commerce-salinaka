import { ReactNode, useRef } from 'react';
import css from './Modal.module.css';

export default function Modal({ children, isOpen, setIsOpen } : { children: ReactNode, isOpen: boolean, setIsOpen: Function }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  if(!isOpen) {
    return null;
  }

  return (
    <div 
      className={css['container']}
      ref={containerRef}
      onClick={(event) => (event.target === containerRef.current) && setIsOpen(false)}
    >
      {children}
    </div>
  );
}