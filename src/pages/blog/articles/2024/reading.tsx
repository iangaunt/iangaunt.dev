import BlogBack from "@/components/BlogBack";
import Codeblock from "@/components/Codeblock";
import Navbar from "@/components/Navbar";
import Template from "@/pages/template";

import styles from "@/styles/article.module.css"

export default function Page() {
    return (
        <>
            <div className={styles.bg}></div>
            <Navbar></Navbar>
            <main className={styles.main}>
                <Template >
                    <div className={styles.container}>
                        <BlogBack></BlogBack>
                        <h1>→ <span>[10.21.24]</span> my reading list</h1>

                        <p>
                            I like reading books. Unfortunately, I have had no time to read them, so I'll use this
                            page to document my journey through textbooks, fiction, and other things I may be interested
                            in reading. I promise I am accessing them all perfectly legally.
                        </p>
                        
                        <h2>Computer Science</h2>
                        <p>
                            The Algorithm Design Manual - Steven S. Skierna
                        </p>
                        
                        <footer>Happy coding! :) <a href="#top">(↑ back to top)</a></footer>
                    </div>  
                </Template>
            </main>
        </>
    )
}