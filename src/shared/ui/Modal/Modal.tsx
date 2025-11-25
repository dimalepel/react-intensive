import styles from './Modal.module.css'
import type {ReactNode} from "react";

interface ModalProps {
    onClose: () => void;
    children: ReactNode
}

export default function Modal({ onClose, children }: ModalProps) {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__title}>
                        О проекте
                    </h3>
                    <button className={styles.modal__close} onClick={onClose} type="button">
                        ✕
                    </button>
                </div>

                <div className={styles.modal__body}>{children}</div>
            </div>
        </div>

    )
}