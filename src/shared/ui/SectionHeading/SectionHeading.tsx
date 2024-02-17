import {memo, ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './SectionHeading.module.scss';

interface SectionHeadingProps {
  className?: string;
  children: ReactNode;
  variant?: 'primary' | 'overview';
}

export const SectionHeading = memo((props: SectionHeadingProps) => {
  const {className, variant = 'primary', children} = props;

  return (
    <h2
      className={classNames(cls['section-heading'], {}, [
        className,
        cls[variant],
      ])}
    >
      {children}
    </h2>
  );
});
