// function openMenu(event) {
//   const menuButton = document.querySelector('[data-menu="button"]');
//   const menuList = document.querySelector('[data-menu="list"]');
//   menuList.classList.add("active");
//   menuButton.classList.add("active");
// }

// menuButton.addEventListener("click", openMenu);

//  galeria
let galleryItems = document.querySelectorAll(".galleryItem");
const closeLightBox = (galleryItem, overlay) => {
  let originLinkTag = galleryItem.querySelector("a");
  let image = overlay.querySelector("img");
  let caption = overlay.querySelector("figcaption");

  // move image and caption back to their original parents
  originLinkTag.appendChild(image);
  galleryItem.appendChild(caption);

  // remove the light box overlay
  document.body.removeChild(overlay);
};
const openLightBox = (galleryItem) => {
  // create the overlay to darken the page
  let lightBoxOverlay = document.createElement("div");
  lightBoxOverlay.classList.add("lightBoxOverlay");
  // create the close button
  let lightBoxClose = document.createElement("a");
  lightBoxClose.innerText = "X";
  lightBoxClose.classList.add("closeButton");
  lightBoxOverlay.appendChild(lightBoxClose);
  // create a container for the image
  let lightBoxImageContainer = document.createElement("figure");
  lightBoxImageContainer.classList.add("container-galeria");
  lightBoxOverlay.appendChild(lightBoxImageContainer);
  // take the already existing image and move it into the overlay container
  let image = galleryItem.querySelector("img");
  lightBoxImageContainer.appendChild(image);

  // take the already existing figcaption and move it into the overlay container
  let caption = galleryItem.querySelector("figcaption");
  lightBoxImageContainer.appendChild(caption);

  // add a closing routine to close button
  lightBoxClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeLightBox(galleryItem, lightBoxOverlay);
  });

  // display the overlay
  document.body.appendChild(lightBoxOverlay);
};
galleryItems.forEach((el) => {
  let linkTag = el.querySelector("a");
  linkTag.addEventListener("click", (e) => {
    e.preventDefault();
    openLightBox(el);
  });
});

//menu-mobile
document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const tratamentoItem = document.querySelector("#tratamentos");
  const submenu = document.querySelector("#submenu");

  // Abre e fecha o menu principal
  btnMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    btnMenu.classList.toggle("active");
  });

  // Abre e fecha o submenu no clique (somente no mobile)
  tratamentoItem.addEventListener("click", function (event) {
    event.preventDefault(); // Impede navegação caso tenha link
    submenu.classList.toggle("active");

    // Garante que os outros menus fiquem fechados
    document.querySelectorAll(".submenu").forEach((menu) => {
      if (menu !== submenu) {
        menu.classList.remove("active");
      }
    });
  });
});
