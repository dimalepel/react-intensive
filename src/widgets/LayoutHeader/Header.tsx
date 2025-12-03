import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import {ThemeSwitcher} from "../../features/ThemeSwitcher/ui/ThemeSwitcher.tsx";
import React from "react";

export default function Header() {
    const linksList = [
        {
            label: 'React Documentation',
            url: 'https://react.dev/'
        },
        {
            label: 'Api Documentation',
            url: 'https://jsonplaceholder.typicode.com/guide/'
        }
    ];

    return (
        <header className={styles.header}>
            <div className={'container'}>
                <p className={styles.header__title}>
                    <img className={styles.header__logo} src={logo} alt="React Logo"/>
                    React Intensive
                </p>
                <div className={styles.header__navigation}>
                    {linksList.map((link, index) => (
                        <React.Fragment key={index}>
                            <a href={ link.url } target={'_blank'}>{ link.label }</a>
                        </React.Fragment>
                    ))}
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}