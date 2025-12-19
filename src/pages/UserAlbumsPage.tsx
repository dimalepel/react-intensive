import {useParams} from "react-router-dom";
import AlbumList from "../widgets/AlbumList/AlbumList";
import Loader from "../shared/ui/Loader/Loader.tsx";
import {useGetAlbumsByUserIdQuery} from "../entities/album/api/albumsApi.ts";

export default function UserAlbumsPage() {
    const { id: userId } = useParams<{id: string}>()
    const { data: albums, isLoading, isError } = useGetAlbumsByUserIdQuery(String(userId))

    if (isError) {
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