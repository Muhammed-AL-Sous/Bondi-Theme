// Scroller Page

// Scroll Height Is : Content & Padding (Visible Or Not)
// Client Height Is : Just Visible Content & Padding

let scroller = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Button Scroll To Top
let scrollToTopButtton = document.querySelector(".button-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 1200) {
    scrollToTopButtton.classList.add("show");
  } else {
    scrollToTopButtton.classList.remove("show");
  }
});

scrollToTopButtton.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// ======================================================================= //

// Start Our Works
let switcherLis = document.querySelectorAll(".our-work .switcher li");
let boxImgs = document.querySelectorAll(".our-work .box");

switcherLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Loop On All Li
    switcherLis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");

    // Loop On boxs Image
    boxImgs.forEach((box) => {
      box.parentElement.style.setProperty("display", "none", "important");
    });
    document.querySelectorAll(e.target.dataset.category).forEach((ele) => {
      ele.parentElement.style.setProperty("display", "flex", "important");
    });
  });
});
// End Our Works

// ============================================================================== //

// Start Tech Sections

let copy = document.querySelector(".logos-slide").cloneNode(true);

document.querySelector(".logos").appendChild(copy);

// End Tech Sections

// ============================================================================== //
