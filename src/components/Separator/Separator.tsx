import css from './Separator.module.css';

export default function Separator({ isVertical, style = {} } : { isVertical?: boolean, style?: Object }) {
  const className = `${css['separator']} ${isVertical && css['separator--vertical']}`;
  
  return (
    <div className={className} style={style}/>
  );
}