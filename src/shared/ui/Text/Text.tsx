import {memo, ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  children: ReactNode;
  size?: 'sm' | 'normal';
}

export const Text = memo((props: TextProps) => {
  const {className, children, size = 'normal'} = props;

  return (
    <span className={classNames(cls.text, {}, [className, cls[size]])}>
      {children}
    </span>
  );
});
