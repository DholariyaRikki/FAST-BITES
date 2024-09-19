import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv"
dotenv.config()



export const client = new MailtrapClient({
token: process.env.API_TOKEN!
});

export const sender = {
  email: "fastbites021648@gmail.com",
  name: "Fast-Bites",
};