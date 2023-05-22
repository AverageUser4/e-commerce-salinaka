import { ReactNode } from "react";
import css from './Card.module.css';
import { Link } from "react-router-dom";
import Text from "../Text/Text";

export default function Card({ heading, text, href, linkText, src } : { heading: ReactNode, text?: string, href?: string, linkText?: string, src: string }) {
  return (
    <article className={css['card']}>
      <div className={css['text-part']}>
        <Text variant="h1" element="h1" style={{ fontWeight: 'normal' }}>{heading}</Text>
        {text && <Text variant="p" element="p" style={{ margin: '16px 0', fontWeight: 'bold' }}>{text}</Text>}
        {href && <Link className="button button--type-a" to={href}>{linkText}</Link>}
      </div>
      <img className={css['image']} src={src} alt=""/>
    </article>
  );
}