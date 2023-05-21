import { Link } from 'react-router-dom';
import css from './Logo.module.css';

import logoSrc from '../../assets/logo.png';

export default function Logo() {
  return (
    <Link to="/">
      <img className={css['image']} src={logoSrc} alt=""/>
    </Link>
  );
}