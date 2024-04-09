import Modal from '@mui/material/Modal';
import { BoxStyled } from './Modal.styled';

export const ModalDialog = ({ children, open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyled>{children}</BoxStyled>
    </Modal>
  );
};
