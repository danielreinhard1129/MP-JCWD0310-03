export interface IReview {
    id: number;        
    review: string;
    rating: string; 
    userId: number;       
    eventId: number;       
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IFormCreateReview {
    review: string;
    rating: string; 
    userId: number;       
    eventId: number;   
    createdAt: string;
}