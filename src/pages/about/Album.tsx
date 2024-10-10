/* eslint-disable-next-line @next/next/no-img-element */
'use client'

import styles from "@/styles/spotify.module.css"
import Playback from "./Playback";

function shorten(str: string, title: boolean) {
    let bound = 30;
    if (!title) bound = 40;

    return (str.length > bound) ? str.substring(0, bound + 1) + "..." : str;
}

export default function Album(props: {json: any}) {
    if (props.json == null) return (<></>);

    const listening = props.json.data.listening_to_spotify;
    if (listening) {
        const songName = props.json.data.spotify.song;
        const artistName = props.json.data.spotify.artist + " • " + props.json.data.spotify.album;

        return (
            <div className={styles.spotify}>
                <img alt="" className={styles.cover} src={props.json.data.spotify.album_art_url}></img>
                <div className={styles.description}>
                    <h1>{shorten(songName, true)}</h1>
                    <h2>{shorten(artistName, false)}</h2>
                    <Playback json={props.json} />
                </div>
            </div>
        )
    } else {
        return (<></>);
    }
}