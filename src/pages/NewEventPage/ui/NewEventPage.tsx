import {useNavigate} from 'react-router-dom';

import {EventForm} from '@/features/EventForm';
import {getRouteEvents} from '@/shared/consts/routes';
import {Modal} from '@/shared/ui/Modal';

const NewEventPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {};

  return (
    <Modal onClose={() => navigate(getRouteEvents())}>
      <EventForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default NewEventPage;
