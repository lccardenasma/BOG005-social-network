export const wall = () => {
  const div = document.createElement("div");
  const text = document.createElement("p");
  document.body.style.background = "#AC48D9";
  text.textContent = "Este es mi muro";

  div.append(text);
  return div;
};
