import styles from "@/styles/blog.module.css"
import Link from "next/link";
import { MouseEvent, ReactElement, useEffect, useRef, useState } from "react";

const limit: number = 80;

function calculateRotation(x: number, y: number, el: DOMRect): string {
    if (el == null) return "";
	const calcX = -(y - el.y - (el.height / 2)) / limit;
	const calcY = (x - el.x - (el.width / 2)) / limit;

	return "perspective(500px) " + "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
}

export default function Box(props: {title: string, body: string, date: string, url: string, icon: ReactElement, iconColor: string}) {
    const [titleStyle, setTitleStyle] = useState({});
    const [arrowStyle, setArrowStyle] = useState({});

    const containerRef = useRef<HTMLDivElement>(null);
    const [containerBox, setContainerBox] = useState(containerRef.current?.getBoundingClientRect());

    useEffect(() => {
        if (containerRef.current) {
            setContainerBox(containerRef.current.getBoundingClientRect());
        }
    }, []);

    const link = props.url != null ? props.url : "https://google.com/";

    return (
        <div ref={containerRef} className={styles["article-cont"]} 
            onMouseMove={(e: MouseEvent | null) => {
                const event = e;
                if (event == null) return;

                setTitleStyle({
                    background: "rgb(31 40 58)",
                    transform: calculateRotation(event.clientX, event.clientY, containerBox!),
                    transitionDuration: "0.05s"
                });

                setArrowStyle({
                    color: "white",
                    transition: "color 0.2s"
                })
            }}

            onMouseLeave={() => {
                setTitleStyle({
                    background: "rgb(44 56 81)",
                    transitionDuration: "0.8s"
                });

                setArrowStyle({
                    color: "transparent",
                    transition: "color 0.2s"
                })
            }}>
                
            
            <Link href={link} className={styles.article} style={titleStyle}>
                <div className={styles.content}>
                    <h1><>
                        <span className={styles.icon} style={{color: props.iconColor}}>{props.icon}</span>
                        {props.title}
                    </></h1>
                    <p><span>{props.date}</span> {props.body}</p>
                </div>
                <h2 style={arrowStyle}>→</h2>
            </Link>
        </div>
    )
}