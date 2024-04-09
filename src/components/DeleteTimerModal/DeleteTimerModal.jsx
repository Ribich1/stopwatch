import { ModalDialog } from 'components/Modal/Modal';

export const DeleteTimerModal = ({ onSubmit, open, onClose }) => {
  return (
    <ModalDialog open={open} onClose={onClose}>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
      <button type="button" onClick={onSubmit}>Delete</button>
    </ModalDialog>
  );
};
