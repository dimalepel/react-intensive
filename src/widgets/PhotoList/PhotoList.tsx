import { useMemo } from "react";
import type { PhotoDTO } from "../../entities/photo/model/Photo";
import styles from './PhotoList.module.css'

interface PhotoListProps {
    photos: PhotoDTO[]
}

function getSizeFromUrl(url: string) {
    const match = url.match(/\/(\d+)(?:\/|$)/);
    return match ? parseInt(match[1]) : null;
}

function getColorFromUrl(url: string) {
    if (!url) return null;
    
    const parts = url.split('/');
    
    const colorPart = parts[parts.length - 1];
    
    const hexColorRegex = /^([0-9A-F]{3}){1,2}$/i;
    
    if (hexColorRegex.test(colorPart)) {
        if (colorPart.length === 3) {
            return colorPart.split('').map(c => c + c).join('');
        }
        return colorPart;
    }
    
    return null;
}

export default function PhotoList({ photos }: PhotoListProps) {
    const photoThumbs = useMemo(() => {
        return photos.map(photo => {
            const {id, title, thumbnailUrl} = photo;
            const thumbnailUrlSize = getSizeFromUrl(thumbnailUrl)
            const color = getColorFromUrl(thumbnailUrl)
            const imageUrl = `https://dummyimage.com/${thumbnailUrlSize}x${thumbnailUrlSize}/${color}`

            return (
                <div key={id}  className={styles['photo-list__item-wrapper']}>
                    <img loading="lazy" className={styles['photo-list__item']} src={imageUrl} alt={title} />
                </div>
            )
        });
    }, [photos]);

    return (
        <div className={styles['photo-list']}>
            { photoThumbs }
        </div>
    )
}