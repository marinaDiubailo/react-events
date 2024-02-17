import {memo, useRef, FormEvent} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button} from '@/shared/ui/Button';
import cls from './FindEventForm.module.scss';

interface FindEventFormProps {
  className?: string;
}

export const FindEventForm = memo((props: FindEventFormProps) => {
  const {className} = props;

  const searchElement = useRef(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className={classNames(cls['search-form'], {}, [className])}
      onSubmit={handleSubmit}
    >
      <input type="search" placeholder="Search events" ref={searchElement} />
      <Button variant="search">Search</Button>
    </form>
  );
});
