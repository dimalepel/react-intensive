import styles from './Footer.module.css'

export default function Footer() {
    return (<footer className={styles.footer}>
        <div className={'container'}>
            <p className={styles.footer__text}>&copy; Copyright 2025</p>
            <a className={styles.footer__link} href="https://github.com/dimalepel/react-intensive" target={'_blank'}>Github Repo</a>
        </div>
    </footer>)
}