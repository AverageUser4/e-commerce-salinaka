import { useState } from 'react';
import Logo from '../Logo/Logo';
import css from './Header.module.css';

import { ReactComponent as MenuBarsSVG } from '../../assets/menu-bars.svg';
import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  return (
    <header className={css['header']}>
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
    </header>
  );
}