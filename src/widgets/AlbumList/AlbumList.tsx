import type { AlbumDTO } from "../../entities/album/model/types.ts";
import AlbumCard from "../../entities/album/ui/AlbumCard.tsx"
import styles from './AlbumList.module.css'
import ItemList from "../../shared/ui/ItemList/ItemList.tsx";

interface AlbumListProps {
    albums: AlbumDTO[]
}

export default function AlbumList({ albums }: AlbumListProps) {
    return (
        <ItemList
            items={albums}
            getKey={album => album.id}
            className={styles["album-list"]}
            renderItem={album => (
                <AlbumCard album={album} />
            )}
        />
    );
}