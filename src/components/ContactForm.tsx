"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo enviar el mensaje");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-sm mb-1 text-gray-dark" htmlFor="name">Nombre</label>
        <input id="name" name="name" required className="w-full rounded-md border border-gray-medium/30 bg-surface/50 px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-gray-dark" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-md border border-gray-medium/30 bg-surface/50 px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-gray-dark" htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" required rows={5} className="w-full rounded-md border border-gray-medium/30 bg-surface/50 px-3 py-2 text-foreground outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50" placeholder="Cuéntanos sobre tu proyecto..." />
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "loading"} className="inline-flex h-10 items-center rounded-md bg-foreground text-background px-4 text-sm font-medium hover:bg-foreground/90 disabled:opacity-60">
          {status === "loading" ? "Enviando…" : "Enviar"}
        </button>
        <a href="mailto:maximot0904@gmail.com" className="text-sm hover:underline">o enviame un email</a>
      </div>

      {status === "success" && (
        <p className="text-sm text-green-600">¡Gracias! Te responderé a la brevedad.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}