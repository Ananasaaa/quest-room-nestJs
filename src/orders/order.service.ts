import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrder, Order } from './interfaces/order.interface';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(orderData: CreateOrder): Promise<Order> {
    const newOrder = await this.prisma.order.create({
      data: orderData,
    });
    return newOrder;
  }
}
