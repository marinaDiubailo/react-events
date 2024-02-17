import {memo, ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';

import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  variant?: 'primary' | 'nav' | 'ghost';
}

export const AppLink = memo((props: AppLinkProps) => {
  const {className, children, to, variant = 'ghost', ...otherProps} = props;

  return (
    <Link
      to={to}
      className={classNames(cls.link, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
