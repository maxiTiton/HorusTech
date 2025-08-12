import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contacto</h2>
        <p className="mt-3 text-foreground/80">¿Tenés una idea o proyecto? Escribime y lo charlamos.</p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}