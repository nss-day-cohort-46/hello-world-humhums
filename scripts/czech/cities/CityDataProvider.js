const cityCollection = [
    {
        image: "../../../images/images_czech/cesky-krumlov.jpg",
        alt: "Cesky",
        name: "Cesky Krumlov"
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