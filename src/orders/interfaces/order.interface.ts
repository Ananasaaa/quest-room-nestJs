export interface CreateOrder {
  name: string;
  phone: string;
  count: number;
}

export interface Order extends CreateOrder {
  id: number;
}
