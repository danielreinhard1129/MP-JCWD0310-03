import Marquee from "react-fast-marquee";
import EventCard from "./EventCard";

const Testi = () => {
  return (
    <div className="mx-auto mt-3 flex h-[450px] max-w-[390px] items-center bg-[#18181A] p-4 md:max-w-full">
      <div className="mx-auto md:max-w-[1100px]">
        <h1 className="text-[20px] text-[#8A8A8A]">Latest events</h1>
        <p className="mb-2 text-[11px] text-[#8A8A8A]">
          "Explore diverse event categories, catering to every interest and
          occasion, ensuring something for everyone."
        </p>
        <Marquee
          speed={50}
          className="mx-auto flex max-w-[350px] gap-3 md:max-w-[1100px] "
        >
          <EventCard />
          <EventCard />
          <EventCard />
        </Marquee>
      </div>
    </div>
  );
};

export default Testi;

{
  /* <Card className="max-w-[500px] h-[330px] mx-auto border border-black ">
  <Image
    src="/foodevent.jpg"
    alt="food"
    width={330}
    height={50}
    className="mx-auto p-3 rounded-lg"
  />
  <div className="flex justify-between p-1">
    <h1 className="font-bold text-[15px]">Jakarta Music Event</h1>
    <h1 className="font-bold text-[15px]">Music</h1>
  </div>
  <div className="flex gap-2 p-3">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
    </Avatar>
    <h1>Javanaction event planner</h1>
  </div>
  <div className="flex gap-2 p-1">
    <CalendarDays size={15} />
    <h3 className="font-bold text-[10px]">04 Sept 2024</h3>
  </div>
  <div className="flex gap-2 p-1">
    <MapPin size={15} />
    <h3 className="font-bold text-[10px]">Jakarta, Indonesia</h3>
  </div>
</Card> */
}
