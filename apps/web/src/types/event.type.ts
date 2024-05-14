import { IUser } from "./user.type";

export interface IEvent {
    id: number;
    title: string;
    price: number;
    location: string;
    description: string;
    limit: number;
    booked?: number;
    is_free?: boolean;
    start_event: string;
    end_event: string;
    category: string;
    userId: number;
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;

    user: IUser
}

export interface IFromCreateEvent {
    title: string;
    price: number;
    location: string;
    description: string;
    limit: number;
    start_event: Date;
    end_event: Date;
    category: string;
    userId: number;
    thumbnail: File[];
}