const left_but = document.getElementById("left_but")
const right_but = document.getElementById("right_but")

left_but.addEventListener("mouseenter", function() {
    if (left_but) {
        left_but.style.backgroundColor = "#ff5e14";
        right_but.style.backgroundColor = "white";
    }
    
    left_but.addEventListener("mouseleave", function () {
        if(left_but)
            left_but.style.backgroundColor = "white";
            right_but.style.backgroundColor = "#ff5e14";      
    })
})