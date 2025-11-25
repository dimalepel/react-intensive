import Header from "../../widgets/LayoutHeader/Header.tsx";
import Footer from "../../widgets/LayoutFooter/Footer.tsx";
import PostList from "../../widgets/PostList/PostList.tsx";
import styles from './MainLayout.module.css'

export default function MainLayout() {
    return (<>
        <Header />
        <main className={styles.main}>
            <div className={styles.main__container}>
                <PostList />
            </div>
        </main>
        <Footer />
    </>)
}