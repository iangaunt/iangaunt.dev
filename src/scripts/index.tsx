import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Icon } from '@iconify/react';

function Square(props: {content: JSX.Element}) {
    return (
        <div className="icon">
            {props.content}
        </div>
    )
}

createRoot(document.getElementById("main")).render((
    <div className="container">
        <Square content={(
            <div className="text">
                <h1>Welcome to my website!</h1>
                <p>My name is Ian, and I am a website developer, programmer, graphic designer, and producer from Nevada.</p>
            </div>
        )} />
        <Square content={(
            <div className="text">
                <p>I'm proficient in multiple programming languages and work with a variety of libraries, such as React and Webpack.</p>
                <div>
                    <Icon icon="mdi:language-lua" height="50px" />
                    <Icon icon="bxl:java" height="50px" />
                    <Icon icon="akar-icons:html-fill" height="50px" />
                    <Icon icon="la:sass" height="50px" />
                    <Icon icon="mdi:language-typescript" height="50px" />
                    <Icon icon="bxl:c-plus-plus" height="50px" />
                </div>
                <p>Check out my <a href={"https://github.com/iangaunt"}>GitHub</a>!</p>
            </div>
        )} />
        <Square content={(
            <div className="text">
                <h2><a href={"https://github.com/shinyhunt"}>ShinyHunt</a></h2>
                <p>ShinyHunt is a website I designed to count shiny hunts for Pokemon.</p>
                <br />
                <h2><a href={"https://github.com/electron"}>Electron</a></h2>
                <p>I'm working on a game with Electron.js with custom collisions and level building.</p>
            </div>
        )} />
        <Square content={(
            <div className="text">
                <h2>You can reach out to me on <a href={"https://github.com/iangaunt"}>GitHub</a> or on <a href={"https://discordapp.com/users/614954208139149319"}>Discord</a>. I stay away from most social media. :)</h2>
                <div>
                    <Icon icon="mdi:cat" height="50px" />
                    <Icon icon="mdi:heart" height="50px" />
                </div>
            </div>
        )} />
    </div>
));