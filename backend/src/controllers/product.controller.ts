import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({ orderBy: { name: 'asc' } });
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, stock } = req.body;
  const newProduct = await prisma.product.create({ data: { name, price, stock } });
  res.status(201).json(newProduct);
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  const updated = await prisma.product.update({
    where: { id },
    data: { name, price, stock }
  });

  res.json(updated);
};

export const toggleProductActive = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

  const updated = await prisma.product.update({
    where: { id },
    data: { active: !product.active }
  });

  res.json(updated);
};
