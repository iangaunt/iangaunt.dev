import styles from "@/styles/about.module.css"

import Navbar from "@/components/Navbar";
import Spotify from "./Spotify";

import { Icon } from '@iconify/react';
import Template from "../template";

export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template >
                    <div className={styles.container}>
                        <div className={styles.textbar}>
                            <h1><Icon className={styles.icon} icon="lucide:terminal" /> Hi! I'm Ian.</h1>
                            <p>
                                I'm a first-year Computer Science student at Cal Poly SLO. I've been programming
                                for around seven years and have played with plenty of languages, frameworks,
                                and projects. I'm currently passionate about algorithmic analysis,
                                UI/UX design, and emulation.
                            </p>
                            <div className={styles.iconbar}>
                                <Icon className={styles.icon} icon="devicon-plain:lua" />
                                <Icon className={styles.icon} icon="devicon-plain:java" />
                                <Icon className={styles.icon} icon="devicon-plain:typescript" />
                                <Icon className={styles.icon} icon="devicon-plain:cplusplus" />
                                <Icon className={styles.icon} icon="cib:react" />
                                <Icon className={styles.icon} icon="la:sass" />
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iangaunt/">Check out my GitHub! <Icon className={styles.icon} icon="mi:external-link" /></a>
                        </div>
                        <div className={styles.picture}>
                            <img className={styles.box} src="https://avatars.githubusercontent.com/u/66448861?v=4"></img>
                            <Spotify />
                        </div>
                    </div>
                </Template>
            </main>
        </>
    )
}