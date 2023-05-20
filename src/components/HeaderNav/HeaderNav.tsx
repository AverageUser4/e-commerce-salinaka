import BasketButton from '../BasketButton/BasketButton';
import css from './HeaderNav.module.css';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  return (
    <nav className={css['nav']}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/featured">Featured</Link>
        </li>
        <li>
          <Link to="/recommended">Recommended</Link>
        </li>
      </ul>

      <form role="search">
        <input type="search"/>
      </form>

      <BasketButton/>
    </nav>
  );
}