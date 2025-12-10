import type { TodoDTO } from "../model/Todo";
import styles from './TodoCard.module.css'
import {useCallback, useEffect, useRef, useState} from "react";

interface TodoCardProps {
    todo: TodoDTO
}

export default function TodoCard({ todo }: TodoCardProps) {
    const [completed, setCompleted] = useState<boolean>(todo.completed)
    const prevCompletedRef = useRef<boolean | null>(null);

    useEffect(() => {
        prevCompletedRef.current = completed;
    }, [completed]);
    const prevCompleted = prevCompletedRef.current;

    const handleCheck = useCallback(() => {
        setCompleted(prev => !prev);
    }, [prevCompleted]);


    return <li className={styles['todo-list__item']}>
                <label className={styles['todo-list__label']} htmlFor={`item-${todo.id}`}>                        
                    <input 
                    className={styles['todo-list__input']} 
                    id={`item-${todo.id}`} 
                    type="checkbox" 
                    checked={completed}
                    onChange={handleCheck}
                    /> {todo.title}
                </label>                    
            </li>
}