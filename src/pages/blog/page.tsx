import styles from "@/styles/blog.module.css"

import Navbar from "@/components/Navbar";
import Template from "../template";
import Article from "./Article";

import { Icon } from '@iconify/react';

export default function Blog() {
    return (
        <>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template>
                    <div className={styles.container}>
                        <div className={styles.row}>
                            <Article 
                                title="chip8 emulation"
                                body="A quick post about how I built a chip8 emulator from scratch with C++, SDL2, and Visual Studio Code."
                                date="[10.11.24]"
                                url="https://google.com/"
                                icon={<Icon icon="hugeicons:chip" />}
                                iconColor={"rgb(255 209 102)"}
                            ></Article>
                            <Article 
                                title="how i use obsidian"
                                body="I take a lot of notes in college. Obsidian is my go-to notes app and I'll let you know why."
                                date="[10.11.24]"
                                url="https://google.com/"
                                icon={<Icon icon="simple-icons:obsidian" />}
                                iconColor={"rgb(172 210 124)"}
                            ></Article>
                        </div>
                        <div className={styles.row}>
                            <Article 
                                title="programming"
                                body="I like programming language design. Quite a lot of them, however, have some weird design quirks."
                                date="[10.11.24]"
                                url="https://google.com/"
                                icon={<Icon icon="basil:folder-solid" />}
                                iconColor={"rgb(89 213 148)"}
                            ></Article>
                            <Article 
                                title="reading list"
                                body="Here's a few textbooks I have my eyes on, or ones that I'm currently reading and working through."
                                date="[10.11.24]"
                                url="https://google.com/"
                                icon={<Icon icon="basil:book-open-solid" />}
                                iconColor={"rgb(6 214 160)"}
                            ></Article>
                        </div>
                    </div>
                </Template>
            </main>
        </>
    )
}