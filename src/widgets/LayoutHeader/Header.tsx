import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import {ThemeSwitcher} from "../../features/ThemeSwitcher/ui/ThemeSwitcher.tsx";
import UserTabs from "../UserTabs/UserTabs.tsx";
import {useUser} from "../../shared/lib/user/useUser.ts";
import {NavLink} from "react-router-dom";

export default function Header() {
    const { userId } = useUser();

    const tabs = userId
        ? [
            { to: `/posts`, label: "All Posts" },
            { to: `/users/${userId}/posts`, label: "User Posts" },
            { to: `/users/${userId}/albums`, label: "User Albums" },
            { to: `/users/${userId}/todos`, label: "User Todos" },
        ]
        : [];

    return (
        <header className={styles.header}>
            <div className={'container'}>
                <NavLink to={'/'}>
                    <p className={styles.header__title}>
                        <img className={styles.header__logo} src={logo} alt="React Logo"/>
                        React Intensive
                    </p>
                </NavLink>
                <div className={styles.header__navigation}>
                    <UserTabs tabs={tabs}/>

                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}