import type { ImageType } from '@/features/ImagePicker';
import { $api } from '@/shared/api/api';
import { getRouteImages } from '@/shared/consts/routes';

type ResponseType = {
  images: ImageType[];
};

export async function fetchSelectableImages({
  signal,
}: {
  signal: AbortSignal;
}) {
  try {
    const { data } = await $api.get<ResponseType>(getRouteImages(), {
      signal,
    });
    return data.images;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('An error occurred while fetching the images.');
    }
  }
}
