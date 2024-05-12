import { User } from "./user.type";

export interface Event {
        id: number;
        title: string;
        slug: string;
        price: number;
        location: string;
        description: string;
        thumbnail: string;
        types: string;
        limit: string;
        booked: boolean;
        start_event : string;
        end_event: string;
        category: string;
        userId: number;
        createdAt: Date;
        updateAt: Date;
        eventParticipant: string;
        review: string;
        discount: number;
        transaction: string;

        user: User
    }

    export interface IFormCreateEvent {
        title: string;
        slug: string;
        price: number;
        location: string;
        description: string;
        thumbnail: File[];
        types: string;
        limit: string;
        booked: boolean;
        start_event : string;
        end_event: string;
        category: string;
        userId: number;
    }