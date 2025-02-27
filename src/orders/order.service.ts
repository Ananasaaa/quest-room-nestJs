import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/order.dto';
import { Order } from './entities/order.model';

@Injectable()
export class OrderService {
  private readonly orders: Order[] = [];

  create(createDto: CreateDto): Order {
    const newOrder: Order = {
      id: this.orders.length + 1,
      ...createDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
