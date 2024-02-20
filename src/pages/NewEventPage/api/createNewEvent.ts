import type { EventType } from '@/entities/Event';
import { $api } from '@/shared/api/api';
import { getRouteEvents } from '@/shared/consts/routes';

type ResponseType = {
  event: EventType;
};

export async function createNewEvent(event: {
  [k: string]: FormDataEntryValue;
}) {
  try {
    const { data } = await $api.post<ResponseType>(getRouteEvents(), {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'content-еype': 'application/json',
      },
    });

    return data.event;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('An error occurred while creating the event');
    }
  }
}
