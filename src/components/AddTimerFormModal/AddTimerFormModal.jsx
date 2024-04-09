import { AddTimerForm } from 'components/AddTimerForm/AddTimerForm';
import { ModalDialog } from 'components/Modal/Modal';

export const AddTimerFormModal = ({ onSubmit, ...rest }) => {
  return (
    <ModalDialog {...rest}>
      <AddTimerForm onSubmit={onSubmit} />
    </ModalDialog>
  );
};
