// ShareButton.tsx
import { createSignal } from "solid-js";
import type { JSX } from "solid-js";

interface ShareButtonProps {
  url: string;
  class?: string;
}

export default function ShareButton(props: ShareButtonProps) {
  const [status, setStatus] = createSignal<"idle" | "success" | "error">(
    "idle"
  );

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(props.url);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const getButtonText = () => {
    switch (status()) {
      case "success":
        return "Copied!";
      case "error":
        return "Failed to copy";
      default:
        return "Share";
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      class={`${
        props.class || ""
      } group w-fit p-1.5 gap-1.5 text-sm flex items-center
        rounded hover:bg-black/5 hover:dark:bg-white/10
        transition-colors duration-300 ease-in-out
        ${status() === "success" ? "text-green-600 dark:text-green-400" : ""}
        ${status() === "error" ? "text-red-600 dark:text-red-400" : ""}`}
      aria-label="Copy article link to clipboard"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="group-hover:stroke-black group-hover:dark:stroke-white"
      >
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
      <span class="group-hover:text-black group-hover:dark:text-white">
        {getButtonText()}
      </span>
    </button>
  );
}
