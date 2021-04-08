const videos = [
    { link: "lPC9A6khstw", caption: "Rain Rain Go Away" },
    { link: "p4Nrp4gFv7c", caption: "Play A Fourth" },
    { link: "gChOJYwbfhw", caption: "The Donkey" },
    { link: "GzHwqLzhMac", caption: "My Fifth" },
    { link: "c4QYr0pRS4I", caption: "Rockets" },
    { link: "F17R9LHqpGw", caption: "Old Uncle Bill" },
    { link: "OwK2appjUB4", caption: "Money Can't Buy Everything" },
    { link: "wXNXr94fAVM", caption: "When the Saints Go Marching In" },
    { link: "wuYZeSb8Tso", caption: "Horse Sense" },
    { link: "XtUTEV8-6tQ", caption: "Music Box Rock" },
    { link: "xeiaWpF0O3M", caption: "Happy Birthday To You" },
    { link: "afthAox84lY", caption: "Jingle Bells - Version One" },
    { link: "5mg_lu7yDgs", caption: "The Magic Man" },
    { link: "4B8-H7MOgSo", caption: "Yankee Doodle" },
    { link: "jqff9h6_W9A", caption: "Waltz Time" },
    { link: "zYgLZX8Pefc", caption: "Indians" },
    { link: "OhQxhhw5Kvs", caption: "A Friend Like You" },
    { link: "o4R_ak7TTf0", caption: "Good King Wenceslas" },
    { link: "EstBVCncB9g", caption: "Whishing Well" },
    { link: "3Uq62Eqtjlk", caption: "Raindrops" },
    { link: "N5KF2e3SEAE", caption: "Love Somebody" },
    { link: "euz94nvXRW0", caption: "It's Halloween" },
    { link: "lf3LjDSquno", caption: "Just a Second!" },
    { link: "_pOMowJBjhk", caption: "Sailing" },
    { link: "g0w4u4B9Rzw", caption: "Ballons" },
    { link: "uCWzVeJHIVs", caption: "Sonatina" },
];

// Get reference to the container
const iframeAttrs = {
    width: "480",
    height: "270",
    src: "https://www.youtube.com/embed/",
    title: "YouTube video player",
    frameborder: "0",
    allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: "allowfullscreen",
};

(function () {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < videos.length; i++) {
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = videos[i].caption;

        const iframeEl = document.createElement("iframe");
        /*
         */
        iframeEl.setAttribute("width", iframeAttrs.width);
        iframeEl.setAttribute("height", iframeAttrs.height);
        iframeEl.setAttribute("src", iframeAttrs.src + videos[i].link);
        iframeEl.setAttribute("title", videos[i].caption);
        iframeEl.setAttribute("frameborder", iframeAttrs.frameborder);
        iframeEl.setAttribute("allow", iframeAttrs.allow);
        iframeEl.setAttribute("allowfullscreen", iframeAttrs.allowfullscreen);

        const figure = document.createElement("figure");

        figure.appendChild(iframeEl);
        figure.appendChild(figcaption);
        fragment.appendChild(figure);
    }

    const container = document.getElementById("container");
    container.appendChild(fragment);
})();
