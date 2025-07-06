import { z } from "zod";
import { formatNumber } from "./utils";

const currencyRegex = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumber(Number(value))),
    "Price must be a valid number with up to two decimal places"
  );

//Schema for inserting a products
export const insertProductSchema = z.object({
  name: z
    .string()
    .min(3, "Name is required and must be at least 3 characters long"),
  slug: z
    .string()
    .min(3, "Slug is required and must be at least 3 characters long"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  description: z
    .string()
    .min(10, "Description is required and must be at least 10 characters long"),
  stock: z.coerce.number().min(0, "Stock must be a non-negative number"),
  images: z.array(z.string()).min(1, "At least one image is required"),
  isFeatured: z.boolean().optional(),
  banner: z.string().nullable().optional(),
  price: currencyRegex,
});
