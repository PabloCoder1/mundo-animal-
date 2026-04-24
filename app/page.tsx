import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import ConversionBanner from "@/components/sections/ConversionBanner";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <Services />
      <Products />
      <ConversionBanner />
      <Testimonials />
      <Location />
      <FAQ />
      <Footer />
    </main>
  );
}