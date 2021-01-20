const citizenCollection = [
    {
        image: "../../../images/images_czech/mendel.jpg",
        alt: "A grainy black and white photo of Gregor Johann Mendel, the father of genetics",
        name: "Gregor Johann Mendel"
    },
    {
        image: "../../../images/images_czech/freud.jpg",
        alt: "Sigmund Freud at his desk reading through papers",
        name: "Sigmund Freud"
    },
    {
        image: "../../../images/images_czech/Bertha-von-Suttner.jpg",
        alt: "A photograph of Bertha con Suttner",
        name: "Bertha von Suttner"
    },
    {
        image: "../../../images/images_czech/albright.jpg",
        alt: "Black and White portrait of Madeleine Albright",
        name: "Madeleine Albright"
    },
    {
        image: "../../../images/images_czech/franz-kafka.jpg",
        alt: "Black and White portrait of a young Franz Kafka",
        name: "Franz Kafka"
    }
]

export const useCitizens = () => {
    return citizenCollection.slice()
}