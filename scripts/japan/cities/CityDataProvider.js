// cold hard raw fish data. aka sushi.
const cityCollection = [
    {
        name: "Tokyo",
        image: "https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg",
        alt: "a helicopter view of the city of Tokyo at sunrise with blur at the bottom"
    },
    {
        name: "",
        image: "",
        alt: ""
    },
    {
        name: "",
        image: "",
        alt: ""
    },
    {
        name: "",
        image: "",
        alt: ""
    },
    {
        name: "",
        image: "",
        alt: ""
    },
]

//make a copy of the array as to not modify the original data set

export const useCities = () => {
    return cityCollection.slice()
}