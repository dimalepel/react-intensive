import type { AlbumDTO } from '../model/Album.ts';

// Получение альбомов по Id пользователя
export async function fetchAlbumsByUserId(postId: string | undefined): Promise<AlbumDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${postId}/albums`);

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}