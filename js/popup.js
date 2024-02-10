const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal .close-btn");
const discountBtn = document.querySelector(".modal .discount-btn");
const popupOverlay = document.querySelector(".popup-overlay");
const popupContainer = document.querySelector(".popup-container");

const createCookie = () => {
  let maxAge = ";max-age=10";
  let path = ";path=/";
  document.cookie = "live-blogger-popup=displayed" + maxAge + path;
};

const displayModal = () => {
  if (document.cookie.indexOf("live-blogger-popup") == -1) {
    modal.classList.add("active");
    modalOverlay.classList.add("active");
    createCookie();
  }
};

const showPopup = () => {
  popupOverlay.classList.add("active");
  popupContainer.setAttribute("tabindex", "0"); // Set tabindex to make the container focusable
  popupContainer.focus(); // Set focus to the container
};

const hidePopup = () => {
  popupOverlay.classList.remove("active");
  popupContainer.removeAttribute("tabindex"); // Remove tabindex when hiding the popup
};

setTimeout(() => {
  displayModal();
}, 2000);

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});

discountBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
});