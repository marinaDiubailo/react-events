import {RouterProvider, createBrowserRouter, Navigate} from 'react-router-dom';
import {
  getRouteMain,
  getRouteEvents,
  getRouteEventDetails,
  getRouteEventEdit,
  getRouteEventCreate,
} from '@/shared/consts/routes';
import {NewEventPage} from '@/pages/NewEventPage';
import {EditEventPage} from '@/pages/EditEventPage';
import {EventDetailsPage} from '@/pages/EventDetailsPage';
import {EventsPage} from '@/pages/EventsPage';

const router = createBrowserRouter([
  {
    path: getRouteMain(),
    element: <Navigate to={getRouteEvents()} />,
  },
  {
    path: getRouteEvents(),
    element: <EventsPage />,
    children: [
      {
        path: getRouteEventCreate(),
        element: <NewEventPage />,
      },
    ],
  },
  {
    path: getRouteEventDetails(':id'),
    element: <EventDetailsPage />,
    children: [
      {
        path: getRouteEventEdit(':id'),
        element: <EditEventPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
