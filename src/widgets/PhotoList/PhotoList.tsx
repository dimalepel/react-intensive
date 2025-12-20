import type { PhotoDTO } from "../../entities/photo/model/types.ts";
import styles from './PhotoList.module.css';
import ItemList from "../../shared/ui/ItemList/ItemList.tsx"
import PhotoCard from "../../entities/photo/ui/PhotoCard.tsx";

interface PhotoListProps {
    photos: PhotoDTO[]
}

export default function PhotoList({ photos }: PhotoListProps) {
    return (
        <ItemList
            items={photos}
            getKey={photos => photos.id}
            className={styles['photo-list']}
            renderItem={photo => (
                <PhotoCard photo={photo}/>
            )}
        />
    )
}