import printMe from "./print";

let component = () => {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello Webpack";
  btn.innerHTML = "Click this";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
};

document.body.appendChild(component());
