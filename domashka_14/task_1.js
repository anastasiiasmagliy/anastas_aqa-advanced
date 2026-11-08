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
let testNumber = 0;

function printTestNumber() {
  testNumber++;
  console.log(`TEST #${testNumber}`);
}

var linka = "https://jsonplaceholder.typicode.com";

test("GET /posts", async () => {
  printTestNumber();
  const response = await axios.get(`${linka}/posts`);
  assert.equal(typeof response.data[0].id, "number");
  assert.equal(response.status, 200);

  console.log(
    `You've got so nice status - ${response.status} - and that's user's ID: ${response.data[1].userId}`,
  );
});

test("GET /posts/1/comments", async () => {
  printTestNumber();
  const response = await axios.get(`${linka}/posts/1/comments`);
  assert.equal(response.status, 200);
  assert.equal(typeof response.data[3].email, "string");
  assert.ok(response.data[3].email.includes("@"));
  console.log(
    `You've got so nice status - ${response.status} - and that's user's email: ${response.data[3].email}`,
  );
});

test("GET /users full adress edition", async () => {
  printTestNumber();

  const response = await axios.get(`${linka}/users`);
  assert.equal(response.status, 200);
  console.log(
    `You've got so nice status - ${response.status} - and that's user's full address: ${response.data[1].address.street}, ${response.data[1].address.suite}, ${response.data[1].address.city}, ${response.data[1].address.zipcode}`,
  );
});

test("GET /todos", async () => {
  printTestNumber();

  const response = await axios.get(`${linka}/todos`);
  // if (response.data[1].completed === false) {console.log("not completed");
  try {
    assert.equal(response.data[3].completed, false);
    console.log("Task is not completed");
  } catch (error) {
    console.log(
      `This user completed his task. there is his TODOTitle: "${response.data[3].title}". status: ${response.status}`,
    );
    throw error;
  }
  assert.equal(response.status, 200);

  //console.log(`that's user's TODOTitle: "${response.data[3].title}". status: ${response.status}`);
});

test("GET /comments?postId=1", async () => {
  printTestNumber();

  const response = await axios.get(`${linka}/comments?postId=1`);
  assert.equal(response.status, 200);
  console.log(
    `user ${response.data[1].email} wrote this comment: "${response.data[1].body}"`,
  );
});
