import css from './FiltersModal.module.css';
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";
import Text from '../Text/Text';
import Select from '../Select/Select';
import Separator from '../Separator/Separator';
import FromToRange from '../FromToRange/FromToRange';

export default function FiltersModal({ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: Function }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalCard>
        <form>
          <div className={css['siblings']}>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-brand"><Text color="p-a" element="span" variant="h6">Brand</Text></label>
              <Select id="filters-modal-brand">
                <option>All Brands</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </Select>
            </div>
            <div className={css['select-container']}>
              <label htmlFor="filters-modal-sort"><Text color="p-a" element="span" variant="h6">Sort By</Text></label>
              <Select id="filters-modal-sort">
                <option>None</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </Select>
            </div>
          </div>

          <Separator/>

          <Text color="p-a" element="span" variant="h6">Price Range</Text>
          <FromToRange/>

        </form>
      </ModalCard>
    </Modal>
  );
}