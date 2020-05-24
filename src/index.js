console.log("Hello");

const links = document.querySelectorAll(".nav-link");
const divs = document.querySelectorAll(".tab-pane");

document.querySelector("body").addEventListener("click", event => {
    links.forEach((link, i) => {
        if(link.classList.contains("active")) {
            link.classList.remove("active")
        }
        if(event.target === link) {
            event.target.classList.add("active")
            divs.forEach(div => {
                div.classList.remove("show", "active")
            })
            divs[i].classList.add("show", "active")
        }
    })
  });