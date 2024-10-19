import BlogBack from "@/components/BlogBack";
import Navbar from "@/components/Navbar";
import Template from "@/pages/template";

import styles from "@/styles/article.module.css"

export default function Blog() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template>
                    <div className={styles.container}>
                        <BlogBack></BlogBack>
                    </div>  
                </Template>
            </main>
        </>
    )
}