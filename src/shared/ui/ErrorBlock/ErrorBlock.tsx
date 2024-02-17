import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ErrorBlock.module.scss';

interface ErrorBlockProps {
    className?: string;
    title: string;
    message: string;
}

export const ErrorBlock = memo((props: ErrorBlockProps) => {
    const { className, title, message } = props;

    return (
        <div className={classNames(cls['error-block '], {}, [className])}>
            <div className={cls['error-block-icon']}>!</div>
            <div className="error-block-text">
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        </div>
    );
});
