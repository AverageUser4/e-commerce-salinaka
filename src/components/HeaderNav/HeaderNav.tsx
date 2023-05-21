import BasketButton from '../BasketButton/BasketButton';
import css from './HeaderNav.module.css';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseSVG } from '../../assets/close.svg';

export default function HeaderNav({ isNavOpen, setIsNavOpen } : { isNavOpen: boolean, setIsNavOpen: Function }) {
  const linkClass = `button button--color-b button--medium ${css['item']}`;

  return (
    <nav className={`${css['nav']} ${!isNavOpen && css['nav--hidden']}`}>
      <div className={css['close-button-container']}>
        <button 
          className="button button--color-b"
          onClick={() => setIsNavOpen(false)}
        >
          <CloseSVG/>
        </button>
      </div>
      
      <ul className={css['nav-list']}>
        <li>
          <Link onClick={() => setIsNavOpen(false)} className={linkClass} to="/">Home</Link>
        </li>
        <li>
          <Link onClick={() => setIsNavOpen(false)} className={linkClass} to="/shop">Shop</Link>
        </li>
        <li>
          <Link onClick={() => setIsNavOpen(false)} className={linkClass} to="/featured">Featured</Link>
        </li>
        <li>
          <Link onClick={() => setIsNavOpen(false)} className={linkClass} to="/recommended">Recommended</Link>
        </li>
      </ul>

      <div className={css['siblings']}>
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
      </div>
    </nav>
  );
}