import { City } from "./City.js"
import { useCities } from "./CityDataProvider.js"

let cityHTML = ""
const buildCitizensHTML = (cityArray) => {
    for (const cityObj of cityArray) {
        cityHTML += City(cityObj)
        console.log("city", cityObj)
    }
    return citzenHTML
}

export const CityList = () => {
    const contentElement = document.querySelector(".contentContainer")

    const allCitizensArray = useCities()

    buildCitizensHTML(allCitizensArray)

    contentElement.innerHTML += `
        <article class="contentContainer__cities">
            <h3>Famous Citizens</h3>
            <div class="contentContainer__cards ">
                ${citizenHTML}
            </div>
        </article>
        `
}