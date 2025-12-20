import styles from './PhotoCard.module.css'
import type {PhotoDTO} from "../model/types.ts";

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

type PhotoCardProps = {
    photo: PhotoDTO
}

export default function PhotoCard({ photo }: PhotoCardProps) {
    const thumbnailUrlSize = getSizeFromUrl(photo.thumbnailUrl)
    const color = getColorFromUrl(photo.thumbnailUrl)
    const imageUrl = `https://dummyimage.com/${thumbnailUrlSize}x${thumbnailUrlSize}/${color}`

    return (
        <li className={styles['photo-list__item-wrapper']}>
            <img loading="lazy" className={styles['photo-list__item']} src={imageUrl} alt={photo.title} />
        </li>
    )
}