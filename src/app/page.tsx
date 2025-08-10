import About from "@/components/landing/about";
import Cta from "@/components/landing/cta";
import Feature from "@/components/landing/feature";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Cta />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
