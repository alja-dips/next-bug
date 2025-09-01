import { inMemoryStore } from "./store";

export default async function Home() {
  // sleep 500ms
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <ul>
      {
        inMemoryStore.map((obj, index) => (
          <li key={index}>
            <strong>{obj.name}</strong>: {obj.message}
          </li>
        ))
      }
    </ul>
  );
}
