import styles from './Button.module.css'
import type {ReactNode} from "react";

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
    className?: string
}

export default function Button({onClick, children, className} : ButtonProps) {
    return (
        <button className={className ?? styles.button} onClick={onClick} type="button">
            {children}
        </button>
    )
}