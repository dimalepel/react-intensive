import Header from "../../widgets/LayoutHeader/Header.tsx";
import Footer from "../../widgets/LayoutFooter/Footer.tsx";
import styles from './MainLayout.module.css'
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.main__container}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}
