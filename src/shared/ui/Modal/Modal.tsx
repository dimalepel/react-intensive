import styles from './Modal.module.css'
import type {ReactNode} from "react";
import Button from "../Button/Button.tsx";
import {createPortal} from "react-dom";

interface ModalProps {
    children: ReactNode
}

interface ModalCloseButtonProps {
    onClose: () => void;
}

function Modal({children}: ModalProps) {
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

function ModalHeader({children} : ModalProps) {
    return (
        <header className={styles.modal__header}>
            {children}
        </header>
    )
}

function ModalTitle({children} : ModalProps) {
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

function ModalBody({children} : ModalProps) {
    return (
        <main className={styles.modal__body}>{children}</main>
    )
}

function ModalFooter({children} : ModalProps) {
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