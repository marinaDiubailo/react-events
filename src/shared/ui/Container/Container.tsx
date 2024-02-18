import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = memo((props: ContainerProps) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.container, {}, [className])}>{children}</div>
  );
});
