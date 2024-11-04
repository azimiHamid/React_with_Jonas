// Promise and Async_await
// fetch itself is a promise, look at the last example



const dataURL = "https://jsonplaceholder.typicode.com/todos";
let unCompletedTasks = 0;

fetch(dataURL)
  .then((res) => res.json())
  .then((data) => {
    unCompletedTasks = data
      .filter((todo) => todo.completed !== true)
      .map((todo) => todo.title);
    console.log("Uncompleted tasks = ", unCompletedTasks.length);
  })
  .catch((error) => console.log(error.message));

// Now we can do the same thing using async_await
const fetchData = async () => {
  try {
    const res = await fetch(dataURL);
    const data = await res.json();
    console.log("Total tasks = ", data.length);
    console.log("Completed tasks = ", data.length - unCompletedTasks.length);
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();


console.log(fetch(dataURL)); // pending