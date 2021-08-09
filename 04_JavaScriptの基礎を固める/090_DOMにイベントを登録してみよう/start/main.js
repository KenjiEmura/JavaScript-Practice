const btn = document.querySelector("#btn");

function hello(e) {
  e.target.removeEventListener("click", null);
  alert("hello");
  console.log(e)
}

btn.addEventListener("click", hello);
