import * as Progress from "@radix-ui/react-progress";

interface iProgressBar {
  progress: number;
}

export function ProgressBar(props: iProgressBar) {
  return (
    <Progress.Root
      className="h-3 rounded-xl bg-zinc-700 w-full mt-4 overflow-hidden"
      value={100}
    >
      <Progress.Indicator
        className="h-3 rounded-xl bg-violet-600 transition-all"
        style={{ transform: `translateX(-${100 - props.progress}%)` }}
      />
    </Progress.Root>
  );
}
