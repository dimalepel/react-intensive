import { Link } from 'react-router-dom'
import styles from './AlbumCard.module.css'

interface AlbumCardProps {
    id: number,
    title: string
} 

export default function AlbumCard({ id, title }: AlbumCardProps) {
    const imageUrl = `https://loremflickr.com/400/400/?random=${id}`

    return (
        <li className={styles['album-card']}>
            <Link to={`/albums/${id}/photos`}>
                <div className={styles['album-card__thumb-wrapper']}>
                    <img className={styles['album-card__thumb']} src={imageUrl} alt={ title } />
                </div>
                <p>{ title }</p>
            </Link>            
        </li>
    )
}