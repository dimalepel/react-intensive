import type { TodoDTO } from "../model/Todo";

// Получение todo по Id пользователя
export async function fetchTodosByUserId(userId: string | undefined): Promise<TodoDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}