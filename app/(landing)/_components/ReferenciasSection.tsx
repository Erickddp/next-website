import { Quote } from "lucide-react";

export default function ReferenciasSection() {
    const testimonials = [
        {
            name: "Voz #1",
            role: "Comercio",
            text: "Entendí que perder el molde puede ser ganar un camino propio."
        },
        {
            name: "Voz #2",
            role: "Salud",
            text: "El ruido desapareció. Ahora solo queda lo importante."
        },
        {
            name: "Voz #3",
            role: "Industria",
            text: "No era caos, era falta de dirección. Ahora veo el norte."
        },
        {
            name: "Voz #4",
            role: "Privado",
            text: "Simplificar no es restar, es quedarse con la esencia."
        },
        {
            name: "Voz #5",
            role: "Ventas",
            text: "Buscaba una solución, encontré una pausa necesaria."
        },
        {
            name: "Voz #6",
            role: "Consultoría",
            text: "Crear desde cero requiere valentía y un buen mapa."
        }
    ];

    return (
        <section id="referencias" className="section-padding bg-slate-50 dark:bg-evo-soft transition-colors">
            <div className="container-evo">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        Reflejos
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

