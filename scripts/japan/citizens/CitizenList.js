import { Citizen } from "./Citizen.js"
import { useCitizens } from "./CitizenDataProvider.js"

let citizenHTML = ""
const buildCitizensHTML = (citizenArray) => {
    for (const citizenObj of citizenArray) {
        citizenHTML += Citizen(citizenObj)
        console.log("citizen", citizenObj)
    }
    return citizenHTML
}

export const CitizenList = () => {
    const contentElement = document.querySelector(".contentContainer")

    const allCitizensArray = useCitizens()

    buildCitizensHTML(allCitizensArray)

    contentElement.innerHTML += `
        <article class="contentContainer__citizens">
            <h3>Famous Citizens</h3>
            <div class="contentContainer__cards ">
                ${citizenHTML}
            </div>
        </article>
        `
}