import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoLanguages() {
  return (
    <div className="pt-40 max-w-7xl mx-auto px-8 flex">
    <h1 className=" pt-6 pr-16 text-3xl text-teal-500">Languagaes</h1>

      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "C",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    title: "C++",
    link: "https://isocpp.org/",
  },
  {
    title: "Python",
    link: "https://www.python.org/",
  },
  {
    title: "Java",
    link: "https://www.java.com/",
  },
  {
    title: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "SQL",
    link: "https://www.w3schools.com/sql/",
  },
];