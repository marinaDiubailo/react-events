import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorBlock } from '@/shared/ui/ErrorBlock';
import { EventType } from '@/entities/Event/model/types/event';
import { EventItem } from '@/entities/Event';
import cls from './NewEventsSection.module.scss';

interface NewEventsSectionProps {
  className?: string;
}

export const NewEventsSection = memo((props: NewEventsSectionProps) => {
  const { className } = props;

  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        // error.code = response.status;
        // error.info = await response.json();
        throw error;
      }

      const { events } = await response.json();

      return events;
    }

    fetchEvents()
      .then((events) => {
        setData(events);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <Loader />;
  }

  if (error) {
    content = (
      <ErrorBlock title="An error occurred" message="Failed to fetch events" />
    );
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
      <SectionHeading>Recently added events</SectionHeading>
      {content}
    </section>
  );
});
