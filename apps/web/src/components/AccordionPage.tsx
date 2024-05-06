import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionPage = () => {
  return (
    <div className="bg-black py-4">
      <h1 className=" text-center text-[20px] font-bold text-[#9F9FA8]">
        All of your questions answered here.
      </h1>
      <Accordion type="single" collapsible className="w-full p-3 ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm text-[#9F9FA8]">
            How do I create an event on Eventify?
          </AccordionTrigger>
          <AccordionContent className="text-white">
            To create an event on Eventify, simply navigate to the "Create
            Event" section on the dashboard. Fill in the necessary details such
            as event name, date, time, location, and any additional information
            you want to include. Once completed, click "Submit" to publish your
            event on the platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm text-[#9F9FA8]">
            Can I sell tickets for my event through Eventify?
          </AccordionTrigger>
          <AccordionContent className="text-white">
            Yes, Eventify offers a seamless ticketing solution for event
            organizers. After creating your event, you can choose to enable
            ticket sales. Set the ticket prices, availability, and any discounts
            or promotions you'd like to offer. Attendees can then purchase
            tickets directly through the Eventify platform.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm text-[#9F9FA8]">
            How can I promote my event on Eventify?
          </AccordionTrigger>
          <AccordionContent className="text-white">
            Eventify provides various promotional tools to help you reach your
            target audience. You can utilize features such as event listings,
            email newsletters, social media integration, and targeted
            advertising options. Additionally, you can leverage Eventify's
            network of users and partners to increase visibility for your event.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-sm text-[#9F9FA8]">
            What support is available if I encounter issues?
          </AccordionTrigger>
          <AccordionContent className="text-white">
            If you encounter any issues while using Eventify, we're here to
            help! Our support team is available via email, live chat, and phone
            during business hours to assist you with any questions or technical
            difficulties you may have. Additionally, you can refer to our
            comprehensive knowledge base and tutorials for self-help resources.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionPage;
