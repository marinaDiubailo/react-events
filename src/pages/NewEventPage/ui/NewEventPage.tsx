import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { EventForm } from '@/features/EventForm';
import { getRouteEvents } from '@/shared/consts/routes';
import { createNewEvent } from '../api/createNewEvent';
import { Modal } from '@/shared/ui/Modal';

const NewEventPage = () => {
  const navigate = useNavigate();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: createNewEvent,
  });

  const onSubmit = (formData: any) => {
    mutate({ event: formData });
  };

  return (
    <Modal onClose={() => navigate(getRouteEvents())}>
      <EventForm
        onSubmit={onSubmit}
        isPending={isPending}
        isError={isError}
        errorMessage={error?.message}
      />
    </Modal>
  );
};

export default NewEventPage;
