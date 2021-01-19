const cityCollection = [
    {
        image: "../../../images/images_czech/cesky-krumlov.jpg",
        alt: "Cesky Krumlov, a preserved medieval town with red roofs, green trees, and a blue river surrounding it",
        name: "Cesky Krumlov"
    },
    {
        image: "../../../images/images_czech/prague.jpg",
        alt: "Prauge street with statues and the famous tunnel at sunset",
        name: "Prauge"
    },
    {
        image: "",
        alt: "",
        name: ""
    },
    {
        image: "",
        alt: "",
        name: ""
    },
    {
        image: "",
        alt: "",
        name: ""
    }
]

export const useCities = () => {
    return cityCollection.slice()
}