"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePatientStatus = exports.updatePatient = exports.createPatient = exports.getPatientById = exports.getAllPatients = void 0;
const prisma_1 = require("../utils/prisma");
const getAllPatients = async (_req, res) => {
    const patients = await prisma_1.prisma.patient.findMany();
    res.json(patients);
};
exports.getAllPatients = getAllPatients;
const getPatientById = async (req, res) => {
    const { id } = req.params;
    const patient = await prisma_1.prisma.patient.findUnique({ where: { id } });
    if (!patient)
        return res.status(404).json({ error: 'Paciente no encontrado' });
    res.json(patient);
};
exports.getPatientById = getPatientById;
const createPatient = async (req, res) => {
    const data = req.body;
    const newPatient = await prisma_1.prisma.patient.create({ data });
    res.status(201).json(newPatient);
};
exports.createPatient = createPatient;
const updatePatient = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await prisma_1.prisma.patient.update({ where: { id }, data });
    res.json(updated);
};
exports.updatePatient = updatePatient;
const updatePatientStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await prisma_1.prisma.patient.update({ where: { id }, data: { status } });
    res.json(updated);
};
exports.updatePatientStatus = updatePatientStatus;
