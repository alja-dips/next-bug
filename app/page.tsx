"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/verySlowTargetPage")}
        data-testid="slow-button"
      >
        Go to the slow page
      </button>
      <button
        onClick={() => router.push("/normalTargetPage")}
        data-testid="normal-button"
      >
        Go to the normal page
      </button>
    </div>
  );
}
