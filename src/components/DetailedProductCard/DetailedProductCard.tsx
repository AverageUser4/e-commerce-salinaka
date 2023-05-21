import css from './DetailedProductCard.module.css';
import { Product } from "../../app/types";
import { parsePrice } from "../../app/utils";
import { Link } from 'react-router-dom';

export default function DetailedProductCard({ product } : { product: Product }) {
  return (
    <article className={css['container']}>
      <Link className={css['link']} to={`/product/${product.id}`}>
        <div className={css['top']}>
          <img className={css['image']} src={product.src} alt=""/>
        </div>

        <div className={css['bottom']}>
          <div className={css['text-container']}>
            <h4 className="head head--tiny">{product.name}</h4>
            <p className="para para--no-margin para--color-a">{product.company}</p>
          </div>
          <p className="head head--smaller">{parsePrice(product.price)}</p>
        </div>
      </Link>

      <div className={css['button-container']}>
        <button className={`button ${css['button']}`}>Add to basket</button>
      </div>
    </article>
  );
}