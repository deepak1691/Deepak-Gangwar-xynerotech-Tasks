import express from 'express';
import { wrapAsync } from '../utils/wrapAsync.js';
import { validate } from '../middlewares/validate.middleware.js';
import { doctorSchemaValidate } from '../utils/validate.js';
import {createDoctors,deleteDoctor,getDoctors,getSpecificDoctor,updateDoctor} from '../controllers/doctors.controllers.js';

const router=express.Router();

router.route("/")
    .post(validate(doctorSchemaValidate), wrapAsync(createDoctors))// Create a Doctor ----> http://localhost:3000/api/v1/doctors
    .get(wrapAsync(getDoctors)); // Get All Doctors ----> http://localhost:3000/api/v1/doctors


// the routes which match with :/id
    router.route("/:id")
    .get(wrapAsync(getSpecificDoctor)) // Get a Doctor by ID  ----> http://localhost:3000/api/v1/doctors/:id
    .put(validate(doctorSchemaValidate),wrapAsync(updateDoctor))  // Update a Doctor   ----> http://localhost:3000/api/v1/doctors/:id
    .delete(wrapAsync(deleteDoctor)); // Delete a Doctor ----> http://localhost:3000/api/v1/doctors/:id

    

export default router;
