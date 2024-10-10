import Navbar from "@/components/Navbar";

import styles from "@/styles/resume.module.css";

export default function Resume() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <div className={styles.container}>
                    <embed className="" src="http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf" type="application/pdf"></embed>
                </div>
            </main>
        </>
    )
}