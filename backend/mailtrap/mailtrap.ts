import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"
dotenv.config()



export const client = new MailtrapClient({
token: process.env.API_TOKEN!
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Fast-Bites",
};