import css from './HeaderNav.module.css';
import Button from '../Button/Button';

import { ReactComponent as CloseSVG } from '../../assets/close.svg';
import { ReactComponent as BasketSVG } from '../../assets/basket.svg';
import Basket from '../Basket/Basket';
import { useState } from 'react';
import ProductSearchForm from '../ProductSearchForm/ProductSearchForm';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { logout, selectUser } from '../../features/user/userSlice';
import Text from '../Text/Text';
import { selectBasket } from '../../features/basket/basketSlice';

export default function HeaderNav({ isNavOpen, setIsNavOpen } : { isNavOpen: boolean, setIsNavOpen: Function }) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const basket = useAppSelector(selectBasket)
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  
  return (
    <>
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
            <ProductSearchForm submitCallback={() => setIsNavOpen(false)}/>

            <Button color="b" onClick={() => { setIsBasketOpen(prev => !prev); setIsNavOpen(false); }}>
              <BasketSVG style={{ color: 'rgb(16, 16, 16)', width: 24, height: 24 }}/>
              {basket.length !== 0 && `(${basket.length})`}
            </Button>
          </div>

          {
            user ?
              <div className={css['siblings']}>
                <Text>{user}</Text>
                <Button onClick={() => dispatch(logout(0))}>Sign out</Button>
              </div>
            :
              <div className={css['siblings']}>            
                <Button onClick={() => setIsNavOpen(false)} href="/signup">Sign up</Button>
                <Button onClick={() => setIsNavOpen(false)} href="/signin" color="a">Sign in</Button>
              </div>
          }
        </div>
      </nav>

      <Basket isOpen={isBasketOpen} setIsOpen={setIsBasketOpen}/>
    </>
  );
}