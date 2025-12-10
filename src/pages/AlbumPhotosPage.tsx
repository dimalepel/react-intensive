import { useParams } from "react-router-dom"
import type { PhotoDTO } from "../entities/photo/model/Photo";
import PhotoList from "../widgets/PhotoList/PhotoList";
import {useFetch} from "../features/PostList/model/hooks/useFetch.ts";
import Loader from "../shared/ui/Loader/Loader.tsx";

export default function AlbumPhotosPage() {
    const { albumId } = useParams<{albumId: string}>()
    const { data: photos, isLoading, error } = useFetch<PhotoDTO[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)

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