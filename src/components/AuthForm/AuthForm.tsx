import css from './AuthForm.module.css'
import Text from '../Text/Text';
import Button from '../Button/Button';

import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import { capitalize } from '../../app/utils';

export default function AuthForm({ type } : { type: 'up' | 'in' }) {
  return (
    <form className={css['container']}>
      <div className={css['top']}>
        <Text variant="h3" element="h1" style={{ marginBottom: 32 }}>Sign {type} to Salinka</Text>

        {
          type === 'up' &&
            <div className={css['input-container']}>
              <label htmlFor="name"><Text variant="h6" element="span" color="p-a">* Full Name</Text></label>
              <input id="name" className="input" placeholder="John Doe"/>
            </div>
        }
        
        <div className={css['input-container']}>
          <label htmlFor="email"><Text variant="h6" element="span" color="p-a">* Email Address</Text></label>
          <input id="email" type="email" className="input" placeholder="test@example.com"/>
        </div>
        
        <div className={css['input-container']}>
          <label htmlFor="password"><Text variant="h6" element="span" color="p-a">* Your Password</Text></label>
          <input id="password" type="password" className="input" placeholder="johndoe123"/>
        </div>

        <Button style={{ fontSize: 16, width: '100%', marginTop: 32 }}>Sign {capitalize(type)} <ArrowSVG/></Button>
      </div>

      <div className={css['bottom']}>
        <Text variant="h6" color="p-a" element="p">
          {type === 'up' ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <Button color="d" href="/signin">Sign {capitalize(type)}</Button>
      </div>
    </form>
  );
}