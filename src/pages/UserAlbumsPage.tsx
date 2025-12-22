import type { AlbumDTO } from "../entities/album/model/Album";
import {useParams} from "react-router-dom";
import AlbumList from "../widgets/AlbumList/AlbumList";
import {useFetch} from "../shared/api/useFetch.ts";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function UserAlbumsPage() {
    const { id } = useParams<{id: string}>()
    const { data: albums, isLoading, error } = useFetch<AlbumDTO[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)

    if (error) {
        return <>
                    <h1>All Albums by User ID</h1>
                    <p>Something went wrong =(</p>
                </>;
    }

    return (
        <>
            <h1>All Albums by User ID</h1>

            {isLoading ? <Loader/> : <AlbumList albums={albums ?? []} />}
        </>
    )
}