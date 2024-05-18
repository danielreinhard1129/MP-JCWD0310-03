import prisma from "@/prisma";
import { Prisma } from "@prisma/client";

export const getEventByLocationService = async (location: string) => {
    try {
        const whereClause: Prisma.EventWhereInput = {};

        if(location) {
            whereClause.location = {
                contains: String(location)
            }
        }
        

        const result = await prisma.event.findMany({
            where: whereClause,
        })

        if(!result) throw new Error("Location by params not found!")
        return result
    } catch (error) {
        throw error
    }
}