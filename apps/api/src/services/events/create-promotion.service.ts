import { IFormCreatePromotion } from "@/types/promotion.type";
import prisma from '@/prisma';

export const createPromotionService = async (body: IFormCreatePromotion) => {
    try {
        const promotion = await prisma.voucher.create({
            data: body,
        });
        return promotion
    } catch (error) {
        throw new Error("Could Not Create Promotion")
    }
}