import {memo, InputHTMLAttributes} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  className?: string;
  label?: string;
  id: string;
}

export const Input = memo((props: InputProps) => {
  const {className, defaultValue, type = 'text', name, label, id} = props;

  return (
    <div className={classNames(cls['input-wrapper'], {}, [className])}>
      <label className={cls.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={cls.input}
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
});
