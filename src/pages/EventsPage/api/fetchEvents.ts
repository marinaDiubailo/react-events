import { EventType } from '@/entities/Event/model/types/event';
import { $api } from '@/shared/api/api';
import { getRouteEvents } from '@/shared/consts/routes';

type ResponseType = {
  events: EventType[];
};

export async function fetchEvents() {
  try {
    const { data } = await $api.get<ResponseType>(getRouteEvents());
    return data.events;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('An error occurred while fetching the events.');
    }
  }
}
