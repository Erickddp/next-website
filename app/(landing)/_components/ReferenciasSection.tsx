import { Quote } from "lucide-react";

export default function ReferenciasSection() {
    const testimonials = [
        {
            name: "Sujeto de prueba #1",
            role: "Sector: Comercio",
            text: "Antes veía números, ahora veo la matriz. [NOMBRE] me enseñó a leer entre líneas."
        },
        {
            name: "Sujeto de prueba #2",
            role: "Sector: Salud",
            text: "El sistema silenció el ruido. Ahora puedo escuchar lo que realmente importa."
        },
        {
            name: "Sujeto de prueba #3",
            role: "Sector: Industrial",
            text: "Pensé que el caos era inevitable. [NOMBRE] demostró que era una elección."
        },
        {
            name: "Sujeto de prueba #4",
            role: "Sector: Privado",
            text: "La automatización no fue solo técnica, fue liberación espiritual."
        },
        {
            name: "Sujeto de prueba #5",
            role: "Sector: Ventas",
            text: "Reducir la fricción fue el primer paso para salir del pozo."
        },
        {
            name: "Sujeto de prueba #6",
            role: "Sector: Consultoría",
            text: "No contraté un servicio, adquirí una nueva forma de pensar."
        }
    ];

    return (
        <section id="referencias" className="section-padding bg-slate-50 dark:bg-evo-soft transition-colors">
            <div className="container-evo">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Ecos de los Testigos
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-evo p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-white/5 flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 dark:bg-white/10 group-hover:bg-primary transition-colors" />
                            <Quote className="w-8 h-8 text-primary/30 mb-4" />
                            <p className="text-slate-600 dark:text-text-muted mb-6 flex-grow italic leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="mt-auto pl-2 border-l-2 border-slate-100 dark:border-white/10">
                                <p className="font-bold text-slate-900 dark:text-white">
                                    {t.name}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-500">
                                    {t.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

