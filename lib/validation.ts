import { z } from "zod";
export const contactSchema = z.object({name:z.string().min(2,"Please enter your name"),email:z.string().email("Enter a valid email"),projectType:z.string().min(1,"Choose a project type"),message:z.string().min(20,"Tell me a little more (20 characters minimum)")});
export type ContactValues = z.infer<typeof contactSchema>;
