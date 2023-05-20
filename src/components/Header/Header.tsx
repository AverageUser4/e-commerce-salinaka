import Logo from '../Logo/Logo';
import css from './Header.module.css';

import { ReactComponent as MenuBarsSVG } from '../../assets/menu-bars.svg';
import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header() {
  return (
    <header className={css['header']}>
      <Logo/>

      <HeaderNav/>

      <button className={css['menu-button']}>
        <MenuBarsSVG/>
      </button>
    </header>
  );
}