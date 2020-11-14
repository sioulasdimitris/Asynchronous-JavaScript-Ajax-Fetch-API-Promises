document.addEventListener("DOMContentLoaded", () => {
  const $textBtn = document.querySelector(".btn-text");
  const $jsonBtn = document.querySelector(".btn-json");
  const $apiBtn = document.querySelector(".btn-api");
  const $output = document.querySelector("#output");

  $textBtn.addEventListener("click", getText);
  $jsonBtn.addEventListener("click", getJson);
  $apiBtn.addEventListener("click", getApi);

  async function getText() {
    const res = await fetch(
      "http://127.0.0.1:5500/JS-asynchronous-JS-ajax-fetch-api/05-async-await/text.txt"
    );
    const data = await res.text();
    console.log(data);
    $output.innerHTML = data;
  }

  async function getJson() {
    const res = await fetch(
      "http://127.0.0.1:5500/JS-asynchronous-JS-ajax-fetch-api/05-async-await/todos.json"
    );
    const data = await res.json();
    console.log(data);
    const todosHTML = data
      .map((todo) => {
        return `<li>${todo.title}</li>`;
      })
      .join("");

    $output.innerHTML = `<ul>${todosHTML}</ul>`;
  }

  async function getApi() {
    try {
      const res = await fetch("http://api.icndb.com/jokes/random");
      const data = await res.json();
      console.log(data);
      $output.innerHTML = data.value.joke;
    } catch (error) {
      console.log(error);
    }
  }
});
