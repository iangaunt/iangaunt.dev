import Script from "next/script";
import { useEffect } from "react";

import styles from "@/styles/hljs.module.css";

import hljs from "highlight.js/lib/core";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import cpp from "highlight.js/lib/languages/cpp";
hljs.registerLanguage("cpp", cpp);

export default function Codeblock(props: {code: string, language: string}) {
    const lines: Array<string> = [];
    let running = "";
    let reading = false;

    for (let i = 0; i < props.code.length; i++) {
        const c = props.code[i];
        if (!reading && c == ' ') continue;
        reading = true;

        if (c == "\\") {
            if (props.code[i + 1] == 'n') {
                lines.push(running + "\n");
                i++;
                running = "";
                reading = false;
            } else if (props.code[i + 1] == 't') {
                running += "    "
                i++;
            }
        } else {
            running += c;
        }
    }
    lines.push(running);

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
            <pre className={styles.codeblock}>
                <code>{lines}</code>
            </pre>
        </>
    );
}