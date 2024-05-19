"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useGetEvent from "@/hooks/api/events/useGetEvent";
import { axiosInstance } from "@/lib/axios";
import { RootState } from "@/redux/store";
import { IFormTransaction } from "@/types/transaction.type";
import { appConfig } from "@/utils/config";
import { CalendarDays, LocateIcon, Timer } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { event, loading } = useGetEvent(Number(params.id));
  const { id } = useSelector((state: RootState) => state.user);

  const [qty, setQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  console.log("QTY", qty);
  console.log("TOTAL", totalPrice);

  const formatRupiah = (price: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleIncrementQty = () => {
    setQty((prev) => prev + 1);
    setTotalPrice((prev) => prev + Number(event?.price));
  };

  const handleDicrementQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      setTotalPrice((prev) => prev - Number(event?.price));
    }
  };

  const handleBuyTicket = async () => {
    try {
      const transaction = await axiosInstance.post<IFormTransaction>(
        "/transactions",
        {
          userId: id,
          eventId: event?.id,
          qty,
          total_price: totalPrice,
          point_used: 100,
          approval_image: "",
        },
      );

      console.log("Transaction created:", transaction.data);
      // Redirect or show a success message
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="md:container md:mx-auto md:px-4 md:py-4">
        <div className="md:grid md:grid-cols-3 md:gap-3">
          <div className="relative col-span-2  h-[200px] overflow-hidden md:h-[400px] md:rounded-md">
            <Image
              src={`${appConfig.baseUrl}/assets${event?.thumbnail}`}
              alt="thumbnail"
              className="max-w-[100%] object-cover"
              fill
            />
          </div>
          {/* main */}
          <div className="space-y-2 rounded-lg px-3 py-3 shadow-2xl md:sticky md:top-4 md:space-y-3 md:bg-[##f5f5f5] md:p-7">
            <Badge className="bg-[#e94f37]"> {event?.category}</Badge>
            <h1 className="text-lg font-bold text-[#393e41]">{event?.title}</h1>
            <div className="flex items-center gap-3">
              <CalendarDays size={18} color="gray" />
              <p className="text-sm">06 Jun - 07 Jun 2024</p>
            </div>
            <div className="flex items-center gap-3">
              <Timer size={18} color="gray" />
              <p className="text-sm">14.00 - 23.00 WITA</p>
            </div>
            <div className="flex items-center gap-3">
              <LocateIcon size={18} color="gray" />
              <p className="text-sm">{event?.location}</p>
            </div>
            <hr className="border-b-1 border border-gray-400" />
            <h3>Organized by</h3>
            <h3 className="font-bold">{event?.user.username}</h3>
            <hr className="border-b-1 border border-gray-400" />
            <h1 className="hidden font-bold md:block">
              {formatRupiah(event?.price)}
            </h1>
            <div>
              <h1>{qty}</h1>
              <button onClick={handleIncrementQty}>+</button>
              <button onClick={handleDicrementQty} disabled={qty === 1}>
                -
              </button>
            </div>
            <h1>Total price: {formatRupiah(totalPrice)}</h1>
            <p>event: {event?.id}</p>
            <p>user: {id}</p>
            <Button
              className="hidden w-full border border-black bg-white px-2 text-[#393e41] hover:bg-[#e94f37] hover:text-white md:block"
              onClick={handleBuyTicket}
            >
              Buy Ticket
            </Button>
            <h1 className="text-lg font-semibold md:hidden">Description</h1>
            <p className="md:hidden">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              accusamus praesentium quasi nobis, minus ratione id vitae. Sed
              incidunt expedita soluta cum voluptatibus ipsum! Quae neque amet
              mollitia. Quos, magni. Labore unde tempora optio illo aspernatur
              nobis modi sapiente nisi facere quasi? Blanditiis ab ex aperiam
              facere voluptates voluptate, hic aut veniam excepturi harum
              tempora, pariatur, debitis nisi cum fuga?
            </p>
          </div>
          {/* end main */}

          {/* md desc */}
          <div className="hidden max-w-full md:col-span-2 md:block md:space-y-4">
            <h1 className="text-lg font-bold">Description</h1>
            <p className="max-w-full text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              doloremque cumque fuga magnam. Debitis ratione tempora qui
              necessitatibus! Pariatur dolorum veritatis libero aut, inventore
              nihil dicta consequatur? Esse, commodi alias. Fuga voluptatibus
              expedita eos? Recusandae quae vero blanditiis iure quod? Harum
              unde quos voluptatem excepturi ipsum nesciunt sint dolorum
              eligendi modi vero in dolores, temporibus aut ducimus incidunt
              aperiam non? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi repellendus sint porro itaque labore doloribus
              praesentium nulla impedit rerum ea, non nemo! Vero deleniti natus
              pariatur omnis accusantium fugiat quasi. Necessitatibus tempora
              corporis, quidem rerum sunt assumenda quos iusto dolorem.
              Consequuntur tempora, nemo at nihil explicabo dolore possimus amet
              rerum ullam fugiat quo culpa, minus obcaecati voluptatibus
              eligendi, aspernatur dolores.
            </p>
          </div>
          {/* end md desc */}

          {/* button */}
          <div className="md:hidden">
            <div className="fixed bottom-0 flex w-full items-center justify-between bg-white p-4 ">
              <div className="px-2">
                <h3 className="text-base text-[#393e41]">Price</h3>
                <h1 className="font-semibold text-[#393e41]">
                  {formatRupiah(event?.price)}
                </h1>
              </div>
              <Button className="w-[60%] border border-black bg-white px-2 text-[#393e41] hover:bg-[#e94f37] hover:text-white">
                Buy Ticket
              </Button>
            </div>
          </div>

          {/* end button */}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;

// <div className="w-full my-3">
//   <div className="md:max-w-[85%] mx-auto">
//     <h1 className="badge badge-lg badge-primary text-white text-sm p-4">
//       Music
//     </h1>

//     {/* title, image, detail  */}
//     <h1>Baku Hantam Jogja</h1>
//     <div className="mt-3 flex">
//       <img src="/evt.jpg" className="w-[70%] h-[300px]" />

//       <div className="px-[5%] w-[500px]">
//         <h1 className="font-bold">Detail Event</h1>
//         <div className="flex items-center h-[100px] gap-3">
//           <Calendar />
//           <div className="">
//             <h4>Date</h4>
//             <h3 className="font-bold">10 May 2024</h3>
//           </div>
//         </div>

//         <div className="flex items-center h-[100px] gap-3">
//           <Hourglass />
//           <div className="">
//             <h4>Time</h4>
//             <h3 className="font-bold">20:00 - 22:00</h3>
//           </div>
//         </div>

//         <div className="flex items-center h-[100px] gap-3">
//           <Locate />
//           <div className="">
//             <h4>Location</h4>
//             <h3 className="font-bold">Surabaya</h3>
//           </div>
//         </div>
//         <button className="btn btb-primary btn-md ">Buy ticket</button>
//       </div>
//     </div>
//     {/* end title, image, detail  */}
//     <h1>Penyelenggara</h1>
//     <h1>Jogja Event Community</h1>
//   </div>
// </div>
