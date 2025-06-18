import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSalesSummary = async (_: Request, res: Response) => {
  const sales = await prisma.sale.groupBy({
    by: ['payment'],
    _sum: { total: true },
    _count: true
  });

  res.json(sales);
};

export const getTopProducts = async (_: Request, res: Response) => {
  const result = await prisma.saleItem.groupBy({
    by: ['productId'],
    _sum: { quantity: true },
    orderBy: { _sum: { quantity: 'desc' } },
    take: 5
  });

  const products = await Promise.all(
    result.map(async (r) => ({
      product: await prisma.product.findUnique({ where: { id: r.productId! } }),
      quantity: r._sum.quantity
    }))
  );

  res.json(products);
};

export const getTopServices = async (_: Request, res: Response) => {
  const result = await prisma.saleItem.groupBy({
    by: ['serviceId'],
    _sum: { quantity: true },
    orderBy: { _sum: { quantity: 'desc' } },
    take: 5
  });

  const services = await Promise.all(
    result.map(async (r) => ({
      service: await prisma.service.findUnique({ where: { id: r.serviceId! } }),
      quantity: r._sum.quantity
    }))
  );

  res.json(services);
};

export const getAppointmentStatus = async (_: Request, res: Response) => {
  const result = await prisma.appointment.groupBy({
    by: ['status'],
    _count: true
  });

  res.json(result);
};

export const getActivePatientsCount = async (_: Request, res: Response) => {
  const total = await prisma.patient.count({
    where: { status: 'ACTIVE' }
  });

  res.json({ total });
};
