import { createSignal, onCleanup } from "solid-js";
import type { JSX } from "solid-js";

interface PlayButtonProps {
  audioUrl: string;
  class?: string;
}

export default function PlayButton(props: PlayButtonProps) {
  const [isPlaying, setIsPlaying] = createSignal(false);
  let audio: HTMLAudioElement | null = null;

  const handleClick = () => {
    if (!audio) {
      audio = new Audio(props.audioUrl);
      audio.onended = () => setIsPlaying(false);
    }

    if (isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying());
  };

  onCleanup(() => {
    if (audio) {
      audio.pause();
      audio = null;
    }
  });

  return (
    <button
      type="button"
      onClick={handleClick}
      class={`${
        props.class || ""
      } group w-fit p-1.5 gap-1.5 text-sm flex items-center
        rounded hover:bg-black/5 hover:dark:bg-white/10
        transition-colors duration-300 ease-in-out`}
      aria-label={isPlaying() ? "Pause audio" : "Play audio"}
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
        {isPlaying() ? (
          <>
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </>
        ) : (
          <polygon points="5 3 19 12 5 21 5 3" />
        )}
      </svg>
      <span class="group-hover:text-black group-hover:dark:text-white">
        {isPlaying() ? "Pause" : "Play"}
      </span>
    </button>
  );
}
