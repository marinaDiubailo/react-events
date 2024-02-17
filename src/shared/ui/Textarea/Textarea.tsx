import {memo, TextareaHTMLAttributes} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  className?: string;
  label?: string;
  id: string;
}

export const Textarea = memo((props: TextareaProps) => {
  const {className, label, id, name, defaultValue} = props;

  return (
    <div className={classNames(cls['textarea-wrapper'], {}, [className])}>
      <label className={cls.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className={cls.textarea}
        name={name}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
});
