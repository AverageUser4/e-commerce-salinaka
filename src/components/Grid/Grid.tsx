import { ReactNode } from 'react';
import css from './Grid.module.css';
 
export default function Grid({ children } : { children: ReactNode }) {
  function wrap(node: ReactNode, key: number) {
    return (
      <li key={key}>{node}</li>
    );
  }
  
  let items: ReactNode = wrap(children, 0);

  if(Array.isArray(children)) {
    items = children.map((element, i) => wrap(element, i))
  }
  
  return (
    <ul className={css['container']}>
      {items}
    </ul>
  );
}