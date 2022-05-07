import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0d69628f9e9ec7",
      pass: "7c75dba5f83a5b"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData): Promise<void> {
        await transport.sendMail({
                from: 'Equipe Feedget <oi@feedget.com>',
                to: 'Paulo Figueredo <paulofigueredo7@gmail.com>',
                subject: subject,
                html: body
            });
    }
}