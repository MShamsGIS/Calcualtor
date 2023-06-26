let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
let equationEntered = false;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      equationEntered = false;
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == "equal") {
      if (display.innerText != "") {
        try {
          let result = eval(display.innerText);
          display.innerText = result;
          equationEntered = true;
        } catch (error) {
          if (error instanceof SyntaxError) {
            display.innerText = "error";
          }
        }
      } else {
        display.innerText = "";
      }
    } else {
      if (equationEntered) {
        display.innerText = "";
        equationEntered = false;
      }
      display.innerText += item.id;
    }
  };
});

if (condition) {
}
switch (key) {
  case value:
    break;

  default:
    break;
}
// ......#39...
