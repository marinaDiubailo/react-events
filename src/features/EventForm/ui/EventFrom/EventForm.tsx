import {FormEvent, memo, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button} from '@/shared/ui/Button';
import {AppLink} from '@/shared/ui/AppLink';
import {Stack} from '@/shared/ui/Stack';
import {Input} from '@/shared/ui/Input';
import {Textarea} from '@/shared/ui/Textarea';
import cls from './EventForm.module.scss';
import {ImagePicker} from '@/features/ImagePicker';

interface EventFormProps {
  className?: string;
  inputData?: any;
  onSubmit: () => void;
}

export const EventForm = memo((props: EventFormProps) => {
  const {className, inputData, onSubmit} = props;

  const [selectedImage, setSelectedImage] = useState(inputData?.image);

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    //onSubmit({...data, image: selectedImage});
  };

  return (
    <form
      className={classNames(cls['new-event-form'], {}, [className])}
      onSubmit={handleSubmit}
    >
      <Input
        label="Title"
        type="text"
        id="title"
        name="title"
        defaultValue={inputData?.title ?? ''}
      />

      <ImagePicker
        images={[]}
        onSelect={handleSelectImage}
        selectedImage={selectedImage}
      />

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

      <Stack justify="end" gap="2">
        <AppLink to="../">Cancel</AppLink>
        <Button type="submit">Create</Button>
      </Stack>
    </form>
  );
});
