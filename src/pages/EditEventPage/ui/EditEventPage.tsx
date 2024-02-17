import {useNavigate} from 'react-router-dom';

import {EventForm} from '@/features/EventForm';
import {getRouteEvents} from '@/shared/consts/routes';
import {Modal} from '@/shared/ui/Modal';

const EditEventPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {};

  return (
    <Modal onClose={() => navigate(getRouteEvents())}>
      <EventForm onSubmit={onSubmit} inputData={null} />
    </Modal>
  );
};

export default EditEventPage;
