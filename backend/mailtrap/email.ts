import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendverificationemail = async (email: string, verificationtoken: string) => {
  const recipient = [{ email }];
    try {
        const res = await client.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email',
            html:htmlContent.replace("{verificationToken}", verificationtoken),
            category: 'Email Verification'
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification")

    }
};


    export const sendWelcomeEmail = async (email:string,name:string) => {
        const recipients = [{email}]

        try {
          const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Welcome to Fast-Bites",
            html:generateWelcomeEmailHtml(name),
            template_variables: {
                compnayname:"Fast-Bites",
                name:name
            }
          })
        } catch (error) {
          console.log(error);
          throw new Error("Failed to send welcome email");
        }
      }

      export const sendpaaswordresetemail = async (email:string,link:string) => {
        const recipients = [{email}]

        try {
          const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Reset your password",
            html:generatePasswordResetEmailHtml(link),
            category:"password reset",
          })
        } catch (error) {
          console.log(error);
          throw new Error("Failed to send reset email");
        }
      }

      export const sendResetsuccessEmail = async (email:string) => {
        const recipients = [{email}]

        try {
          const res = await client.send({
            from: sender,
            to: recipients,
            subject: "Password reset successful",
            html:generateResetSuccessEmailHtml(),
            category:"password reset",
          })
        } catch (error) {
          console.log(error);
          throw new Error("Failed to send reset email");
        }
    }
