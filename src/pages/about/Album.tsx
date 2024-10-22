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
        const cover = props.json.data.spotify.album_art_url != null ? props.json.data.spotify.album_art_url : "https://wallpapers.com/images/hd/white-square-background-56v690fpm25a3o6s.jpg";
        const artist = props.json.data.spotify.artist != null ? props.json.data.spotify.artist: "Local Files";

        const songName = props.json.data.spotify.song;
        const artistName = artist + " • " + props.json.data.spotify.album;

        return (
            <>
                <p className={styles.listening}>Here's what I'm currently listening to ...</p>
                <div className={styles.spotify}>
                    <img alt="" className={styles.cover} src={cover}></img>
                    <div className={styles.description}>
                        <h1>{shorten(songName, true)}</h1>
                        <h2>{shorten(artistName, false)}</h2>
                        <Playback json={props.json} />
                    </div>
                </div>
            </>
        )
    } else {
        return (<></>);
    }
}