// show Less/More Button

let buttonShowMore = document.getElementsByClassName("show_button");
let cards = document.getElementById("cards");

buttonShowMore[0].addEventListener('click', () => {
    if (cards.classList.contains("cards")) {
        cards.classList.replace("cards", "cards_more");
        buttonShowMore[0].textContent = "Show Less";
    } else {
        cards.classList.replace("cards_more", "cards");
        buttonShowMore[0].textContent = "Show More";
    }
});

// make a color for navigations

function lisntener(sectionName, navName) {
    document.addEventListener("scroll", () => {
        if (window.pageYOffset >= sectionName.offsetTop && window.pageYOffset <= sectionName.offsetTop + sectionName.offsetHeight - 200) {
            navName.classList.replace("temp_nav", "new_nav_color");
        } else {
            navName.classList.replace("new_nav_color", "temp_nav");
        }
    });
}

let navHome = document.getElementById("nav_home");
let home = document.getElementById("home")
lisntener(home, navHome);

let navAbout = document.getElementById("nav_about");
let about = document.getElementById("about_me")

lisntener(about, navAbout);

let navProjects = document.getElementById("nav_project");
let projects = document.getElementById("projects")
lisntener(projects, navProjects);

let navContact = document.getElementById("nav_contact");
let contact = document.getElementById("contact")
lisntener(contact, navContact);


// concating the footer

document.addEventListener("scroll", () => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let modifier = 50;
    if (currentScroll + modifier > documentHeight) {
        document.getElementsByClassName("copyRight")[0].classList.add("disabled");
        document.getElementsByClassName("Footer_of_the_page")[0].classList.replace("Footer_of_the_page", "footer_enabled");
    } else {
        document.getElementsByClassName("copyRight")[0].classList.remove("disabled");
        document.getElementsByClassName("footer_enabled")[0].classList.replace("footer_enabled", "Footer_of_the_page");
    }
})


// copy to clipord contact deatails

let text = document.getElementsByClassName("card_contact");
text[0].addEventListener("click", () => {
    navigator.clipboard.writeText(text[0].getAttribute("title")).then(() => {
        console.log('Content copied to clipboard');
    }, () => {
        console.error('Failed to copy');
    });
});


text[1].addEventListener("click", () => {
    navigator.clipboard.writeText(text[1].getAttribute("title")).then(() => {
        console.log('Content copied to clipboard');
    }, () => {
        console.error('Failed to copy');
    });
})
console.log(text.getAttribute("title"))