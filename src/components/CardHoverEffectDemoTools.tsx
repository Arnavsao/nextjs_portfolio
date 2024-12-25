import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoTools() {
  return (
    <div className="max-w-7xl mx-auto px-8 flex ">
    {/* <h1 className="font-extrabold italic pt-16 pr-40 text-3xl text-indigo-500">Tools</h1> */}
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    "title": "Git/GitHub",
    "link": "https://github.com/"
  },
  {
    "title": "VS Code",
    "link": "https://code.visualstudio.com/"
  },
  {
    "title": "Bootstrap",
    "link": "https://getbootstrap.com/"
  },
  {
    "title": "Material UI",
    "link": "https://mui.com/"
  },
  {
    "title": "Google Colab",
    "link": "https://colab.research.google.com/"
  },
  {
    "title": "Postman",
    "link": "https://www.postman.com/"
  },
  {
    "title": "Thunder Client",
    "link": "https://www.thunderclient.com/"
  },
  {
    "title": "Docker",
    "link": "https://www.docker.com/"
  },
  {
    "title": "Figma",
    "link": "https://www.figma.com/"
  },
  {
    "title": "Canva",
    "link": "https://www.canva.com/"
  }
];