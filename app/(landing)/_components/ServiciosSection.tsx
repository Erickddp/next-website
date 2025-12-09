"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn, scrollToId } from "@/lib/utils";

type ServicioKey = "asesoria" | "contabilidad" | "automatizacion" | "proyecciones";

const SERVICES: { key: ServicioKey; label: string; title: string; intro: string; bullets: string[]; price?: string; }[] = [
    {
        key: "asesoria",
        label: "El Inicio",
        title: "Mirar de frente",
        intro: "Antes de avanzar, hay que saber dónde estamos. Sin juicios, solo la verdad del momento presente.",
        bullets: [
            "Entender el punto de partida.",
            "Aceptar lo que necesita cambio.",
            "Trazar una ruta honesta."
        ],
        price: "El valor de la claridad."
    },
    {
        key: "contabilidad",
        label: "La Claridad",
        title: "Poner orden",
        intro: "Cuando el ruido baja, las respuestas aparecen. Organizar el pasado es el primer acto de paz.",
        bullets: [
            "Limpiar lo innecesario.",
            "Ordenar cada pieza en su lugar.",
            "Construir una base sólida."
        ]
    },
    {
        key: "automatizacion",
        label: "El Ritmo",
        title: "Soltar el peso",
        intro: "Lo que se repite cansa el espíritu. Dejar que el sistema fluya permite volver a respirar.",
        bullets: [
            "Delegar lo mecánico.",
            "Crear flujos silenciosos.",
            "Recuperar el tiempo perdido."
        ]
    },
    {
        key: "proyecciones",
        label: "La Mirada",
        title: "Ver lejos",
        intro: "No es adivinar, es proyectar luz hacia adelante para caminar con certeza.",
        bullets: [
            "Imaginar escenarios posibles.",
            "Preparar el equipaje necesario.",
            "Avanzar sin miedo."
        ]
    }
];

export default function ServiciosSection() {
    const [activeKey, setActiveKey] = useState<ServicioKey>("asesoria");
    const activeService = SERVICES.find((s) => s.key === activeKey) || SERVICES[0];

    return (
        <section id="servicios" className="section-padding bg-slate-50 dark:bg-evo-soft transition-colors">
            <div className="container-evo">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        El Método
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-text-muted max-w-2xl mx-auto">
                        Pequeñas etapas para recuperar el control.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* List (Tabs) */}
                    <div className="lg:col-span-4 space-y-2">
                        {SERVICES.map((item) => (
                            <div
                                key={item.key}
                                onClick={() => setActiveKey(item.key)}
                                className={cn(
                                    "p-5 rounded-xl cursor-pointer transition-all",
                                    activeKey === item.key
                                        ? "bg-white dark:bg-evo shadow-md ring-1 ring-slate-200 dark:ring-white/10 border-l-4 border-primary"
                                        : "text-slate-500 dark:text-text-muted hover:bg-white/50 dark:hover:bg-white/5 hover:pl-6"
                                )}
                            >
                                <h3 className={cn("font-semibold text-lg", activeKey === item.key ? "text-slate-900 dark:text-white" : "")}>
                                    {item.label}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Detail Panel */}
                    <div className="lg:col-span-8">
                        <div className="bg-white dark:bg-evo rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100 dark:border-white/5 h-full flex flex-col justify-center animate-in fade-in zoom-in duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                {activeService.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-text-muted mb-8 leading-relaxed">
                                {activeService.intro}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {activeService.bullets.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 dark:text-slate-300 text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between pt-8 border-t border-slate-100 dark:border-white/10 gap-6">
                                <div>
                                    {activeService.price ? (
                                        <>
                                            <span className="block text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Intercambio</span>
                                            <span className="text-xl font-bold text-slate-900 dark:text-white">{activeService.price}</span>
                                        </>
                                    ) : (
                                        <span className="text-xl font-bold text-slate-900 dark:text-white">A medida</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => scrollToId("contacto")}
                                    className="inline-flex items-center justify-center px-8 py-4 text-evo bg-primary rounded-xl hover:bg-primary-soft transition-colors font-semibold shadow-lg shadow-primary/20 cursor-pointer"
                                >
                                    Aplicar a tu historia
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
