import About from "@/components/landing/about";
import Cta from "@/components/landing/cta";
import Feature from "@/components/landing/feature";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <main>
      <main className="fixed inset-0 overflow-y-auto z-10">
        <Header />
      </main>
      <BlurFade delay={0.05} inView>
      <Hero />
      </BlurFade>
      <BlurFade delay={0.05 * 2} inView>
      <Feature />
      </BlurFade>
      <BlurFade delay={0.05 * 3} inView>
      <About />
      </BlurFade>
      <BlurFade delay={0.05 * 4} inView>
      <Cta />
      </BlurFade>
      <Footer />
    </main>
  );
}
