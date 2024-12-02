const texts = ["UI/UX Designer", "Web Developer", "Data Analyst"];
const dynamicTextElement = document.querySelector(".dynamic-text");

let index = 0;

function changeText() {
  dynamicTextElement.textContent = `I'm ${texts[index]}`;
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000);

changeText();


const scrollBtn = document.getElementById("scrollBtn");
    const aboutSection = document.getElementById("about");

    scrollBtn.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });

