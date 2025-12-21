import type { TodoDTO } from "../../entities/todo/model/types.ts";
import styles from './TodoList.module.css'
import TodoCard from "../../entities/todo/ui/TodoCard";
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

interface TodoListProps {
    todos: TodoDTO[]
}

export default function TodoList({ todos }: TodoListProps) {
    return (
        <ItemList
            items={todos}
            getKey={todo => todo.id}
            className={styles["todo-list"]}
            renderItem={todo => (
                <TodoCard todo={todo} />
            )}
        />
    )
}