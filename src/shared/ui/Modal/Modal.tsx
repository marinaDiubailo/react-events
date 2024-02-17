import {ReactNode, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const {className, children, onClose} = props;

  const modalRootElement = document.getElementById('modal');
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // Using useEffect to sync the Modal component with the DOM Dialog API
    // This code will open the native <dialog> via it's built-in API whenever the <Modal> component is rendered
    const modal = dialog.current;
    modal?.showModal();

    return () => {
      modal?.close(); // needed to avoid error being thrown
    };
  }, []);

  return modalRootElement
    ? createPortal(
        <dialog
          className={classNames(cls.modal, {}, [className])}
          ref={dialog}
          onClose={onClose}
        >
          {children}
        </dialog>,
        modalRootElement,
      )
    : null;
};
