import { HeroHeader } from "@/components/sections/Header";
import HeroSection from "@/components/sections/hero-section-five";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-full">
      <HeroHeader />
      <HeroSection />
    </section>
  );
}
