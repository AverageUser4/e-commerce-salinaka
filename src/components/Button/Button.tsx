import { ReactNode, createElement } from "react"
import css from './Button.module.css';
import { Link } from "react-router-dom";

export default function Button({ children, href, style, color, onClick, className = '' } : { children: ReactNode, href?: string, style?: Object, color?: string, onClick?: Function, className?: string }) {
  className += ` ${css['button']} ${css[`color-${color}`]}`;
  const clickCallback = (event: any) => onClick && onClick(event);
  
  if(href?.startsWith('/')) {
    return (
      <Link to={href} style={style} className={className} onClick={clickCallback}>
        {children}
      </Link>
    );
  }

  return (
    createElement(
      href ? 'a' : 'button',
      { href, style, className, onClick: clickCallback },
      children
    )
  );
}