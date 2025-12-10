import {NavLink} from "react-router-dom";
import styles from './UserTabs.module.css'


interface Tab {
    to: string,
    label: string
}

interface TabsProps {
    tabs: Tab[]
}

export default function UserTabs({ tabs } : TabsProps) {
    return (
        <nav className={styles['user-tabs']}>
            {tabs.map((t) => (
                <NavLink
                    key={t.to}
                    to={t.to}
                    className={({ isActive }) => (isActive ? `${styles.tab} ${styles.active}` : `${styles.tab}`)}
                >
                    {t.label}
                </NavLink>
            ))}
        </nav>
    )
}