import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, restaurant, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_PORT !== '587', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Lead: ${name} from ${restaurant || 'a restaurant'} - DineVibe Studio`,
      text: `
You have a new contact form submission on DineVibe Studio:

Name: ${name}
Email: ${email}
Restaurant: ${restaurant || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission - DineVibe Studio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Restaurant:</strong> ${restaurant || 'N/A'}</p>
          <hr/>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({ success: true, messageId: info.messageId }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
