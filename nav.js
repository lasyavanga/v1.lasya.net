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

const nav = document.getElementById("nav");

for (let i = 0; i < links.length; i++) {
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
    nav.appendChild(li);
}
