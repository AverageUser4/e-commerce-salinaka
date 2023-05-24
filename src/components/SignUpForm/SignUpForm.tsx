import css from './SignUpForm.module.css'
import Text from '../Text/Text';
import Button from '../Button/Button';

import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';

export default function SignUpForm() {
  return (
    <form className={css['container']}>
      <div className={css['top']}>
        <Text variant="h3" element="h1" style={{ marginBottom: 32 }}>Sign up to Salinka</Text>

        <div className={css['input-container']}>
          <label className={css['label']} htmlFor="name"><Text variant="h6" element="span" color="p-a">* Full Name</Text></label>
          <input id="name" className="input" placeholder="John Doe"/>
        </div>
        
        <div className={css['input-container']}>
          <label className={css['label']} htmlFor="email"><Text variant="h6" element="span" color="p-a">* Email address</Text></label>
          <input id="email" className="input" placeholder="test@example.com"/>
        </div>
        
        <div className={css['input-container']}>
          <label className={css['label']} htmlFor="password"><Text variant="h6" element="span" color="p-a">* Your Password</Text></label>
          <input id="password" className="input" placeholder="user123"/>
        </div>

        <Button style={{ fontSize: 16, width: '100%', marginTop: 32 }}>Sign Up <ArrowSVG/></Button>
      </div>

      <div className={css['bottom']}>
        <Text variant="h6" color="p-a" element="p">Already have an account?</Text>
        <Button color="d" href="/signin">Sign In</Button>
      </div>
    </form>
  );
}