document.querySelectorAll(".button").forEach((button) => {
  let div = document.createElement("div"),
    letters = button.textContent.trim().split("");

  function elements(letter, index, array) {
    let element = document.createElement("span"),
      part = index >= array.length / 2 ? -1 : 1,
      position =
        index >= array.length / 2
          ? array.length / 2 - index + (array.length / 2 - 1)
          : index,
      move = position / (array.length / 2),
      rotate = 1 - move;

    element.innerHTML = !letter.trim() ? "&nbsp;" : letter;
    element.style.setProperty("--move", move);
    element.style.setProperty("--rotate", rotate);
    element.style.setProperty("--part", part);

    div.appendChild(element);
  }

  letters.forEach(elements);

  button.innerHTML = div.outerHTML;

  button.addEventListener("mouseenter", (e) => {
    if (!button.classList.contains("out")) {
      button.classList.add("in");
    }
  });

  button.addEventListener("mouseleave", (e) => {
    if (button.classList.contains("in")) {
      button.classList.add("out");
      setTimeout(() => button.classList.remove("in", "out"), 950);
    }
  });
});

const aboutUsBtn = document.getElementById("aboutUs");

aboutUsBtn.addEventListener("click", () => {
  window.top.location.href = "nous.html";
});

const contact = document.getElementById("contact");

contact.addEventListener("click", () => {
  window.top.location.href = "contact-form.html";
});

const cgu = document.getElementById("cgu");

cgu.addEventListener("click", () => {
  window.top.location.href =
    "https://fr.wikipedia.org/wiki/Conditions_générales_d%27utilisation";
});
