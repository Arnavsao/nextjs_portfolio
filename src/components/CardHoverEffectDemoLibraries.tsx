import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemoLibraries() {
  return (
    <div className="max-w-7xl mx-auto px-8 flex ">
    {/* <h1 className="font-extrabold italic pt-10 pr-28 text-3xl text-indigo-500">Libraries</h1> */}
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    "title": "Gsap",
    "link": "https://greensock.com/gsap/"
  },
  {
    "title": "Npm.js",
    "link": "https://www.npmjs.com/"
  },
  {
    "title": "Swiper.js",
    "link": "https://swiperjs.com/"
  },
  {
    "title": "Locomotive.js",
    "link": "https://locomotive-scroll.github.io/"
  },
  {
    "title": "NumPy",
    "link": "https://numpy.org/"
  },
  {
    "title": "Pandas",
    "link": "https://pandas.pydata.org/"
  },
  {
    "title": "Matplotlib",
    "link": "https://matplotlib.org/"
  },
  {
    "title": "Seaborn",
    "link": "https://seaborn.pydata.org/"
  }
];