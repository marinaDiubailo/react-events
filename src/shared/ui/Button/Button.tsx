import {ButtonHTMLAttributes, memo, ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'ghost' | 'search';
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {className, variant = 'primary', children, ...otherProps} = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
