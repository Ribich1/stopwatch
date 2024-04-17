import { ModalDialog } from 'components/Modal/Modal';
import { Button, DelBtnWrapper } from './DeleteTimerModal.styled';

export const DeleteTimerModal = ({ onSubmit, open, onClose }) => {
  return (
    <ModalDialog open={open} onClose={onClose}>
      <DelBtnWrapper>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" onClick={onSubmit}>
          Delete
        </Button>
      </DelBtnWrapper>
    </ModalDialog>
  );
};
