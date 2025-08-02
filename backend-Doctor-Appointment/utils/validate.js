import * as z from "zod";

export const doctorSchemaValidate=z.object({
    name: z
        .string({ required_error: "name is required" })
        .trim()
        .min(3, { message: "name must be at least 3 characters" })
        .max(255, { message: "name cannot exceed 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email cannot exceed 255 characters" }),

     specialization: z
        .string({ required_error: "specialization is required" })
        .trim()
        .min(2, { message: "not a valid specialization name" }),
    contact: z
        .string({ required_error: "Phone number is required" }) // Store as a string
        .trim()
        .length(10, { message: "Phone number must be exactly 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),

    
});

// zod validation 
// for more about zod -----> https://zod.dev/