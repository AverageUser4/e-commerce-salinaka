import BasketButton from '../BasketButton/BasketButton';
import css from './HeaderNav.module.css';

import { ReactComponent as CloseSVG } from '../../assets/close.svg';
import Button from '../Button/Button';

export default function HeaderNav({ isNavOpen, setIsNavOpen } : { isNavOpen: boolean, setIsNavOpen: Function }) {
  return (
    <nav className={`${css['nav']} ${!isNavOpen && css['nav--hidden']}`}>
      <div className={css['close-button-container']}>
        <Button color="b" onClick={() => setIsNavOpen(false)}>
          <CloseSVG style={{ width: 24, height: 24 }}/>
        </Button>
      </div>
      
      <ul className={css['nav-list']}>
        <li>
          <Button
            style={{ fontSize: 14 }}
            className={css['item']}
            color="b"
            onClick={() => setIsNavOpen(false)}
            href="/"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            style={{ fontSize: 14 }}
            className={css['item']}
            color="b"
            onClick={() => setIsNavOpen(false)}
            href="/shop"
          >
            Shop
          </Button>
        </li>
        <li>
          <Button
            style={{ fontSize: 14 }}
            className={css['item']}
            color="b"
            onClick={() => setIsNavOpen(false)}
            href="/featured"
          >
            Featured
          </Button>
        </li>
        <li>
          <Button
            style={{ fontSize: 14 }}
            className={css['item']}
            color="b"
            onClick={() => setIsNavOpen(false)}
            href="/recommended"
          >
            Recommended
          </Button>
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
          <Button href="/signup">Sign up</Button>
          <Button href="/signin" color="a">Sign in</Button>
        </div>
      </div>
    </nav>
  );
}