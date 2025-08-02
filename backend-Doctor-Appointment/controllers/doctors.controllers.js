import { Doctor } from "../models/doctorSchema.js";
import ExpressError from "../utils/errorhandler.js";


//----> Create Doctor
export const createDoctors = async (req, res) => {
    
    const { name, email, specialization, contact } = req.body;

    if (!name || !email || !specialization || !contact) {
        throw new ExpressError(400, "All fields are required.");
    }

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
        throw new ExpressError(400, "Doctor already registered!");
    }

    const doctor = await Doctor.create({ name, email, specialization, contact });

    res.status(201).json({
        success: true,
        message: "Doctor registered successfully!",
        doctor,
    });
};

//----> Get all Doctors
export const getDoctors = async (req, res) => {
    const allDoctors = await Doctor.find();

    if (!allDoctors.length) {
        throw new ExpressError(404, "No doctors found.");
    }

    res.status(200).json({
        success: true,
        allDoctors,
    });
};

//----> Get Specific Doctor
export const getSpecificDoctor = async (req, res) => {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    if (!doctor) {
        throw new ExpressError(404, "Doctor not found.");
    }

    res.status(200).json({
        success: true,
        doctor,
    });
};

//----> Update Doctor
export const updateDoctor = async (req, res) => {
    const { id } = req.params;
    const { name, email, specialization, contact } = req.body;

    const doctor = await Doctor.findById(id);
    if (!doctor) {
        throw new ExpressError(404, "Doctor not found.");
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
        id,
        { name, email, specialization, contact },
        { new: true, runValidators: true }
    );

    res.status(200).json({
        success: true,
        message: "Doctor updated successfully.",
        updatedDoctor,
    });
};

//----> Delete Doctor
export const deleteDoctor = async (req, res) => {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    if (!doctor) {
        throw new ExpressError(404, "Doctor not found.");
    }

    const deleted = await Doctor.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        message: "Doctor deleted successfully.",
        deleted,
    });
};
