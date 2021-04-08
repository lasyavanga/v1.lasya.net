const links = [
    {
        linkName: "Home",
        link: "/index.html",
    },
    {
        linkName: "About",
        link: "/pages/about.html",
    },
    {
        linkName: "Education",
        link: "/pages/education.html",
    },
    {
        linkName: "Links",
        link: "/pages/links.html",
    },
    {
        linkName: "Photos",
        link: "/pages/photos.html",
    },
    {
        linkName: "Drawings",
        link: "/pages/drawings.html",
    },
    {
        linkName: "Piano",
        link: "/pages/piano.html",
    },
    {
        linkName: "Places Visited",
        link: "/pages/places-visited.html",
    },
    {
        linkName: "HTML Practicals",
        link: "/pages/html-practicals",
    },
    {
        linkName: "About Github",
        link: "/pages/how-git-works.html",
    },
    {
        linkName: "Contact",
        link: "/pages/contact.html",
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
