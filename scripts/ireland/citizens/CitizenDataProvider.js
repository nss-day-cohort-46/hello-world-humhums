const citizenCollection = [
    {
        image: "../../../images/images_ireland/bono.jpg",
        alt: "photo of Bono",
        name: "Bono",
    },
    {
        image: "../../../images/images_ireland/mary-robinson.jpg",
        alt: "photo of Mary Robinson",
        name: "Mary Robinson",
    },
    {
        image: "../../../images/images_ireland/robert-boyle.jpg",
        alt: "photo of Robert Boyle",
        name: "Robery Boyle",
    },
    {
        image: "../../../images/images_ireland/colin-farrell.jpg",
        alt: "photo of Colin Farrell",
        name: "Colin Farrell",
    },
    {
        image: "../../../images/images_ireland/william-yeats.jpg",
        alt: "photo of Butler Yeats",
        name: "William Butler Yeats",
    },
]

export const useCitizens = () => {
    return citizenCollection.slice()
}