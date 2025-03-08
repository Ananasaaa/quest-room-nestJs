import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrder, Order } from './interfaces/order.interface';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderData: CreateOrder): Promise<Order> {
    return this.orderService.create(orderData);
  }
}
