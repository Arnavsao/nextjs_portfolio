import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoDevelopment() {
  return (
    
    <div className=" max-w-7xl mx-auto px-8 flex ">
    {/* <h1 className="font-extrabold italic pr-10 pt-16 text-3xl text-indigo-400">Development</h1> */}

      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    "title": "HTML5",
    "link": "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    "title": "CSS3",
    "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    "title": "React.js",
    "link": "https://reactjs.org/"
  },
  {
    "title": "Next.js",
    "link": "https://nextjs.org/"
  },
  {
    "title": "Node.js",
    "link": "https://nodejs.org/"
  },
  {
    "title": "Express.js",
    "link": "https://expressjs.com/"
  },
  {
    "title": "Tailwind CSS",
    "link": "https://tailwindcss.com/"
  },
  {
    "title": "MongoDB",
    "link": "https://www.mongodb.com/"
  },
  {
    "title": "MySQL",
    "link": "https://www.mysql.com/"
  },
  {
    "title": "Firebase",
    "link": "https://firebase.google.com/"
  },
  {
    "title": "FastAPI",
    "link": "https://fastapi.tiangolo.com/"
  }
];