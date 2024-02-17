import {Outlet} from 'react-router-dom';
import {AppLink} from '@/shared/ui/AppLink';
import {Header} from '@/widgets/Header';
import {getRouteEventCreate} from '@/shared/consts/routes';
import {EventsIntroSection} from './EventsIntroSection/EventsIntroSection';
import {NewEventsSection} from './NewEventsSection/NewEventsSection';
import {FindEventSection} from './FindEventSection/FindEventSection';

const EventsPage = () => {
  return (
    <>
      <Outlet />
      <Header>
        <AppLink to={getRouteEventCreate()} variant="primary">
          New Event
        </AppLink>
      </Header>

      <main>
        <EventsIntroSection />
        <NewEventsSection />
        <FindEventSection />
      </main>
    </>
  );
};

export default EventsPage;
