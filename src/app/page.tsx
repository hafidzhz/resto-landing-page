import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import DiningMoments from "@/components/DiningMoments";
import EventsVenue from "@/components/EventsVenue";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/ai/AIAssistant";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <DiningMoments />
        <EventsVenue />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </>
  );
}
