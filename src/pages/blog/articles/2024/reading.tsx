import BlogBack from "@/components/BlogBack";
import Navbar from "@/components/Navbar";
import Template from "@/pages/template";

import styles from "@/styles/article.module.css"

export default function Reading() {
    return (
        <>
            <div className={styles.bg}></div>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template >
                    <div className={styles.container}>
                        <BlogBack></BlogBack>
                        <h1>→ <span>[10.22.24]</span> my reading list</h1>

                        <p>
                            I like reading books. Unfortunately, I have had no time to read them, so I'll use this
                            page to document my journey through textbooks, fiction, and other things I may be interested
                            in reading. I promise I am accessing them all perfectly legally.
                        </p>
                        
                        <h2>Computer Science</h2>
                        <ul>
                            <li>The Algorithm Design Manual - Steven S. Skierna </li>
                            <li>Structure and Interpretation of Computer Programs - Harold Abelson, Gerald Jay Sussman </li>
                            <li>The Object Oriented Thought Process - Matt Weisfield </li>
                            <li>Introduction to Algorithms, 4th ed. - Thomas H. Cormen </li>
                            <li>Introduction to Compilers and Language Design - Douglas Thain</li>
                            <li> Computer Networking: A Top-Down Approach - Kurose & Ross</li>
                        </ul>

                        <h2>Music Production</h2>
                        <ul>
                            <li>The Art of Mixing - David Gibson</li>
                            <li>Mastering Audio: the Art and the Science - Robert A. Katz </li>
                            <li>Honestly, I'm just trying to get the Ableton docs ...</li>
                        </ul>
                        
                        <footer>Happy coding! :) <a href="#top">(↑ back to top)</a></footer>
                    </div>  
                </Template>
            </main>
        </>
    )
}