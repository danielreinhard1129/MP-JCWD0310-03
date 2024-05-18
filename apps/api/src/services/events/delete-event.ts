// import prisma from "@/prisma";
// import { NextFunction, Request, Response } from "express";

// export const deleteEventService = async (id: number) => {
//     try {
//         const event = await  prisma.event.findFirst({
//             where: {id},
//         });

//         if(!event){
//             throw new Error("invalid event id")
//         }
//         await prisma.event.update({
//             where: {id},
//             data: {deletedAt: new Date()}
//         })
//     } catch (error) {
//         throw(error)
//     }
// }