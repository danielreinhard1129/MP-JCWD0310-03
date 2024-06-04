import EventCarousel from "@/components/event/EventCarousel";
import FormPromotion from "@/components/event/FormPromotion";
import ListEvent from "@/components/event/ListEvent";
import MarqueeEvent from "@/components/event/MarqueeEvent";
import HeroSection from "@/components/hero/HeroSection";
import AutoComplete from "@/components/pagination/AutoComplete";
import TransactionDetail from "@/components/transaction/page";

export default function Home() {
  return (
    <div>
      <AutoComplete />
      <HeroSection />
      <EventCarousel />
      <MarqueeEvent />
      <ListEvent />
      {/* <CityList /> */}
    </div>
  );
}
