import {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ImagePicker.module.scss';

type ImageType = {
  path: string;
  caption: string;
};

interface ImagePickerProps {
  className?: string;
  images: ImageType[];
  selectedImage: string;
  onSelect: (imagePath: string) => void;
}

export const ImagePicker = memo((props: ImagePickerProps) => {
  const {className, images, selectedImage, onSelect} = props;

  return (
    <div className={classNames(cls['image-picker'], {}, [className])}>
      <span>Select an image</span>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            className={classNames(cls['image-picker-item'], {
              [cls.selected]: selectedImage === image.path,
            })}
          >
            <img
              src={`http://localhost:3000/${image.path}`}
              alt={image.caption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
});
