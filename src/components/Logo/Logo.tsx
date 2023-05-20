import { Link } from 'react-router-dom';

import logoSrc from '../../assets/logo.png';

export default function Logo() {
  return (
    <Link to="/">
      <img style={{ display: 'block', width: 160 }} src={logoSrc} alt=""/>
    </Link>
  );
}