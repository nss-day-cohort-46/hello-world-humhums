const cityCollection = [
    {
        image: "../../../images/images_Antarctica/rossIslandMap.png",
        alt: "A map showing Ross Island, Antarctica.",
        name: "Ross Island",
    },  
    {
        image: "../../../images/images_Antarctica/dryValley.jpg",
        alt: "A view of the Dry Valleys from a small science field camp.",
        name: "Dry Valleys",
    },  
    {
        image: "../../../images/images_Antarctica/southPole.jpg",
        alt: "With the United States South Pole Station in the background, and flags planted surrounding a pole set into the ice. The Ceremonial South Pole is an area set aside for photo opportunities at the South Pole Station. It is re-located each year to account for the is shift and represents the Geographic South Pole, and consists of a metallic sphere on a short barber pole, surrounded by the flags of the original Antarctic Treaty signatory states.",
        name: "South Pole",
    },
    {
        image: "../../../images/images_Antarctica/pineIslandGlacier.jpg",
        alt: "Satelite view of a massive glacier seperating from the Antarctic continent.",
        name: "Western Antarctica",
    },
    {
        image: "../../../images/images_Antarctica/antarcticaPeninsula.jpg",
        alt: "A overhead view of the entire Antarctic continent",
        name: "Peninsula",
    },
]

export const useCities = () => {
    return cityCollection.slice()
}
