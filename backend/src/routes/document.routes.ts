import express from 'express';
import {
  getDocumentsByPatient,
  createDocument
} from '../controllers/document.controller';

const router = express.Router();

router.get('/:id/documents', getDocumentsByPatient);
router.post('/:id/documents', createDocument);

export default router;
