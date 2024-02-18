import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { EventType } from '../../model/types/event';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteEventDetails } from '@/shared/consts/routes';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './EventItem.module.scss';

interface EventItemProps {
  className?: string;
  event: EventType;
}

export const EventItem = memo((props: EventItemProps) => {
  const { className, event } = props;

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className={classNames(cls.event, {}, [className])}>
      <img src={`http://localhost:8080/${event.image}`} alt={event.title} />
      <Stack
        fullHeight
        direction="column"
        justify="between"
        align="center"
        padding="1"
        gap="2"
      >
        <Stack direction="column" gap="0.5" align="center">
          <h3>{event.title}</h3>
          <Text size="sm">{formattedDate}</Text>
          <Text>{event.location}</Text>
        </Stack>
        <AppLink to={getRouteEventDetails(event.id)} variant="primary">
          View Details
        </AppLink>
      </Stack>
    </article>
  );
});
