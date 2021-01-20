const cityCollection = [
    {
        image: "../../../images/images_czech/cesky-krumlov.jpg",
        alt: "Cesky Krumlov, a preserved medieval town with red roofs, green trees, and a blue river surrounding it",
        name: "Cesky Krumlov"
    },
    {
        image: "../../../images/images_czech/prague.jpg",
        alt: "Prague street with statues and the famous tunnel at sunset",
        name: "Prague"
    },
    {
        image: "../../../images/images_czech/telc.jpg",
        alt: "The colorful storefronts of the Telc town square",
        name: "Telc"
    },
    {
        image: "../../../images/images_czech/karlovy-vary.jpg",
        alt: "The colorful hilly city of Karlovy Vary",
        name: "Karlovy Vary"
    },
    {
        image: "../../../images/images_czech/tabor.jpg",
        alt: "A sunny, snow dusted street in the city of Tabor",
        name: "Tabor"
    }
]

export const useCities = () => {
    return cityCollection.slice()
}