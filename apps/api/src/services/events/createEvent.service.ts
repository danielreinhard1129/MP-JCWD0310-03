
import prisma from "../../prisma"
import { Event } from "@prisma/client";

interface CreateEventBody extends Omit<Event, "id" | "updateAt" | "createAt" | "thumbnail">{}


export const createEventsService = async (body: CreateEventBody, file: Express.Multer.File) => {
    try {
        const {title, userId} = body;
        const existingTitle = await prisma.event.findFirst({
            where: {title},
        })

        if(existingTitle){
            throw new Error("title event already in use")
        }
        const user = await prisma.user.findFirst({where: {id:Number(userId)}})
        if (!user){
            throw new Error("user not found")
        }
        return await prisma.event.create({
            data: {
                ...body,
                thumbnail: `/images/${file.filename}`,
                userId: Number(userId)
            }
        })
    } catch (error) {
        throw error;
    }

        
}