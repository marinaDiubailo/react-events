import { memo, FormEvent, useRef, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { Loader } from '@/shared/ui/Loader/Loader';
import { ErrorBlock } from '@/shared/ui/ErrorBlock';
import { EventList } from '@/entities/Event';
import { fetchEvents } from '../../api/fetchEvents';
import cls from './FindEventSection.module.scss';

interface FindEventSectionProps {
  className?: string;
}

export const FindEventSection = memo((props: FindEventSectionProps) => {
  const { className } = props;
  const searchElement = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['events', { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents({ searchTerm, signal }),
    enabled: searchTerm !== undefined,
  });

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchElement.current) {
      setSearchTerm(searchElement.current.value);
    }
  }, []);

  let content = <span>Please enter a search term and to find events.</span>;

  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <ErrorBlock message={error.message} />;
  }

  if (data) {
    content = <EventList data={data} />;
  }

  return (
    <section
      className={classNames('', {}, [className])}
      id="find-event-section"
    >
      <Container>
        <SectionHeading>Find your next event!</SectionHeading>
        <form
          className={classNames(cls['search-form'], {}, [className])}
          onSubmit={handleSubmit}
        >
          <input
            ref={searchElement}
            type="search"
            placeholder="Search events"
          />
          <Button variant="search">Search</Button>
        </form>
        {content}
      </Container>
    </section>
  );
});
