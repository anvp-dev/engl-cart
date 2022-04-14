window.addEventListener("DOMContentLoaded", () => {

  const answerField = document.querySelector(".game__answer");
  const nextButton = document.querySelector(".next");
  const pictures = document.querySelectorAll(".game__img img"); 

  const headline = document.querySelector(".reaction"); 
  const inputs = document.querySelectorAll(".game__answer-item input"); 

  let flag = true;
  let score = 0;
  let attempt = 0;

  const images = {
    1: "she",
    2: "they",
    3: "they",
    4: "she",
    5: "he",
    6: "it",
    7: "she",
    8: "it",
    9: "she",
    10: "it",
    11: "he",
    12: "it",
    13: "it",
    14: "it",
    15: "it",
    16: "they",
    17: "they",
    18: "she",
    19: "he",
    20: "they",
    21: "they",
    22: "they",
    23: "she",
    24: "she",
    25: "it",
    26: "it",
    27: "it",
    28: "he",
    29: "he",
    30: "he",
    31: "she",
    32: "they",
    33: "he",
    34: "she",
    35: "he",
    36: "they",
    37: "they",
    38: "they",
    39: "they",
    40: "it",
  };

  function choice() {
    answerField.addEventListener("click", (e) => {
      if (e.target.closest(".game__answer-item")) {
        const attrButton = e.target.childNodes[1].dataset.answer;
        const pic = document
          .querySelector(".game__img img")
          .getAttribute("alt");

        if (attrButton === pic && flag) {
          headline.innerHTML = `Молодец! <img class="reaction__img" src="./img/smile/smile.png" alt="">`;
          flag = false;
          score += 1;
          attempt += 1;
          document.querySelector(".attempt span").textContent = attempt;
          document.querySelector(".score span").textContent = score;
        }

        if (attrButton !== pic && flag) {
          headline.innerHTML = `Не правильно <img class="reaction__img" src="./img/smile/sad.png" alt="">`;
          flag = false;
          attempt += 1;
          document.querySelector(".attempt span").textContent = attempt;
        }

        // Отключение кнопок
        inputs.forEach((item) => {
          item.disabled = true;
        });

        nextButton.classList.add("is-active");
      }
    });
  }
  choice();

  nextButton.addEventListener("click", () => {
    const getRandomInt = Math.floor(Math.random() * (40 - 1)) + 1;
    pictures.forEach((item) => {
      item.classList.remove("is-active");
    });

    const currentImg = document.querySelector(".game__img img");
    currentImg.src = `./img/${getRandomInt}.jpg`;
    currentImg.alt = images[getRandomInt];
    currentImg.classList.add("is-active");

    nextButton.classList.remove("is-active");
    headline.innerHTML = "";
    inputs.forEach((item) => {
      item.disabled = false;
    });

    flag = true;
    
  });  
});
