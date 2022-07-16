function generateIcons(iconMap, id, classToAdd) {
    for (var ins in iconMap) {

        // Instantialize new elements 
        let item = document.createElement("a"); let img = document.createElement("img");

        // Apply new properties to elements
        item.target = "_blank"; item.rel = "noopener noreferrer";
        item.href = iconMap[ins]; img.src = "assets/logos/" + ins + ".svg";
        item.appendChild(img); 

        if (classToAdd) {
            img.classList.add(classToAdd);
        }

        // Add to logo container
        document.getElementById(id).appendChild(item); 
    }
}

function typeWriter(title, shiftIndex, target, newTarget) {
    let i = 0

    // Iterate through text with random timing
    function t() {
        if (i < title.length) {

            // Move text to #title-e after "iangaunt"
            if (i > shiftIndex) {
                target = newTarget; 
            }

            // Add to text content, and then pause + iterate
            document.getElementById("title-" + target).innerHTML += title.charAt(i);
            setTimeout(t, (Math.floor(Math.random() * 10) + 1) * 23);
            i++;
        }
    }

    t();
}

function styleMode() {
    // Get current stylistic setting
    let currentMode = document.getElementById("mode-toggle").innerText; 

    // Differences in theme styles, which will be referenced to change colors
    let themeColors = {
        "--white" : ["rgb(255, 255, 255)", "rgb(38, 40, 48)"],
        "--black" : ["rgb(4, 4, 3)", "rgb(255, 255, 255)"],
        "--gunmetal" : ["rgb(41, 47, 54)", "rgb(214, 207, 201)"],
        "--black-tns" : ["rgba(4, 4, 3, 0.3)", "rgba(251, 251, 252, 0.3)"],
        "--grey-tns" : ["rgba(210, 210, 210, 0.5)", "rgba(30, 30, 30, 0.5)"]
    }

    // Apply individual color changes
    document.getElementById("mode-toggle").innerText = (currentMode == "light" ? "dark" : "light");
    document.getElementById("textdesc-bg").style.backgroundColor = (currentMode == "light" ? "rgb(0, 0, 0, 0)" : "var(--sky-blue)"); 

    for (var ins in themeColors) {
        var sel = (currentMode == "light" ? 1 : 0);
        document.documentElement.style.setProperty(ins, themeColors[ins][sel]);
    }
    localStorage.setItem("theme", (document.getElementById("mode-toggle").innerText == "light" ? "dark" : "light"));
} 

function initTheme() {
    let storedTheme = localStorage.getItem("theme");
    document.getElementById("mode-toggle").innerText = storedTheme; 
    styleMode(); 
}; 

