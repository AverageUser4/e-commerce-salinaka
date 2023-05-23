import css from './AppliedFilters.module.css';
import { brandReset, priceReset, selectFilters, sortReset } from "../../features/filters/filtersSlice";
import FilterIndicator from '../FilterIndicator/FilterIndicator';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { parsePrice } from '../../app/utils';

export default function AppliedFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  let sortValue = 'Name A - Z';
  switch(filters.sort) {
    case 'nameDesc':
      sortValue = 'Name Z - A';
      break;
    case 'priceAsc':
      sortValue = 'Price Low - High';
      break;
    case 'priceDesc':
      sortValue = 'Price High - Low';
      break;
  }
  let priceValue = '';

  if(filters.price.length) {
    priceValue = `${parsePrice(filters.price[0], true)} - ${parsePrice(filters.price[1], true)}`;
  }

  return (
    <div className={css['container']}> 
      {filters.brand && <FilterIndicator name="Brand" value={filters.brand} onClose={() => dispatch(brandReset())}/>}     
      {filters.sort && <FilterIndicator name="Sort By" value={sortValue} onClose={() => dispatch(sortReset())}/>}     
      {filters.price.length !== 0 && <FilterIndicator name="Price Range" value={priceValue} onClose={() => dispatch(priceReset())}/>}     
    </div>
  );
}