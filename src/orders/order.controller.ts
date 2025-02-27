import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateDto } from './dto/order.dto';
import { Order } from './entities/order.model';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createDto: CreateDto): Order {
    return this.orderService.create(createDto);
  }
}
