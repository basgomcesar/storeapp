"use server";
import {prisma} from "@/db/prisma";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

//Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: LATEST_PRODUCTS_LIMIT,
  });

  return convertToPlainObject(data);
}

//Get single product by slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findUnique({
    where: { slug },
  });

  if (!data) {
    throw new Error("Product not found");
  }

  return convertToPlainObject(data);
}
