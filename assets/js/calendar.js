document.addEventListener("DOMContentLoaded", _ => {
    const mainList = document.querySelectorAll(".main-list");
    const formInput = document.getElementById("hidden-input");
    mainList.forEach(li => {
        li.onclick = _ => {
            let res = li.querySelector(".inputtext").innerHTML;
            formInput.value = res;
        }
    })
})