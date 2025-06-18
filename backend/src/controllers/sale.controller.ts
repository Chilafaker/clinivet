import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllSales = async (req: Request, res: Response) => {
  const sales = await prisma.sale.findMany({
    include: {
      patient: true,
      items: {
        include: {
          product: true,
          service: true
        }
      }
    },
    orderBy: { date: 'desc' }
  });

  res.json(sales);
};

export const getSaleById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const sale = await prisma.sale.findUnique({
    where: { id },
    include: {
      patient: true,
      items: {
        include: {
          product: true,
          service: true
        }
      }
    }
  });

  if (!sale) return res.status(404).json({ error: 'Venta no encontrada' });

  res.json(sale);
};

export const createSale = async (req: Request, res: Response) => {
  const { total, payment, patientId, items } = req.body;

  const newSale = await prisma.sale.create({
    data: {
      total,
      payment,
      patientId,
      items: {
        create: items.map((item: any) => ({
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          productId: item.productId ?? null,
          serviceId: item.serviceId ?? null
        }))
      }
    },
    include: {
      items: true
    }
  });

  res.status(201).json(newSale);
};
