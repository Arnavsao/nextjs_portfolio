import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoFrameworks() {
  return (
    <div className=" pb-40 max-w-7xl mx-auto px-8 flex">
    <h1 className=" pt-10 pr-16 text-3xl text-teal-500">Frameworks</h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    "title": "Hugging Face",
    "link": "https://huggingface.co/"
  },
  {
    "title": "OpenAI API",
    "link": "https://platform.openai.com/"
  },
  {
    "title": "TensorFlow",
    "link": "https://www.tensorflow.org/"
  },
  {
    "title": "scikitlearn",
    "link": "https://scikit-learn.org/"
  },
  {
    "title": "LangChain",
    "link": "https://langchain.com/"
  }
];