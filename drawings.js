const drawings = [
    {
        src: "0001-2020-07-28-cotton-candy.jpg",
        alt: "Cotton Candy",
        caption: "Cotton Candy (07-28-2020)",
    },
    {
        src: "0002-2020-07-28-ariel.jpg",
        alt: "Ariel",
        caption: "Ariel (07-28-2020)",
    },
    {
        src: "0003-2020-07-28-fairy.jpg",
        alt: "Fairy",
        caption: "Fairy (07-28-2020)",
    },
    {
        src: "0004-2020-07-28-mother-hugging-a-baby.jpg",
        alt: "Mother Hugging a Baby",
        caption: "Mother Hugging a Baby (07-28-2020)",
    },
    {
        src: "0005-2020-07-28-fairy-wand.jpg",
        alt: "Fairy Wand",
        caption: "Fairy Wand (07-28-2020)",
    },
    {
        src: "0006-2020-07-28-chocolate.jpg",
        alt: "Chocolate",
        caption: "Choclate (07-28-2020)",
    },
    {
        src: "0007-2020-07-28-crown.jpg",
        alt: "Crown",
        caption: "Crown (07-28-2020)",
    },
    {
        src: "0008-2020-07-28-hello-kitty.jpg",
        alt: "Hello Kitty",
        caption: "Hello Kitty (07-28-2020)",
    },
    {
        src: "0009-2020-07-30-hot-dog-stand.jpg",
        alt: "Hot Dog Stand",
        caption: "Hot Dog Stand (07-30-2020)",
    },
    {
        src: "0010-2020-07-31-ice-cream-truck.jpg",
        alt: "Ice Cream Truck",
        caption: "Ice Cream Truck (07-31-2020)",
    },
];

console.log(drawings);

for (let i = 0; i < drawings.length; i++) {
    const container = document.getElementById("container");

    const c = "cropped-high-quality-drawings/";

    const img = document.createElement("img");
    img.src = c + drawings[i].src;
    img.alt = drawings[i].alt;
    img.style.height = "400px";

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = drawings[i].caption;
    const figure = document.createElement("figure");
    figure.appendChild(img);
    container.appendChild(figure);
    figure.appendChild(figcaption);
}
