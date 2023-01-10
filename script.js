const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const menuShopCarIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCarIcon.addEventListener('click',toggleSoppingCart)


function toggleDesktopMenu() {

    if(!aside.classList.contains("hide-menu-cart")){
        aside.classList.add("hide-menu-cart")
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    if(!aside.classList.contains("hide-menu-cart")){
        aside.classList.add("hide-menu-cart")
    }

    mobileMenu.classList.toggle('hide-menu');     
};

function toggleSoppingCart() {    

    if(!mobileMenu.classList.contains("hide-menu")){
        mobileMenu.classList.add("hide-menu")
    };

    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive")
    }
    aside.classList.toggle('hide-menu-cart');
};



