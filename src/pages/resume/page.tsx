import Navbar from "@/components/Navbar";

import styles from "@/styles/resume.module.css";

export default function Resume() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <div className={styles.container}>
                    <embed src="resume.pdf" type="application/pdf"></embed>
                </div>
            </main>
        </>
    )
}