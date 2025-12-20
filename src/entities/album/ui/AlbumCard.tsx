import { Link } from 'react-router-dom'
import styles from './AlbumCard.module.css'
import type {AlbumDTO} from "../model/types.ts";

type AlbumCardProps = {
    album: AlbumDTO
} 

export default function AlbumCard({ album }: AlbumCardProps) {
    const imageUrl = `https://loremflickr.com/400/400/?random=${album.id}`

    return (
        <li className={styles['album-card']}>
            <Link to={`/albums/${album.id}/photos`}>
                <div className={styles['album-card__thumb-wrapper']}>
                    <img className={styles['album-card__thumb']} src={imageUrl} alt={ album.title } />
                </div>
                <p>{ album.title }</p>
            </Link>            
        </li>
    )
}