import express from 'express';
import {
  getAllSales,
  getSaleById,
  createSale
} from '../controllers/sale.controller';

const router = express.Router();

router.get('/', getAllSales);
router.get('/:id', getSaleById);
router.post('/', createSale);

export default router;
