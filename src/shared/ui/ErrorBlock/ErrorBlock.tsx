import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorBlock.module.scss';
import { Stack } from '../Stack';

interface ErrorBlockProps {
  className?: string;
  title?: string;
  message: string;
}

export const ErrorBlock = memo((props: ErrorBlockProps) => {
  const { className, title = 'An error occured', message } = props;

  return (
    <Stack
      gap="2"
      padding="1"
      className={classNames(cls['error-block'], {}, [className])}
    >
      <div className={cls['error-block-icon']}>!</div>
      <Stack direction="column" gap="1" align="start">
        <h3>{title}</h3>
        <p>{message}</p>
      </Stack>
    </Stack>
  );
});
