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
        caption: "Chocolate (07-28-2020)",
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
    {
        src: "0011-2020-08-01-cupcake.jpg",
        alt: "Cupcake",
        caption: "Cupcake (08-01-2020)",
    },
    {
        src: "0012-2020-08-01-cupcake.jpg",
        alt: "Cupcake",
        caption: "Cupcake (08-01-2020)",
    },
    {
        src: "0013-2020-08-01-cupcake.jpg",
        alt: "Cupcake",
        caption: "Cupcake (08-01-2020)",
    },
    { src: "0014-agnes.jpg", alt: "Agnes", caption: "Agnes" },
    {
        src: "0015-milk-and-cereal.jpg",
        alt: "Milk and Cereal",
        caption: "Milk and Cereal",
    },
    {
        src: "0016-back-to-school.jpg",
        alt: "Back to School",
        caption: "Back to School",
    },
    { src: "0017-scientist.jpg", alt: "Scientist", caption: "Scientist" },
    {
        src: "0018-girl-in-rain-sketch.jpg",
        alt: "Girl in Rain",
        caption: "Girl in Rain",
    },
    {
        src: "0019-watermelon-popsicle.jpg",
        alt: "Watermelon Popsicle",
        caption: "Watermelon Popsicle",
    },
    { src: "0020-lasya.jpg", alt: "Girl Wearing Lasya Dress", caption: "Girl" },
    { src: "0021-lasya.jpg", alt: "Lasya", caption: "Lasya Art" },
    {
        src: "0022-2020-10-14-trick-or-treat.jpg",
        alt: "Trick or Treat",
        caption: "Trick or Treat (10-14-2020)",
    },
    {
        src: "0023-2020-10-26-witch.jpg",
        alt: "Witch",
        caption: "Witch (10-26-2020)",
    },
    {
        src: "0024-trick-or-treat.jpg",
        alt: "Trick or Treat Basket",
        caption: "Trick or Treat Basket",
    },
    {
        src: "0025-2020-11-09-mac-and-cheese.jpg",
        alt: "Mac & Cheese",
        caption: "Mac & Cheese (11-09-2020)",
    },
    { src: "0026-girl-drawing.jpg", alt: "Girl", caption: "Girl" },
    {
        src: "0027-2020-11-24-twilight.jpg",
        alt: "Twilight",
        caption: "Twilight (11-24-2020)",
    },
    {
        src: "0028-2020-11-25-applejack.jpg",
        alt: "Applejack",
        caption: "Applejack (11-25-2020)",
    },
    {
        src: "0029-2020-11-26-rainbow-dash.jpg",
        alt: "Rainbow Dash",
        caption: "Rainbow Dash (11-26-2020)",
    },
    {
        src: "0030-2020-11-30-pumpkin-spice-hot-chocolate.jpg",
        alt: "Hot Chocolate",
        caption: "Pumpkin Spice Hot Chocolate (11-30-2020)",
    },
    {
        src: "0031-2020-12-12-snow-globe.jpg",
        alt: "Snow Globe",
        caption: "Snow Globe (12-12-2020)",
    },
    {
        src: "0032-2020-12-13-gingerbread-man.jpg",
        alt: "Gingerbread Man",
        caption: "Gingerbread Man (12-13-2020)",
    },
    {
        src: "0033-2020-12-13-gift-box].jpg",
        alt: "Gift Box",
        caption: "Gift Box (12-13-2020)",
    },
    { src: "0034-ornament.jpg", alt: "Ornament", caption: "Ornament" },
    {
        src: "0035-2020-12-16-snowflake.jpg",
        alt: "Cotton Candy",
        caption: "Snowflake (12-16-2020)",
    },
    { src: "0036-pirate-ship.jpg", alt: "Pirate Ship", caption: "Pirate Ship" },
    {
        src: "0037-mothers-day.jpg",
        alt: "Mother's Day Sketch",
        caption: "Mother's Day Sketch",
    },
    { src: "0038-popsicle.jpg", alt: "Popsicle", caption: "Popsicle" },
    {
        src: "0039-camping-area.jpg",
        alt: "Camping Area",
        caption: "Camping Area",
    },
    {
        src: "0040-ice-cream-cup-cone.jpg",
        alt: "Ice Cream Cup Cone",
        caption: "Ice Cream Cup Cone",
    },
    { src: "0041-cupcake.jpg", alt: "Cupcake", caption: "Cupcake" },
    {
        src: "0042-cheeseburger.jpg",
        alt: "Cheeseburger",
        caption: "Cheeseburger",
    },
    { src: "0043-peppa-pig.jpg", alt: "Peppa Pig", caption: "Peppa Pig" },
    { src: "0044-cartoon-elsa.jpg", alt: "Elsa", caption: "Elsa" },
    { src: "0045-milkshake.jpg", alt: "Milkshake", caption: "Milkshake" },
    {
        src: "0046-ice-cream-sundae.jpg",
        alt: "Ice Cream Sundae",
        caption: "Ice Cream Sundae",
    },
    { src: "0047-eifel-tower.jpg", alt: "Eifel Tower", caption: "Eifel Tower" },
    { src: "0048-hiker.jpg", alt: "Hiker", caption: "Hiker" },
    {
        src: "0049-folding-surprise-ice-cream.jpg",
        alt: "Ice cream",
        caption: "Ice Cream Folding Surprise",
    },
    {
        src: "0050-folding-surprise-ice-cream.jpg",
        alt: "Ice Cream",
        caption: "Ice Cream Folding Surprise",
    },
    {
        src: "0051-folding-surprise-mom.jpg",
        alt: "Folding Surprise Mom",
        caption: "Mom Folding Surprise",
    },
    {
        src: "0052-folding-surprise-mom.jpg",
        alt: "Mom Folding Surprise",
        caption: "Mom Folding Surprise",
    },
    { src: "0052-super-mom.jpg", alt: "Super Mom", caption: "Super Mom" },
    { src: "0053-flower.jpg", alt: "Flower", caption: "Flower" },
    {
        src: "0054-sundae-and-panda-macaroon.jpg",
        alt: "Sundae & Panda Macaroon",
        caption: "Sundae and Panda Macaroon",
    },
    { src: "0055-easter-girl.jpg", alt: "Easter Girl", caption: "Easter Girl" },
    { src: "0056-house.jpg", alt: "House", caption: "House" },
    {
        src: "0057-leaf-art.jpg",
        alt: "Name Leaf Art",
        caption: "Name Leaf Art",
    },
    {
        src: "0058-happy-birthday.jpg",
        alt: "Happy Birthday",
        caption: "Happy Birthday",
    },
    {
        src: "0059-lasya-folding-surprise.jpg",
        alt: "Folding Surprise",
        caption: "Folding Surprise",
    },
    {
        src: "0060-lasya-folding-surprise.jpg",
        alt: "Folding Surprise",
        caption: "Folding Surprise",
    },
    {
        src: "0061-multiplication-santa.jpg",
        alt: "Multiplication Santa",
        caption: "Multiplication Santa",
    },
    { src: "0062-cubenstien.jpg", alt: "Cubenstien", caption: "Cubenstien" },
    { src: "0063-skull.jpg", alt: "Skull", caption: "Skull" },
    { src: "0064-taco.jpg", alt: "Taco", caption: "Taco" },
    {
        src: "0065-penguin-in-beach.jpg",
        alt: "Penguin in a Beach",
        caption: "Penguin in a Beach",
    },
    {
        src: "0066-turkey-as-doctor.jpg",
        alt: "Turkey as a Doctor",
        caption: "Turkey as a Doctor",
    },
    {
        src: "0067-new-year-fireworks.jpg",
        alt: "New Year Fireworks",
        caption: "New Year Fireworks",
    },
    { src: "0068-snowman.jpg", alt: "Snowman", caption: "Snowman" },
    { src: "0069-pumpkin.jpg", alt: "Cotton Candy", caption: "Pumpkin" },
    { src: "0070-leaf.jpg", alt: "Leaf", caption: "Leaf" },
    { src: "0071-city.jpg", alt: "City", caption: "City" },
];

(function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < drawings.length; i++) {
        const c = "/compressed-drawings/";

        const img = document.createElement("img");
        img.src = c + drawings[i].src;
        img.alt = drawings[i].alt;
        img.style.maxHeight = "300px";
        img.style.maxWidth = "400px";

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = drawings[i].caption;
        const figure = document.createElement("figure");
        figure.appendChild(img);
        figure.appendChild(figcaption);
        fragment.appendChild(figure);
    }

    const container = document.getElementById("container");
    container.appendChild(fragment);
})();
