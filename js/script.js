// console.log("Hello world!!");

// const myName = "MR. Brain";
// const h1 = document.querySelector(".primary-heading");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem"
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear


const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
navBtnEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open")
})

//////////////////////////////////////////////////////////
// Scrolling Smooth Animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({behavior: "smooth"})
    }
    
    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open")
    }
  })
})

//////////////////////////////////////////////////////////
// Sticky Navigation 
const sectionHeroEl = document.querySelector(".hero-section")
const obs = new IntersectionObserver(function(entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky")
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky")
  }
}, 
{
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})
obs.observe(sectionHeroEl)

///////////////////////////////////////////////////////////
// Fixing flex-box gap property missing in Safari version
function checkFlexGab () {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  
  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGab()

// https://unpkg.com/smoothscroll-polyfill@.4.4/dist/smoothscroll.min.js