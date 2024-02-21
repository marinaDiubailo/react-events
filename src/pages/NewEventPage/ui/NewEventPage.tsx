import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/shared/client/queryClient';
import { EventForm } from '@/features/EventForm';
import { getRouteEvents } from '@/shared/consts/routes';
import { createNewEvent } from '../api/createNewEvent';
import { Modal } from '@/shared/ui/Modal';
import { EventType } from '@/entities/Event';

const NewEventPage = () => {
  const navigate = useNavigate();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
      navigate(getRouteEvents());
    },
  });

  const onSubmit = (formData: Omit<EventType, 'id'>) => {
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
