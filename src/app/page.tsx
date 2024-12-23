// import Image from "next/image";
// import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
// import { CardStackDemo } from "@/components/CardStackDemo"; // Import CardStackDemo
import { CardHoverEffectDemoLanguages } from "@/components/CardHoverEffectDemoLanguages";
import { CardHoverEffectDemoTools } from "@/components/CardHoverEffectDemoTools";
import { CardHoverEffectDemoDevelopment } from "@/components/CardHoverEffectDemoDevelopment";
import { CardHoverEffectDemoLibraries } from "@/components/CardHoverEffectDemoLibraries";
import { CardHoverEffectDemoFrameworks } from "@/components/CardHoverEffectDemoFrameworks";

import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
// import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

// import { BackgroundBeamsDemoContact } from "@/components/BackgroundBeamsDemoContact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>

      <HeroParallaxDemo/>
      {/* <Herosection /> */}
      <FeaturedCourses />

      {/* Call each CardHoverEffectDemo component separately */}
      <CardHoverEffectDemoLanguages />
      <CardHoverEffectDemoTools />
      <CardHoverEffectDemoDevelopment />
      <CardHoverEffectDemoLibraries />
      <CardHoverEffectDemoFrameworks />

      <AppleCardsCarouselDemo/>
      {/* Adding the CardStackDemo Component */}
      {/* <CardStackDemo /> */}
      {/* <BackgroundBeamsDemoContact/> */}
      <InfiniteMovingCardsDemo/>
      <AnimatedTooltipPreview/>  
    </main>
  );
}