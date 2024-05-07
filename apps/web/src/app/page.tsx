import AccordionPage from "@/components/AccordionPage";
import CategoryList from "@/components/CategoryList";
import CityList from "@/components/CityList";
import Discovery from "@/components/Discovery";
import EventCard from "@/components/EventCard";
import Jumbotron from "@/components/Jumbotron";
import ListEvent from "@/components/ListEvent";
import Testi from "@/components/Testi";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <CategoryList />
      <Discovery />
      <Testi />
      <ListEvent />
      <CityList />
      {/* <AccordionPage />  */}
    </div>
  );
}
