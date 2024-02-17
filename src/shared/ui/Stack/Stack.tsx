import {memo, DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import cls from './Stack.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlewWrap = 'nowrap' | 'wrap';
type FlexGap = '0.5' | '1' | '1.5' | '2';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const justifyClasses: Record<FlexJustify, string> = {
  start: cls['justify-start'],
  end: cls['justify-end'],
  center: cls['justify-center'],
  between: cls['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls['align-start'],
  end: cls['align-end'],
  center: cls['align-center'],
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls['direction-row'],
  column: cls['direction-column'],
};

const gapClasses: Record<FlexGap, string> = {
  0.5: cls['gap-sm'],
  1: cls['gap-md'],
  1.5: cls['gap-lg'],
  2: cls['gap-xl'],
};

interface StackProps extends DivProps {
  className?: string;
  children?: ReactNode;
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  gap?: FlexGap;
  wrap?: FlewWrap;
  fullHeight?: boolean;
}

export const Stack = memo((props: StackProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    wrap = 'nowrap',
    fullHeight,
    ...otherProps
  } = props;

  const additionalClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    cls[wrap],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls['full-height']]: fullHeight,
  };

  return (
    <div
      className={classNames(cls.flex, mods, additionalClasses)}
      {...otherProps}
    >
      {children}
    </div>
  );
});
