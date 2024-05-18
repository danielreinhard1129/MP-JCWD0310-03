import prisma from "@/prisma";
import { Transaction } from "@prisma/client";


interface CreateTransactionBody extends Omit<Transaction, "id"| "createdAt" | "updatedAt"> {}

export const createTransactionService = async (
    body: CreateTransactionBody,
) => {
    try {
        const { userId, eventId, qty, total_price, point_used } = body;

        const user = await prisma.user.findFirst({
            where: { id: Number(userId)}
        })

        if (!user) {
            throw new Error("user not found")
        }

        const event = await prisma.event.findFirst({
            where: {id: Number(eventId)}
        })

        if(!event){
            throw new Error("event not found")
        }

        const newTransaction = await prisma.transaction.create({
            data: {
                ...body,
                userId: Number(userId),
                eventId: Number(eventId),
                qty: Number(qty),
                total_price: Number(total_price),
                point_used: Number(point_used),
            },
            include: {
                event: true,
                user: true,
            }
        })
        return { data: newTransaction};
    } catch (error) {
        throw error
    }
}

