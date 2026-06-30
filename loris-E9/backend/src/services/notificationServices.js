class NotificationService {

    /**
     * 📲 WHATSAPP MESSAGE (STRUCTURE)
     */
    async sendWhatsApp(phone, message) {

        // Future: integrate Twilio / Meta WhatsApp API

        console.log("WhatsApp sent to:", phone);
        console.log("Message:", message);

        return {
            status: "sent",
            channel: "whatsapp"
        };
    }

    /**
     * 📧 EMAIL NOTIFICATION (STRUCTURE)
     */
    async sendEmail(email, subject, message) {

        // Future: Nodemailer / SendGrid

        console.log("Email sent to:", email);
        console.log(subject);

        return {
            status: "sent",
            channel: "email"
        };
    }
}

export default new NotificationService();