const links = [
    {
        linkName: "Home",
        link: "index.html",
    },
    {
        linkName: "About",
        link: "about.html",
    },
    {
        linkName: "Contact",
        link: "contact.html",
    },
    {
        linkName: "Education",
        link: "education.html",
    },
    {
        linkName: "About Github",
        link: "how-git-works.html",
    },
    {
        linkName: "Links",
        link: "links.html",
    },
    {
        linkName: "Photos",
        link: "photos.html",
    },
    {
        linkName: "Drawings",
        link: "drawings.html",
    },
    {
        linkName: "Piano",
        link: "piano.html",
    },
    {
        linkName: "Places Visited",
        link: "places-visited.html",
    },
    {
        linkName: "HTML Practicals",
        link: "html-practicals",
    },
];

/*
<ul class="nav" id="nav">

        </ul>
*/
const fragment = document.createDocumentFragment();

for (let i = 0; i < links.length; i++) {
    const nav = document.getElementById("nav-links");
    // Create and set attributes for a
    const a = document.createElement("a");

    const hrefs = [
        {
            href: links.link,
        },
    ];

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
