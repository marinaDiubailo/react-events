import {memo, ReactNode} from 'react';
import cls from './Header.module.scss';

interface HeaderProps {
  children: ReactNode;
}

export const Header = memo((props: HeaderProps) => {
  const {children} = props;

  return (
    <>
      <div className={cls['main-header-loading']}></div>
      <header className={cls['main-header']}>
        <div className={cls['header-title']}>
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
});
