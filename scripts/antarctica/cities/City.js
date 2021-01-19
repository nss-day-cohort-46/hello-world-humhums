const City = (city) => {
    return `
    <div class="card">
        <img class="cardImages" src="${city.image}" alt="${city.alt}"></img>
            <p>${city.name}</p>
        </div>
    `
}