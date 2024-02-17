import {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {SectionHeading} from '@/shared/ui/SectionHeading';
import meetupImg from '@/shared/assets/meetup.jpg';
import {AppLink} from '@/shared/ui/AppLink';
import {getRouteEventCreate} from '@/shared/consts/routes';
import cls from './EventsIntroSection.module.scss';

interface EventsIntroSectionProps {
  className?: string;
}

export const EventsIntroSection = memo((props: EventsIntroSectionProps) => {
  const {className} = props;

  return (
    <section
      className={classNames(cls.overview, {}, [className])}
      id="overview-section"
      style={{backgroundImage: `url(${meetupImg})`}}
    >
      <SectionHeading variant="overview">
        Connect with amazing people <br />
        or <strong>find a new passion</strong>
      </SectionHeading>
      <p className={cls['overview-text']}>
        Anyone can organize and join events on React Event!
      </p>
      <AppLink
        to={getRouteEventCreate()}
        variant="primary"
        className={cls['overview-text']}
      >
        Create your first event
      </AppLink>
    </section>
  );
});
