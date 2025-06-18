import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import patientRoutes from './routes/patient.routes';
import consultationRoutes from './routes/consultation.routes';
import vaccineRoutes from './routes/vaccine.routes';
import dewormingRoutes from './routes/deworming.routes';
import bathRoutes from './routes/bath.routes';
import documentRoutes from './routes/document.routes';
import appointmentRoutes from './routes/appointment.routes';
import productRoutes from './routes/product.routes';
import serviceRoutes from './routes/service.routes';
import saleRoutes from './routes/sale.routes';
import followupRoutes from './routes/followup.routes';
import userRoutes from './routes/user.routes';
import clinicSettingsRoutes from './routes/clinicSettings.routes';
import reportRoutes from './routes/report.routes';


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/patients', patientRoutes);
app.use('/api/patients', consultationRoutes);
app.use('/api/patients', vaccineRoutes);
app.use('/api/patients', dewormingRoutes);
app.use('/api/patients', bathRoutes);
app.use('/api/patients', documentRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/followups', followupRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings/clinic', clinicSettingsRoutes);
app.use('/api/reports', reportRoutes);

app.listen(Number(port), () => {
  console.log(`Clinivet API running at http://localhost:${port}`);
});






