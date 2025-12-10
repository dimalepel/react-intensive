import type { PhotoDTO } from "../model/Photo";

// Получение всех фото по Id альбому
export async function fetchPhotosByAlbumId(albumId: string | undefined): Promise<PhotoDTO[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    console.log(res)

    if (!res.ok) throw new Error('Ошибка сети');

    return res.json();
}