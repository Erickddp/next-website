import Header from "./(landing)/_components/Header";
import Hero from "./(landing)/_components/Hero";
import ServiciosSection from "./(landing)/_components/ServiciosSection";
import EcosistemaSection from "./(landing)/_components/EcosistemaSection";
import ReferenciasSection from "./(landing)/_components/ReferenciasSection";
import SobreMiSection from "./(landing)/_components/SobreMiSection";
import ReconocimientosSection from "./(landing)/_components/ReconocimientosSection";
import ContactoSection from "./(landing)/_components/ContactoSection";
import Footer from "./(landing)/_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-evo text-slate-900 dark:text-text-main transition-colors">
      <Header />
      <Hero />
      <ServiciosSection />
      <EcosistemaSection />
      <ReferenciasSection />
      <SobreMiSection />
      <ReconocimientosSection />
      <ContactoSection />
      <Footer />
    </main>
  );
}
