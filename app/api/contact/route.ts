import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.resend_key);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Top Docz <contact@topdocz.uk>',
      to: 'contact@topdocz.uk',
      replyTo: email,
      subject: `New Order Request: ${service}`,
      html: `
        <h1>New Order Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('Resend API Response:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
