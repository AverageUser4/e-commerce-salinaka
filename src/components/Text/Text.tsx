import css from './Text.module.css';
import { ReactNode, createElement } from "react";
import { TextElement } from "../../app/types";

export default function Text({ children, element = 'span', style = {}, variant = 'span', color = 'span-a' } : { children: ReactNode, element?: TextElement, style?: Object, variant?: TextElement, color?: string }) {
  const className = `${css['text']} ${css[variant]} ${css[`color-${color}`]}`
  return (
    createElement(element, { style, className }, children)
  );
}