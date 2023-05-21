import css from './FiltersModal.module.css';
import Modal from "../Modal/Modal";
import ModalCard from "../ModalCard/ModalCard";

export default function FiltersModal({ isOpen, setIsOpen } : { isOpen: boolean, setIsOpen: Function }) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ModalCard>
        <form>
          
        </form>
      </ModalCard>
    </Modal>
  );
}