import css from './AuthForm.module.css'
import Text from '../Text/Text';
import Button from '../Button/Button';

import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';
import { capitalize } from '../../app/utils';
import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, selectUser } from '../../features/user/userSlice';
import { useAppSelector } from '../../app/hooks';

export default function AuthForm({ type } : { type: 'up' | 'in' }) {
  const user = useAppSelector(selectUser);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  function onChange(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setData(prev => ({ ...prev, [target.name]: target.value }));
  }

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();

    setError('');

    if(type === 'up' && data.name.length < 3) {
      setError('Name has to have at least 3 characters.');
    } else if(type === 'up' && data.name.trim().length === 0) {
      setError('Name cannot consist of only "space" characters');
    } else if(data.email.length < 3) {
      setError('Email has to have at least 3 characters.');
    } else if(data.email.trim().length === 0) {
      setError('Email cannot consist of only "space" characters');
    } else if(data.password.length === 0) {
      setError('Password has to have at least 3 characters.');
    } else {
      if(type === 'in') {
        const user = localStorage.getItem(`${data.email}-${data.password}`);
        if(!user) {
          setError('Login or password is incorrect.');
          return;
        }
        dispatch(login(user));
      } else {
        localStorage.setItem(`${data.email}-${data.password}`, data.name);
        dispatch(login(data.name));
      }
    }
  }
  
  if(user) {
    return <Text variant="h1" element="h1" style={{ margin: 'auto' }}>You are logged in!</Text>
  }

  return (
    <form className={css['container']} onSubmit={onSubmit}>
      <div className={css['top']}>
        <Text variant="h3" element="h1" style={{ marginBottom: 32 }}>Sign {type} to Salinka</Text>

        {
          type === 'up' &&
            <div className={css['input-container']}>
              <label htmlFor="name"><Text variant="h6" element="span" color="p-a">* Full Name</Text></label>
              <input id="name" value={data.name} name="name" onChange={onChange} className="input" placeholder="John Doe"/>
            </div>
        }
        
        <div className={css['input-container']}>
          <label htmlFor="email"><Text variant="h6" element="span" color="p-a">* Email Address</Text></label>
          <input id="email" value={data.email} name="email" onChange={onChange} type="email" className="input" placeholder="test@example.com"/>
        </div>
        
        <div className={css['input-container']}>
          <label htmlFor="password"><Text variant="h6" element="span" color="p-a">* Your Password</Text></label>
          <input id="password" value={data.password} name="password" onChange={onChange} type="password" className="input" placeholder="johndoe123"/>
        </div>

        {error && <p style={{ color: 'rgb(220, 50, 30)', fontSize: 20 }}>{error}</p>}

        <Button style={{ fontSize: 16, width: '100%', marginTop: 32 }}>Sign {capitalize(type)} <ArrowSVG/></Button>
      </div>

      <div className={css['bottom']}>
        <Text variant="h6" color="p-a" element="p">
          {type === 'in' ? 'Already have an account?' : "Don't have an account?"}
        </Text>
        <Button color="d" href={type === 'in' ? '/signup' : '/signin'}>Sign {type === 'in' ? 'Up' : 'In'}</Button>
      </div>
    </form>
  );
}