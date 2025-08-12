import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getEnv(name: string, optional = false) {
  const value = process.env[name];
  if (!value && !optional) throw new Error(`Falta variable de entorno: ${name}`);
  return value || "";
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST"),
      port: Number(getEnv("SMTP_PORT")),
      secure: false,
      auth: {
        user: getEnv("SMTP_USER"),
        pass: getEnv("SMTP_PASS"),
      },
    });

    const to = getEnv("CONTACT_TO");

    await transporter.sendMail({
      from: `Portfolio <${getEnv("SMTP_FROM", true) || getEnv("SMTP_USER")}>`,
      to,
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error interno";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}