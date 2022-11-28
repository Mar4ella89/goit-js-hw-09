const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector("button[data-start]"),
  btnStop: document.querySelector("button[data-stop]"),
};
let timerId = null;

const changerBGColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
};

const onClickBtnStart = () => {
  timerId = setInterval(changerBGColor, 1000);
  refs.btnStart.setAttribute("disabled", true);
};

const onClickBtnStop = () => {
  clearInterval(timerId);
  refs.btnStart.removeAttribute("disabled");
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener("click", onClickBtnStart);

refs.btnStop.addEventListener("click", onClickBtnStop);
