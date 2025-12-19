import { useParams } from "react-router-dom"
import TodoList from "../widgets/TodoList/TodoList";
import Loader from "../shared/ui/Loader/Loader.tsx";
import {useGetTodosByUserIdQuery} from "../entities/todo/api/todoApi.ts";

export default function UserTodosPage() {
    const { id: userId } = useParams<{id: string}>()
    const { data: todos, isLoading, isError } = useGetTodosByUserIdQuery(String(userId))

    if (isError) {
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