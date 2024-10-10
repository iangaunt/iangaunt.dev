'use client'

import styles from "@/styles/spotify.module.css"

function millisToTimestamp(m: number) {
    const duration = Math.round(m);
    const mins = Math.floor(duration / 60);
    const secs = Math.floor(duration % 60);

    let seconds = secs.toString();
    if (secs < 10) seconds = "0" + seconds;

    return mins + ":" + seconds;
}

export default function Playback(props: {json: any}) {
    if (props.json == null) return;
    
    const listening = props.json.data.listening_to_spotify;
    if (listening) {
        const start = Math.round(props.json.data.spotify.timestamps.start / 1000);
        const end = Math.round(props.json.data.spotify.timestamps.end / 1000);
        const now = Math.round(Date.now() / 1000);

        return (
            <div className={styles.time}>
                <p className={styles.timecode}>{millisToTimestamp(now - start)}</p>
                <div className={styles.bar}>
                    <div className={styles.fill} style={{width: (100 - ((end - now) / (end - start) * 100)) + "%"}}></div>
                </div>
                <p className={styles.timecode}>{millisToTimestamp(end - start)}</p>
            </div>
        )
    } else {
        return (<></>)
    }
}
