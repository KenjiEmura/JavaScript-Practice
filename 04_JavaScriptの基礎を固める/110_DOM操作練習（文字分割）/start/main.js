document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("div.animate-title");
  console.log(el.innerHTML.trim());

  let str = "";

  for (let c of el.innerHTML.trim()) {
    console.log(`<span class="char">${c}</span>`);
    c = c.replace(" ", "&nbsp;");
    str += `<span class="char">${c}</span>`;
  }

  el.innerHTML = str;
});
