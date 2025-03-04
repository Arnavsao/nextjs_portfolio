import FeaturedCourses from "@/components/FeaturedCourses";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <HeroParallaxDemo/>
      <FeaturedCourses />
      <HeroScrollDemo/>      
      <AppleCardsCarouselDemo/>
      <InfiniteMovingCardsDemo/>
    </main>
  );
}