import { useMemo } from "react";
import type { TodoDTO } from "../../entities/todo/model/Todo";
import styles from './TodoList.module.css'
import TodoCard from "../../entities/todo/ui/TodoCard";

interface TodoListProps {
    todos: TodoDTO[]
}

export default function TodoList({ todos }: TodoListProps) {
    const todoItems = useMemo(() => {
        return todos.map(todo => <TodoCard key={todo.id} todo={todo} />);
    }, [todos]);

    return (
        <ul className={styles['todo-list']}>
            { todoItems } 
        </ul>
    )
}