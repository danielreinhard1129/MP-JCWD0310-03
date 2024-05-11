import CityList from "@/components/city/CityList";
import EventCarousel from "@/components/event/EventCarousel";
import ListEvent from "@/components/event/ListEvent";
import MarqueeEvent from "@/components/event/MarqueeEvent";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventCarousel />
      <MarqueeEvent />
      <ListEvent />
      <CityList />
    </div>
  );
}
