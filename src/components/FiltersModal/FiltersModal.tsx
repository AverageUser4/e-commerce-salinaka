import { useState, useEffect } from 'react';
import css from './FiltersModal.module.css';
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";
import Text from '../Text/Text';
import Select from '../Select/Select';
import Separator from '../Separator/Separator';
import FromToRange from '../FromToRange/FromToRange';
import Button from '../Button/Button';
import { useAppSelector } from '../../app/hooks';
import { selectFilters } from '../../features/filters/filtersSlice';

export default function FiltersModal({ isOpen, setIsOpen, min, max, brands } : { isOpen: boolean, setIsOpen: Function, min: number, max: number, brands: string[] }) {
  const filters = useAppSelector(selectFilters);
  
  const [brand, setBrand] = useState('');
  const [sort, setSort] = useState('');
  const [price, setPrice] = useState([]);

  // useEffect(() => {
  //   if(isOpen) {
  //     setBrand(filters.brand);
  //     setSort(filters.sort);
  //     setPrice(filters.price);
  //   }
  // }, [isOpen]);
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalCard>
        <form>
          <div className={css['siblings']}>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-brand"><Text color="p-a" element="span" variant="h6">Brand</Text></label>
              <Select id="filters-modal-brand">
                <option value="">All Brands</option>
                {brands.map(brand => <option value={brand} key={brand}>{brand}</option>)}
              </Select>
            </div>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-sort"><Text color="p-a" element="span" variant="h6">Sort By</Text></label>
              <Select id="filters-modal-sort">
                <option value="">None</option>
                <option value="nameAsc">Name Ascending A - Z</option>
                <option value="nameDesc">Name Descending Z - A</option>
                <option value="priceAsc">Price Low - High</option>
                <option value="priceDesc">Price High - Low</option>
              </Select>
            </div>
          </div>

          <Separator/>

          <Text color="p-a" element="span" variant="h6">Price Range</Text>
          <FromToRange min={min} max={max}/>

          <Separator style={{ margin: '72px 0 16px' }}/>

          <div className={css['duo-button']}>
            <Button type="button" style={{ fontSize: 14 }}>Apply filters</Button>
            <Button type="button" style={{ fontSize: 14 }} color="c">Reset filters</Button>
          </div>

        </form>
      </ModalCard>
    </Modal>
  );
}