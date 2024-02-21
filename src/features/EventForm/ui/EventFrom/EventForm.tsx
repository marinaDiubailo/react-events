import { FormEvent, memo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { Stack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { ImagePicker } from '@/features/ImagePicker';
import { ErrorBlock } from '@/shared/ui/ErrorBlock';
import { EventType } from '@/entities/Event/model/types/event';
import { Text } from '@/shared/ui/Text';
import { fetchSelectableImages } from '../../api/fetchSelectableImages';
import cls from './EventForm.module.scss';

interface EventFormProps {
  className?: string;
  inputData?: EventType;
  isPending?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onSubmit: (formData: Omit<EventType, 'id'>) => void;
}

export const EventForm = memo((props: EventFormProps) => {
  const {
    className,
    inputData,
    onSubmit,
    isPending = false,
    isError = false,
    errorMessage,
  } = props;
  const [selectedImage, setSelectedImage] = useState(inputData?.image);

  const {
    data,
    isPending: isImagesPending,
    isError: isImagesError,
  } = useQuery({
    queryKey: ['events-images'],
    queryFn: fetchSelectableImages,
  });

  const handleSelectImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSubmit({ ...data, image: selectedImage } as Omit<EventType, 'id'>);
  };

  const controls = (
    <Stack justify="end" gap="2">
      <AppLink to="../">Cancel</AppLink>
      <Button type="submit">Create</Button>
    </Stack>
  );

  return (
    <form
      className={classNames(cls['new-event-form'], {}, [className])}
      onSubmit={handleSubmit}
    >
      {isPending && <Text>Submitting...</Text>}
      <Input
        label="Title"
        type="text"
        id="title"
        name="title"
        defaultValue={inputData?.title ?? ''}
      />

      {isImagesPending && <Text>Loading selectable images...</Text>}
      {isImagesError && (
        <ErrorBlock
          message="Please try again"
          title="Failed to load selectable images"
        />
      )}
      {data && (
        <ImagePicker
          images={data}
          onSelect={handleSelectImage}
          selectedImage={selectedImage}
        />
      )}

      <Textarea
        label="Description"
        id="description"
        name="description"
        defaultValue={inputData?.description ?? ''}
      />

      <Stack gap="2">
        <Input
          label="Date"
          type="date"
          id="date"
          name="date"
          defaultValue={inputData?.date ?? ''}
        />

        <Input
          label="Time"
          type="time"
          id="time"
          name="time"
          defaultValue={inputData?.time ?? ''}
        />
      </Stack>

      <Input
        label="Location"
        id="location"
        name="location"
        defaultValue={inputData?.location ?? ''}
      />

      {!isPending && controls}
      {isError && errorMessage && <ErrorBlock message={errorMessage} />}
    </form>
  );
});
