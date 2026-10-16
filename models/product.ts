import { z } from 'zod';

// what GET /products/id returns
export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;


export interface NewProduct {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}