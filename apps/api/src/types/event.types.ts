export interface IEvent {
    id: number;
    title: string;
    slug: string;
    price: number;
    location: string;
    description: string;
    types: string;
    limit: string;
    booked: boolean;
    startEvent : string;
    endEvent: string;
    category: string;
}