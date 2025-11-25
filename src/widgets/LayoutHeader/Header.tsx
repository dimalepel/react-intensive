import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export default function Header() {
    return (<header className={styles.header}>
        <div className={'container'}>
            <p className={styles.header__title}>
                <img className={styles.header__logo} src={logo} alt="React Logo"/>
                React Intensive
            </p>
            <div className={styles.header__navigation}>
                <a href="https://react.dev/" target={'_blank'}>React Documentation</a>
                <a href="https://jsonplaceholder.typicode.com/guide/" target={'_blank'}>Api Documentation</a>
            </div>
        </div>
    </header>)
}