const ul = document.querySelector("ul");
const liList = document.querySelectorAll("li");

// const ConsoleLog = () => {
//   console.log("Siema");
// };

// liList.forEach((li) => li.addEventListener("click", ConsoleLog));

for (let i = 0; i < liList.length; i++) {
  liList[i].addEventListener("click", () => {
    console.log("Witaj");
  });
}
