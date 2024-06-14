// Someone decided to not sort the navigation on the left! So i have to make one myself
// Thanks Doks!

/**
 * @param {HTMLElement} ulElement
 */
const sortList = (ulElement) => {
    /**
     * @type {HTMLElement[]}
     */
    let liElements = []

    Array.from(ulElement.querySelectorAll("li")).forEach(element => {
        if(element.parentElement == ulElement)
            liElements.push(element.cloneNode(true))
    })

    const liElements_Tables = liElements.filter(li => li.querySelector("details")).sort()
    const liElements_NavLinks = liElements.filter(li => !li.querySelector("details")).sort()

    ulElement.innerHTML = ""

    liElements_Tables.forEach(element => ulElement.appendChild(element))
    liElements_NavLinks.forEach(element => ulElement.appendChild(element))

    liElements_Tables.forEach(element => sortList(element.querySelector("ul")))
}

// Check if its at the documentation website
if(window.location.pathname.startsWith("/docs"))
    sortList(document.querySelector(".content").querySelector(".docs-links").querySelector("ul"))

// Adds a color bar to the header
const navbar = document.querySelector(".navbar")
const colorBar = document.createElement("div")
colorBar.className = "color-bar"

navbar.outerHTML = colorBar.outerHTML + navbar.outerHTML
