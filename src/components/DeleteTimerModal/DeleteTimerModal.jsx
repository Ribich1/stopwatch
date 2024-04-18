import { ModalDialog } from 'components/Modal/Modal';
import { Button, DelBtnWrapper, Title } from './DeleteTimerModal.styled';

export const DeleteTimerModal = ({ onSubmit, open, onClose }) => {
  return (
    <ModalDialog open={open} onClose={onClose}>
      <Title>Are You sure?</Title>
      <DelBtnWrapper>        
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button color='red' type="button" onClick={onSubmit}>
          Delete
        </Button>
      </DelBtnWrapper>
    </ModalDialog>
  );
};
