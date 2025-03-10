const header1 = document.getElementById("header1")
const header2 = document.getElementById("header2")
const scrollUp = 200;

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if(scrollTop > scrollUp) {
        header1.style.transform = "translateY(-100%)";
        header2.style.top = "0px",
        header2.classList.remove("hidden")
    } else {
        header1.style.transform = "translateY(0)"
        header2.style.top = "-100px"
        header2.classList.add("hidden")
    }
})