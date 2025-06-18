import express from 'express';
import {
  getAllServices,
  createService,
  updateService,
  toggleServiceActive
} from '../controllers/service.controller';

const router = express.Router();

router.get('/', getAllServices);
router.post('/', createService);
router.put('/:id', updateService);
router.patch('/:id/toggle', toggleServiceActive);

export default router;
