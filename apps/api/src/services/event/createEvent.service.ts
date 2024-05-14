import prisma from "@/prisma";
import { Event } from "@prisma/client";

interface CreateEventBody extends Omit<Event, "id" | "createdAt" | "updateAt" | "thumbnail"> {
}

export const createEventService = async(body: CreateEventBody, file: Express.Multer.File) => {
    try {

        const { title, price, location, description, limit, start_event, end_event, category, userId } = body;
        const existingTitle = await prisma.event.findFirst({
            where: {title}
        });
        if (existingTitle){
            throw new Error("event already in use")
        }
        const user = await prisma.user.findFirst({ where: {id: Number(userId)} });

        if (!user){
            throw new Error("user not found")
        }
        return await prisma.event.create({
            data: {
                title,
                location,
                description,
                category,
                start_event:new Date(start_event),
                end_event: new Date(end_event),
                price: Number(price),
                limit: Number(limit),
                // booked: Number(booked),
                //  is_free: Boolean(is_free),
                thumbnail: `/images/${file.filename}`,
                userId: Number(userId)
            }
        })
    } catch (error) {
        throw(error)
    }
}