let body = document.querySelector("body");

window.addEventListener("keydown", e => {
    if(e.keyCode == 27) {
        body.classList.remove("show-modal");
    }
})

body.addEventListener("click", (e) => {
    let clickedLink = e.target;
    let forkLink = clickedLink.getAttribute("forkLink");
    let downloadLink = clickedLink.getAttribute("downloadLink");
    
    if(forkLink && downloadLink) {
        document.querySelector(".modal a.fork-link").setAttribute("href", forkLink);
        document.querySelector(".modal a.download-link").setAttribute("href", downloadLink);
        body.classList.toggle("show-modal");
    }

    if(e.target.classList.contains("modal-overlay")){
        body.classList.toggle("show-modal");
    }
});

document.querySelector(".modal").addEventListener("click", (e) => {
    e.stopPropagation();
});
