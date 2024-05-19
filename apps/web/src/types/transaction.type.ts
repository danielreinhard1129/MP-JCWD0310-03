export interface Transaction {
  id: number;
  userId: number;
  eventId: number;
  total_price: number;
  point_used: number;
  qty: number;
  status: string;
  approval_image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormTransaction {
  userId: number;
  eventId: number;
  total_price: number;
  point_used: number;
  qty: number;
  status: string;
  approval_image: string;
}
