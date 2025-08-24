export default async function GetData() {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return todos;
}
