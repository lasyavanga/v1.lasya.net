const links = [
    {
        linkName: "Home",
        link: "/index.html?v=1",
    },
    {
        linkName: "About",
        link: "/pages/about.html?v=1",
    },
    {
        linkName: "Education",
        link: "/pages/education.html?v=1",
    },
    {
        linkName: "Links",
        link: "/pages/links.html?v=1",
    },
    {
        linkName: "Photos",
        link: "/pages/photos.html?v=1",
    },
    {
        linkName: "Drawings",
        link: "/pages/drawings.html?v=1",
    },
    {
        linkName: "Piano",
        link: "/pages/piano.html?v=1",
    },
    {
        linkName: "Places Visited",
        link: "/pages/places-visited.html?v=1",
    },
    {
        linkName: "HTML Practicals",
        link: "/pages/html-practicals?v=1",
    },
    {
        linkName: "CSS Practicals",
        link: "/pages/css-practicals/?v=1",
    },
    {
        linkName: "About Github",
        link: "/pages/how-git-works.html?v=1",
    },
    {
        linkName: "Clicking Game",
        link: "/pages/html-js-practicals/clicking-game.html?v=1",
    },
    {
        linkName: "Contact",
        link: "/pages/contact.html?v=1",
    },
];

(function () {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < links.length; i++) {
        const nav = document.getElementById("nav-links");
        // Create and set attributes for a
        const a = document.createElement("a");

        a.textContent = links[i].linkName;

        // Create li
        const li = document.createElement("li");

        a.href = links[i].link;

        // Append a in li
        li.appendChild(a);

        // Append li in nav
        fragment.appendChild(li);
    }

    const nav = document.getElementById("nav-links");
    nav.appendChild(fragment);
})();
