/* Створити тестовий сценарій за допомогою пекеджу axios.

Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

Задача:
expect(response.status).toBe(200);
    expect(response.data[0].id).toBe(1);
створити 5 запитів за допомогою методів GET, POST
обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ */

const axios = require("axios");
const test = require("node:test");
const assert = require("node:assert/strict");

test("GET posts", async () => {
  const linka = "https://jsonplaceholder.typicode.com";

  const response = await axios.get(`${linka}/posts`);

  console.log(response.status, response.data[0].id);
  assert.equal(typeof response.data[0].id, "number");
});
