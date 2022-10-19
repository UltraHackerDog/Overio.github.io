const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.75,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.intersectionRatio >= 0.75) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = [...section.querySelector("[data-content]").children];

  sectionChildren.forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 250}ms`);
  });

  observer.observe(section);
});

 function scrollFunction1() {
        let e = document.getElementById("el1");
        e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
        });
      }
      function scrollFunction2() {
        let e = document.getElementById("el2");
        // This ends the block to the window 
        // bottom and also aligns the view to the center 
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
      }

// smooth scrolling to section

function scrollToSection(section) {
  document.getElementById(section).scrollIntoView({behavior: 'smooth' });
}

