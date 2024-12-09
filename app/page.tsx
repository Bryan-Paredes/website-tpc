import Footer from "@/sections/footer";
import HeroPage from "@/sections/hero";
import Services from "@/sections/services";
import Testimonials from "@/components/testimonials";
import WorkPage from "@/sections/work";

export default function Home() {
  return (
    <>
      <HeroPage />
      <WorkPage />
      <Services />
      <Testimonials />
    </>
  );
}
