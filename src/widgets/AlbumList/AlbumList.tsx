import type { AlbumDTO } from "../../entities/album/model/Album";
import AlbumCard from "../../entities/album/ui/AlbumCard.tsx"
import {useMemo} from "react";
import styles from './AlbumList.module.css'

interface AlbumListProps {
    albums: AlbumDTO[]
}

export default function AlbumList({ albums }: AlbumListProps) {
    const albumCard = useMemo(() => {
        return albums.map(album => (
            <AlbumCard id={album.id} title={album.title} key={album.id}/>
        ))
    }, [albums])

    return (
        <ul className={styles['album-list']}>
            { albumCard }
        </ul>
    )
}