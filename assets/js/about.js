document.addEventListener("DOMContentLoaded",  _ => {
    const scroller  = document.querySelector(".scroller");

    scroller.onclick = _ => myFunction();
    
    function myFunction() {
        const elmnt = document.getElementById("team");
        elmnt.scrollIntoView({
            behavior: "smooth"
        });
    }
})