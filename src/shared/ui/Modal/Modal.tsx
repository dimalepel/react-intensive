import styles from './Modal.module.css'
import type {MouseEventHandler, PropsWithChildren} from "react";
import Button from "../Button/Button.tsx";
import {createPortal} from "react-dom";

interface ModalCloseButtonProps {
    onClose: MouseEventHandler<HTMLButtonElement>;
}

function Modal({children}: PropsWithChildren) {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return createPortal(
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>,
        modalRoot
    )
}

function ModalHeader({children} : PropsWithChildren) {
    return (
        <header className={styles.modal__header}>
            {children}
        </header>
    )
}

function ModalTitle({children} : PropsWithChildren) {
    return (
        <h3 className={styles.modal__title}>
            {children}
        </h3>
    )
}

function ModalCloseButton({onClose} : ModalCloseButtonProps) {
    return (
        <Button onClick={onClose} className={styles.modal__close}>
            ✕
        </Button>
    )
}

function ModalBody({children} : PropsWithChildren) {
    return (
        <main className={styles.modal__body}>{children}</main>
    )
}

function ModalFooter({children} : PropsWithChildren) {
    return (
        <div className={styles.modal__footer}>{children}</div>
    )
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;