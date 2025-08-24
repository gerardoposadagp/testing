export const dynamic = "force-dynamic";

export default async function GetData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  const todos = await response.json();
  return todos;
}
