import styles from './PostCard.module.css'

export default function PostCard(props: { title: string, content: string }) {
    return (<li className={styles['post-card']}>
        <h2 className={styles['post-card__title']}>{ props.title }</h2>
        <p>{ props.content }</p>
    </li>)
}