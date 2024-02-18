import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorBlock } from '@/shared/ui/ErrorBlock';
import { EventItem } from '@/entities/Event';
import { fetchEvents } from '../../api/fetchEvents';
import cls from './NewEventsSection.module.scss';
import { Container } from '@/shared/ui/Container';

interface NewEventsSectionProps {
  className?: string;
}

export const NewEventsSection = memo((props: NewEventsSectionProps) => {
  const { className } = props;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents(),
  });

  let content;

  if (isPending) {
    content = <Loader />;
  }

  if (isError) {
    content = <ErrorBlock title="An error occurred" message={error.message} />;
  }

  if (data) {
    content = (
      <ul className={cls['events-list']}>
        {data.map((event: any) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section
      className={classNames('', {}, [className])}
      id="new-events-section"
    >
      <Container>
        <SectionHeading>Recently added events</SectionHeading>
        {content}
      </Container>
    </section>
  );
});
