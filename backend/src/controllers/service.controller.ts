import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllServices = async (req: Request, res: Response) => {
  const services = await prisma.service.findMany({ orderBy: { name: 'asc' } });
  res.json(services);
};

export const createService = async (req: Request, res: Response) => {
  const { name, price, duration } = req.body;
  const newService = await prisma.service.create({ data: { name, price, duration } });
  res.status(201).json(newService);
};

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, duration } = req.body;

  const updated = await prisma.service.update({
    where: { id },
    data: { name, price, duration }
  });

  res.json(updated);
};

export const toggleServiceActive = async (req: Request, res: Response) => {
  const { id } = req.params;

  const service = await prisma.service.findUnique({ where: { id } });
  if (!service) return res.status(404).json({ error: 'Servicio no encontrado' });

  const updated = await prisma.service.update({
    where: { id },
    data: { active: !service.active }
  });

  res.json(updated);
};
