import { ReactNode } from "react";
import css from './Card.module.css';
import Text from "../Text/Text";
import Button from "../Button/Button";

import { ReactComponent as ArrowSVG } from '../../assets/arrow.svg';

export default function Card({ heading, text, href, linkText, src } : { heading: ReactNode, text?: string, href?: string, linkText?: string, src: string }) {
  return (
    <article className={css['card']}>
      <div className={css['text-part']}>
        <Text variant="h1" element="h1" style={{ fontWeight: 'normal' }}>{heading}</Text>
        {text && <Text variant="p" element="p" style={{ margin: '16px 0', fontWeight: 'bold' }}>{text}</Text>}
        {href && <Button href={href} style={{ fontSize: 16, maxWidth: 150 }}>{linkText} <ArrowSVG style={{ width: 16, height: 16 }}/></Button>}
      </div>
      <img className={css['image']} src={src} alt=""/>
    </article>
  );
}