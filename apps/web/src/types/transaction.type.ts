import { IEvent } from "./event.type";
import { IUser } from "./user.type";

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

export interface IEventParticipant {
  id: number;
  userId: number;
  eventId: number;
  user: IUser;
  event: IEvent;
  createdAt: Date;
  updatedAt: Date;
}
