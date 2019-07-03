const $body = document.querySelector("body");
const $btn_menu = document.querySelector(".btn-menu");
const $ul_menu = document.querySelector(".ul-menu");
const min_width = 760;

let opened = false;

$body.classList.remove("no-js");
$body.classList.add("js");


$btn_menu.removeAttribute("style")

$btn_menu.addEventListener("click", openOrClose)

function openOrClose() {
    if (opened === false) {
        openMenu();
        opened = true;
    }
    else {
        closeMenu();
        opened = false;
    }
}

function openMenu() {
    $ul_menu.style.visibility = "visible"
}

function closeMenu() {
    $ul_menu.style.visibility = "hidden"
}

window.addEventListener("resize", e => {
    debugger
    if (window.innerWidth < min_width) {
        $ul_menu.style.visibility = "hidden";
    }
    else {
        $ul_menu.style.visibility = "visible";
    }
})