import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

import { ReactComponent as MenuBarsSVG } from '../../assets/menu-bars.svg';
import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsMoved(Boolean(window.scrollY));
    }

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`${css['header']} ${isMoved && css['header--moved']}`}>
      <div className={css['header-content']}>
        <Logo/>

        <HeaderNav 
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
        />

        <button 
          className={`button button--color-b ${css['menu-button']}`}
          onClick={() => setIsNavOpen((prev: boolean) => !prev)}
        >
          <MenuBarsSVG/>
        </button>
      </div>
    </header>
  );
}