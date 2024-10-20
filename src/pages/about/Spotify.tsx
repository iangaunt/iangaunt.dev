/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from "react";
import Album from "./Album"

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
            <Album json={json} />
        </>
    )
}