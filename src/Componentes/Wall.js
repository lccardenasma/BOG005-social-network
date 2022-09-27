export const wall = () => {
  const div = document.createElement("div");
  const text = document.createElement("p");

  text.textContent = "Este es mi muro";

  div.append(text);
  return div;
};
