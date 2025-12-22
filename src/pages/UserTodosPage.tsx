import { useParams } from "react-router-dom"
import type { TodoDTO } from "../entities/todo/model/Todo";
import TodoList from "../widgets/TodoList/TodoList";
import {useFetch} from "../shared/api/useFetch.ts";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function UserTodosPage() {
    const { id } = useParams<{id: string}>()
    const { data: todos, isLoading, error } = useFetch<TodoDTO[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)

    if (error) {
        return <>
            <h1>ToDo list</h1>
            <p>Something went wrong =(</p>
        </>;
    }
    
    return (
        <>
            <h1>ToDo list</h1>

            {isLoading ? <Loader/> : <TodoList todos={todos ?? []} />}
        </>
    )
}