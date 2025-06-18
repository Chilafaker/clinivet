import { Request, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    orderBy: { name: 'asc' }
  });
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, role } = req.body;

  if (!['ADMIN', 'VET', 'ASSISTANT'].includes(role)) {
    return res.status(400).json({ error: 'Rol inválido' });
  }

  const newUser = await prisma.user.create({
    data: { name, email, role: role as Role }
  });

  res.status(201).json(newUser);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, role } = req.body;

  const updated = await prisma.user.update({
    where: { id },
    data: { name, email, role: role as Role }
  });

  res.json(updated);
};
