// requiere este o de lo contrario al hacer build lo convierte en estatico
export const dynamic = "force-dynamic";

export default async function GetData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a delay
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  
  // requiere este o de lo contrario al hacer build lo convierte en estatico
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  const todos = await response.json();
  console.log("Fetched todos:", todos);
  return todos;
}
