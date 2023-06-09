import { useState, useEffect, SyntheticEvent } from 'react';
import css from './FiltersModal.module.css';
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";
import Text from '../Text/Text';
import Select from '../Select/Select';
import Separator from '../Separator/Separator';
import FromToRange from '../FromToRange/FromToRange';
import Button from '../Button/Button';
import { filtersChanged } from '../../features/filters/filtersSlice';
import { useAppDispatch } from '../../app/hooks';
import { Filters } from '../../app/types';

export default function FiltersModal({ isOpen, setIsOpen, min, max, brands } : { isOpen: boolean, setIsOpen: Function, min: number, max: number, brands: string[] }) {
  const dispatch = useAppDispatch();
  const usedMin = Math.floor(min / 100);
  const usedMax = Math.ceil(max / 100);

  const initialData: Filters = {
    brand: '',
    sort: '',
    price: [usedMin, usedMax],
  };

  const [data, setData] = useState(initialData);
  
  function onChange(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setData(prev => ({ ...prev, [target.name]: target.value }))
  }

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    let usedPrice = [...data.price];
    if(usedPrice.includes(usedMin) && usedPrice.includes(usedMax)) {
      usedPrice = [];
    }
    usedPrice = usedPrice.map(x => x * 100);
    
    dispatch(filtersChanged({ ...data, price: usedPrice }));
    setIsOpen(false);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalCard>
        <form onSubmit={onSubmit}>
          <div className={css['siblings']}>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-brand"><Text color="p-a" element="span" variant="h6">Brand</Text></label>
              <Select value={data.brand} name="brand" id="filters-modal-brand" onChange={onChange}>
                <option value="">All Brands</option>
                {brands.map(brand => <option value={brand} key={brand}>{brand}</option>)}
              </Select>
            </div>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-sort"><Text color="p-a" element="span" variant="h6">Sort By</Text></label>
              <Select value={data.sort} name="sort" id="filters-modal-sort" onChange={onChange}>
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
          <FromToRange 
            min={usedMin}
            max={usedMax}
            values={data.price}
            setValues={(arg: number[] | Function) => {
              if(typeof arg === 'function') {
                setData(prev => {
                  const newPrice = arg(prev.price);
                  return { ...prev, price: newPrice };
                })
              } else {
                setData(prev => ({ ...prev, price: arg }))
              }
            }}
          />

          <Separator style={{ margin: '72px 0 16px' }}/>

          <div className={css['duo-button']}>
            <Button style={{ fontSize: 14 }}>Apply filters</Button>
            <Button style={{ fontSize: 14 }} color="c" onClick={() => setData(initialData)}>Reset filters</Button>
          </div>
        </form>
      </ModalCard>
    </Modal>
  );
}