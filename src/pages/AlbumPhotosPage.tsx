import { useParams } from "react-router-dom"
import PhotoList from "../widgets/PhotoList/PhotoList";
import Loader from "../shared/ui/Loader/Loader.tsx";
import {useGetPhotosByAlbumIdQuery} from "../entities/photo/api/photosApi.ts";

export default function AlbumPhotosPage() {
    const { albumId } = useParams<{albumId: string}>()
    //const { data: photos, isLoading, error } = useFetch<PhotoDTO[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    const { data: photos, isLoading, error } = useGetPhotosByAlbumIdQuery(String(albumId))

    if (error) {
        return <>
            <h1>Photos</h1>
            <p>Something went wrong =(</p>
        </>;
    }
    
    return  <>
                <h1>Photos</h1>

                {isLoading ? <Loader/> : <PhotoList photos={photos ?? []} />}
            </>
}