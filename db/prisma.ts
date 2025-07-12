import { neonConfig, PoolConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Product } from '@prisma/client';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString } as PoolConfig);

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
  },
});
