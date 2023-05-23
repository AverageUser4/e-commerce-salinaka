import { ReactNode, useEffect, useRef } from 'react';
import css from './Modal.module.css';

export default function Modal({ children, isOpen, setIsOpen } : { children: ReactNode, isOpen: boolean, setIsOpen: Function }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: any)  {
      if(event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if(isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if(!isOpen) {
    return null;
  }

  return (
    <div 
      className={css['container']}
      ref={containerRef}
      onPointerDown={(event) => (event.target === containerRef.current) && setIsOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
}