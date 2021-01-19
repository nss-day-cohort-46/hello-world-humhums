const cityCollection = [
    {
        image: "../../../images/images_Antarctica/",
        alt: "test",
        name: "test",
    },  
    {
        image: "",
        alt: "",
        name: "",
    },  
    {
        image: "",
        alt: "",
        name: "",
    },    
]

export const useCities = () => {
    return cityCollection.slice()
}