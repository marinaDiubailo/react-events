import type { EventType } from '@/entities/Event';
import { $api } from '@/shared/api/api';
import { getRouteEvents } from '@/shared/consts/routes';

type ResponseType = {
  events: EventType[];
};

export async function fetchEvents({
  signal,
  searchTerm,
}: {
  signal: AbortSignal;
  searchTerm: string | undefined;
}) {
  try {
    const { data } = await $api.get<ResponseType>(getRouteEvents(), {
      signal,
      params: {
        search: searchTerm,
      },
    });
    return data.events;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('An error occurred while fetching the events.');
    }
  }
}
