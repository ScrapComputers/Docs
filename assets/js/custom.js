// Someone decided to not sort the navigation on the left! So i have to make one myself
// Thanks Doks!

/**
 * @param {HTMLElement} ulElement
 */
const sortList = (ulElement, level) => {
    const repeatText = "    ".repeat(level)

    console.log("[CUSTOM] List sorting: %s Sorting List: ", repeatText, ulElement)

    /**
     * @type {HTMLElement[]}
     */
    let liElements = []

    Array.from(ulElement.querySelectorAll("li")).forEach(element => {
        if (element.parentElement == ulElement)
            liElements.push(element.cloneNode(true))
    })

    console.log("[CUSTOM] List sorting: %s Sorted li elements!", repeatText)

    const liElements_Tables = liElements.filter(li => li.querySelector("details")).sort()
    const liElements_NavLinks = liElements.filter(li => !li.querySelector("details")).sort()

    console.log("[CUSTOM] List sorting: %s Splitted Tables and navigation links!", repeatText)

    ulElement.innerHTML = ""
    console.log("[CUSTOM] List sorting: %s Cleared list's elements", repeatText)

    liElements_Tables.forEach(element => ulElement.appendChild(element))
    liElements_NavLinks.forEach(element => ulElement.appendChild(element))
    console.log("[CUSTOM] List sorting: %s Apended children", repeatText)

    liElements_Tables.forEach(element => sortList(element.querySelector("ul"), level + 1))
}

// Check if its at the documentation website
if (window.location.pathname.startsWith("/docs")) {
    console.log("[CUSTOM]: We are at a documentation section! Sorting the list....")
    sortList(document.querySelector(".content").querySelector(".docs-links").querySelector("ul"), 0)
}

// Adds a color bar to the header
const navbar = document.querySelector(".navbar")
const colorBar = document.createElement("div")
colorBar.className = "color-bar"

navbar.outerHTML = colorBar.outerHTML + navbar.outerHTML
console.log("[CUSTOM]: Added a colorbar")

// Doks doesn't scroll upwards when you go to a new page without a hash
// This fixes it
function onLoop() {
    if (!window.location.hash.startsWith("#")) {
        // Send message indicating it has to scroll up
        console.log("[CUSTOM] Scrollbar: Attempting to scroll upwards!")

        // Do every method of scrolling to top because browsers suck
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        document.documentElement.scrollIntoView({ behavior: "instant", block: "start" })
    }

    // Check if the scrollY isnt 0. if so then request the next animation frame.
    if (window.scrollY !== 0)
        requestAnimationFrame(onLoop)
}


// Check if its a documentation website and we arent going to direct to a specifc function
if (!window.location.hash.startsWith("#") && window.location.pathname.startsWith("/docs")) {
    // Time to start the loop!
    console.log("[CUSTOM]: Created window movement to top")
    onLoop()
}

// Remove the starting "Description on searching"
const searchModal = document.getElementById("searchModal")
const searchResults = searchModal.querySelector("#searchResults")

/** @type {HTMLInputElement} */
const searchQuery = searchModal.querySelector("#query")
searchQuery.addEventListener("keyup", (ev) => {
    searchResults.querySelectorAll("article").forEach(searchResult => {
        const content = searchResult.querySelector(".content")
        const link = searchResult.querySelector("a")

        console.log(link)
    })
})

// Code stolen from color-mode
const setTheme = function (theme) {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }
}

const storedTheme = localStorage.getItem("theme");
const getPreferredTheme = () => {
    if (storedTheme)
        return storedTheme

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
};

setTheme(getPreferredTheme())


// Fix button not having click event
const buttonColorMode = document.getElementById("buttonColorMode")

buttonColorMode.querySelectorAll("svg").forEach(toggle => {
    toggle.addEventListener("click", (ev) => {
        ev.stopImmediatePropagation()

        const theme = toggle.getAttribute("data-bs-theme-value")
        localStorage.setItem("theme", theme)
        setTheme(theme)
    }, true)
})
