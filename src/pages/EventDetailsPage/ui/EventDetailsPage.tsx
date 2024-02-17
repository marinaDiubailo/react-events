import {Outlet} from 'react-router-dom';
import {getRouteEvents} from '@/shared/consts/routes';
import {AppLink} from '@/shared/ui/AppLink';
import {Button} from '@/shared/ui/Button';
import {Header} from '@/widgets/Header';

const EventDetailsPage = () => {
  return (
    <>
      <Outlet />
      <Header>
        <AppLink to={getRouteEvents()} variant="nav">
          View all Events
        </AppLink>
      </Header>
      <article id="event-details">
        <header>
          <h1>EVENT TITLE</h1>
          <nav>
            <Button>Delete</Button>
            <AppLink to="edit">Edit</AppLink>
          </nav>
        </header>
        <div id="event-details-content">
          <img src="" alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">EVENT LOCATION</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>DATE @ TIME</time>
            </div>
            <p id="event-details-description">EVENT DESCRIPTION</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default EventDetailsPage;
