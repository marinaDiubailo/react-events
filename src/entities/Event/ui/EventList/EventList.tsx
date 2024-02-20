import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { EventType } from '../../model/types/event';
import { EventItem } from '../EventItem/EventItem';
import cls from './EventList.module.scss';

interface EventListProps {
  className?: string;
  data: EventType[];
}

export const EventList = memo((props: EventListProps) => {
  const { className, data } = props;

  return (
    <ul className={classNames(cls['events-list'], {}, [className])}>
      {data.map((event) => (
        <li key={event.id}>
          <EventItem event={event} />
        </li>
      ))}
    </ul>
  );
});
