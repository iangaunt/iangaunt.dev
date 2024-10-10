/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from "react";
import Album from "./Album"

import styles from "@/styles/about.module.css"

let data: any;

export default function Spotify() {
    const [json, setJson] = useState(data);

    useEffect(() => {
      const intervalId = 
      setInterval(() => {
          (async() => {
              const response = await fetch(
                  "https://api.lanyard.rest/v1/users/614954208139149319"
              );
              data = await response.json();
              setJson(data);
          })();
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []); 
    
    return (
        <>
            <p className={styles.listening}>Here's what I'm currently listening to ...</p>
            <Album json={json} />
        </>
    )
}