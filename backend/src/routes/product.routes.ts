import express from 'express';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  toggleProductActive
} from '../controllers/product.controller';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.patch('/:id/toggle', toggleProductActive);

export default router;
