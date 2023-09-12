// header scrolled
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// // Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


//  Form Data to Googlesheet

const form = document.forms['contactform'];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Sending..";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzE0F-X7rAoE75QTTVVrD73sjOPAbygSqmSEZPFwgp2iOfwWCoPoxZx3fmidDACVcULRw/exec', {
        method: "POST",
        body: data
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "Sending";
        });
}) 