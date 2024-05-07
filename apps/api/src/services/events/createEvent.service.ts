
import prisma from "../../prisma"
import { Event } from "@prisma/client";

export const createEventsService = async (body: Omit<Event, "id">) => {
    try {
        const {title, slug, price, location, description, types, limit, booked, start_event, end_event, category, userId} = body;
        const newEvent = await prisma.event.create({
            data: {...body}
        })
        return {
            message: "create event success",
            data: newEvent,
        }
    } catch (error) {
        throw error
    }
}