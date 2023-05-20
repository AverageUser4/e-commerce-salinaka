import BasketButton from '../BasketButton/BasketButton';
import css from './HeaderNav.module.css';
import { Link } from 'react-router-dom';

export default function HeaderNav() {
  const linkClass = `button button--color-b ${css['item']}`;
  
  return (
    <nav className={css['nav']}>
      <ul className={css['nav-list']}>
        <li>
          <Link className={linkClass} to="/">Home</Link>
        </li>
        <li>
          <Link className={linkClass} to="/shop">Shop</Link>
        </li>
        <li>
          <Link className={linkClass} to="/featured">Featured</Link>
        </li>
        <li>
          <Link className={linkClass} to="/recommended">Recommended</Link>
        </li>
      </ul>

      <div className={css['siblings']}>
        <form role="search">
          <input type="search" className={`input input--search ${css['item']}`} placeholder="Search product..."/>
        </form>

        <BasketButton/>
      </div>

      <div className={css['siblings']}>
        <Link to="/signup" className="button">Sign up</Link>
        <Link to="/signin" className="button button--color-a">Sign in</Link>
      </div>
    </nav>
  );
}