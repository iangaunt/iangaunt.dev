import Navbar from "@/components/Navbar";
import styles from "@/styles/index.module.css"

export default function Landing() {
	return (
		<>
			<Navbar></Navbar>
			<main className={styles.main}>
				<div className={styles.title}>
					<h1>IAN →</h1>
					<h2>← GAUNT</h2>
				</div>
				<div className={styles.bar}>
					<div className={styles.y1}></div>
					<div className={styles.y2}></div>
					<div className={styles.g1}></div>
					<div className={styles.g2}></div>
				</div>
				<h1 className={styles.description}>
					developer, music producer, graphic designer
				</h1>
			</main>
		</>
	);
}
