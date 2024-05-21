export interface IReview {
    id: number;
    review: string;    
    rating: number;
    userId?: number;
    eventId?: number;
}

export interface IFormCreateReview {
    review: string;    
    rating: number;
    userId?: number;
    eventId?: number;
}