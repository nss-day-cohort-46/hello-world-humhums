import { useCities } from './CityDataProvider.js'
import { City } from "./City.js"



let cityHTML = ""
const buildCityHTML = (cityArray) => {
    for (const cityObj of cityArray) {
        cityHTML += City(cityObj)
    }
    return cityHTML
}

export const CityList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".contentContainer")
    const allCitiesArray = useCities()

    buildCityHTML(allCitiesArray)

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="contentContainer__cities">
            <h3>Cities to Visit</h3>
            <div class="contentContainer__cards">
                ${cityHTML}
            </div>
        </article>
    `
}