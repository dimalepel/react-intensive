import styles from './Button.module.css'
import type {ReactNode} from "react";

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}

export default function Button({ onClick, children } : ButtonProps) {
    return (
        <button className={styles.button} onClick={onClick} type={'button'}>
            { children }
        </button>
    )
}