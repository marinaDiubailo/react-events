import type { EventType } from '@/entities/Event';
import { $api } from '@/shared/api/api';
import { getRouteEvents } from '@/shared/consts/routes';

type ResponseType = {
  event: EventType;
};

type RequestType = {
  event: Omit<EventType, 'id'>;
};

export async function createNewEvent(eventData: RequestType) {
  try {
    const { data } = await $api.post<ResponseType>(getRouteEvents(), eventData);
    console.log(eventData);
    return data.event;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('An error occurred while creating the event');
    }
  }
}
