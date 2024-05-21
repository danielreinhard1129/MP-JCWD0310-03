export interface IPromotion{
    id: number;
    eventId: number;
    userId: number;
    total: number;
    expiredAt: Date;
    limit: number;
}


export interface IFormCreatePromotion {
    eventId: number;
    userId: number;
    total: number;
    expiredAt: string;
    limit: number;
  }
  