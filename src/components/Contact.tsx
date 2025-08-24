import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <SectionHeader title="Contacto" description="¿Tenés una idea o proyecto? Escribime y lo charlamos." />
        <div className="mt-8">
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}