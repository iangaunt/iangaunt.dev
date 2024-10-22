import styles from "@/styles/blog.module.css"

import Navbar from "@/components/Navbar";
import Template from "../template";
import Article from "./Article";

import { Icon } from '@iconify/react';

const y1: string = "rgb(255 209 102)";
const y2: string = "rgb(172 210 124)";
const g1: string = "rgb(89 213 143)";
const g2: string = "rgb(6 214 160)";

export default function Blog() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template >
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <Article 
                                title="chip8 emulation"
                                body="A quick post about how I built a chip8 emulator from scratch with C++, SDL2, and Visual Studio Code."
                                
                                date="[10.21.24]"
                                url="/blog/articles/2024/chip8"

                                icon={<Icon icon="hugeicons:chip" />}
                                iconColor={y1}
                            ></Article>
                            <Article 
                                title="how i use obsidian"
                                body="I take a lot of notes in college. Obsidian is my go-to notes app and I'll let you know why."

                                date="[10.11.24]"
                                url="https://google.com/"

                                icon={<Icon icon="simple-icons:obsidian" />}
                                iconColor={y2}
                            ></Article>
                        </div>
                        <div className={styles.row}>
                            <Article 
                                title="programming"
                                body="I like programming language design. Quite a lot of them, however, have some weird design quirks."

                                date="[10.11.24]"
                                url="https://google.com/"

                                icon={<Icon icon="basil:folder-solid" />}
                                iconColor={g1}
                            ></Article>
                            <Article 
                                title="reading list"
                                body="Here's a few textbooks I have my eyes on, or ones that I'm currently reading and working through."

                                date="[10.22.24]"
                                url="/blog/articles/2024/reading"

                                icon={<Icon icon="basil:book-open-solid" />}
                                iconColor={g2}
                            ></Article>
                        </div>
                    </div>
                </Template>
            </main>
        </>
    )
}