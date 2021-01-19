const citizenCollection = [
    {
        image: "https://assets.vogue.com/photos/5942c0c271a33f1e99dbc9a5/master/w_2560%2Cc_limit/00-lede-yoko-ono.jpg",
        alt: "Yoko Ono sitting on the couch in black and white",
        name: "Yoko Ono"
    },
    {
        image: "https://atalayar.com/sites/default/files/styles/foto_/public/noticias/Atalayar_Presidente%20Jap%C3%B3n.jpg?itok=nmrg3-a6",
        alt: "Yoshihide Suga sitting behind his desk",
        name: "Yoshihide Suga"
    },
    {
        image: "https://faroutmagazine.co.uk/static/uploads/2021/01/Hayao-Miyazaki-Studio-Ghibli-1.jpg",
        alt: "Hayao Miyazaki standing outside in an apron and smiling",
        name: "Hayao Miyazaki"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Hirohito_wartime%28cropped%29.jpg",
        alt: "Hirohito standing formally in his military uniform",
        name: "Hirohito"
    },
    {
        image: "https://www.newstatesman.com/sites/default/files/styles/lead_image/public/Longreads_2019/07/2019_31_yukio_main.jpg?itok=KdcRSW_I",
        alt: "Yukio Mishima standing outside smoking a cigarette",
        name: "Yukio Mishima"
    }
]

export const useCitizens = () => {
    return citizenCollection.slice()
}