import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const TextGenerateEffectDemo = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`;

  return <div className="flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]">
    <TextGenerateEffect words={words} />
  </div>
}

export default TextGenerateEffectDemo;
