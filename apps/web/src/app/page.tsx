import EventCarousel from "@/components/event/EventCarousel";
import ListEvent from "@/components/event/ListEvent";
import MarqueeEvent from "@/components/event/MarqueeEvent";
import HeroSection from "@/components/hero/HeroSection";
import AutoComplete from "@/components/pagination/AutoComplete";
import FormReviews from "@/components/reviews/FormReviews";
import ReviewCard from "@/components/reviews/ReviewsCard";

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
