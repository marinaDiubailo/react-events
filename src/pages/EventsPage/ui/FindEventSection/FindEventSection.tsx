import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SectionHeading } from '@/shared/ui/SectionHeading';
import { FindEventForm } from '@/features/FindEvent';
import { Container } from '@/shared/ui/Container';
//import cls from './FindEventSection.module.scss';

interface FindEventSectionProps {
  className?: string;
}

export const FindEventSection = memo((props: FindEventSectionProps) => {
  const { className } = props;

  return (
    <section
      className={classNames('', {}, [className])}
      id="find-event-section"
    >
      <Container>
        <SectionHeading>Find your next event!</SectionHeading>
        <FindEventForm />
        <span>Please enter a search term and to find events.</span>
      </Container>
    </section>
  );
});
