import express from 'express';
import {
  getBathsByPatient,
  createBath
} from '../controllers/bath.controller';

const router = express.Router();

router.get('/:id/baths', getBathsByPatient);
router.post('/:id/baths', createBath);

export default router;
