import { neonConfig, PoolConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Product, Cart, Order, OrderItem } from '@prisma/client';
import ws from 'ws';

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Instantiates the Prisma adapter using the Neon PoolConfig to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon({ connectionString } as PoolConfig);

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: Product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: Product) {
          return product.rating.toString();
        },
      },
    },
    cart: {
      itemsPrice: {
        compute(cart: Cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        compute(cart: Cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        compute(cart: Cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        compute(cart: Cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    order: {
      itemsPrice: {
        compute(order: Order) {
          return order.itemsPrice.toString();
        },
      },
      shippingPrice: {
        compute(order: Order) {
          return order.shippingPrice.toString();
        },
      },
      taxPrice: {
        compute(order: Order) {
          return order.taxPrice.toString();
        },
      },
      totalPrice: {
        compute(order: Order) {
          return order.totalPrice.toString();
        },
      },
    },
    orderItem: {
      price: {
        compute(orderItem: OrderItem) {
          return orderItem.price.toString();
        },
      },
    },
  },
});
