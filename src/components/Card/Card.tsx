import { ReactNode } from "react";
import css from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card({ heading, text, href, linkText, src } : { heading: ReactNode, text: string, href: string, linkText: string, src: string }) {
  return (
    <article className={css['card']}>
      <div className={css['text-part']}>
        <h1 className="head head--font-weight-normal">{heading}</h1>
        <p className="para">{text}</p>
        <Link className="button button--type-a" to={href}>{linkText}</Link>
      </div>
      <img className={css['image']} src={src} alt=""/>
    </article>
  );
}