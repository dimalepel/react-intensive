import styles from './Button.module.css'
import type {MouseEventHandler, PropsWithChildren} from "react";

interface ButtonProps extends PropsWithChildren {
    onClick: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

export default function Button({onClick, children, className} : ButtonProps) {
    return (
        <button className={className ?? styles.button} onClick={onClick} type="button">
            {children}
        </button>
    )
}