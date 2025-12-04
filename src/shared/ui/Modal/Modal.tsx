import styles from './Modal.module.css'
import type {ReactNode} from "react";
import Button from "../Button/Button.tsx";

interface ModalProps {
    children: ReactNode
}

interface ModalCloseButtonProps {
    onClose: () => void;
}

function Modal({children}: ModalProps) {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {children}
            </div>
        </div>

    )
}

function ModalHeader({children} : ModalProps) {
    return (
        <div className={styles.modal__header}>
            {children}
        </div>
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
        <div className={styles.modal__body}>{children}</div>
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