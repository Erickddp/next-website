"use client";

import { useState } from "react";
import { ChevronDown, BookOpen, Code2, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AcordeonKey = "formacion" | "especializacion" | "proyectos";

const ITEMS: { key: AcordeonKey; title: string; content: string; icon: React.ReactNode }[] = [
    {
        key: "formacion",
        title: "Formación clave",
        content: "Contabilidad y fiscalidad mexicana. Excel avanzado y Power Query. Introducción a Business Intelligence.",
        icon: <BookOpen className="w-5 h-5" />
    },
    {
        key: "especializacion",
        title: "Especialización técnica",
        content: "Automatización con Python y TypeScript. Validadores y gestores de datos fiscales. Modelos de proyección de impuestos.",
        icon: <Code2 className="w-5 h-5" />
    },
    {
        key: "proyectos",
        title: "Proyectos",
        content: "EVOAPP: sistema operativo personal financiero. EVORIX Tools: validadores y scripts contables. Laboratorios de datos y ciberseguridad básica.",
        icon: <Rocket className="w-5 h-5" />
    },
];

export default function ReconocimientosSection() {
    const [activeItem, setActiveItem] = useState<AcordeonKey | null>("formacion");

    const toggleItem = (key: AcordeonKey) => {
        setActiveItem(activeItem === key ? null : key);
    };

    return (
        <section id="reconocimientos" className="section-padding bg-slate-50 dark:bg-evo-soft transition-colors">
            <div className="container-evo">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left: Intro & Stats */}
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Formación y Reconocimientos
                        </h2>
                        <p className="text-xl text-primary dark:text-primary font-medium mb-6">
                            Aprendizaje continuo, especialización técnica y proyectos reales.
                        </p>
                        <p className="text-slate-600 dark:text-text-muted mb-8 leading-relaxed">
                            He construido mi perfil combinando contabilidad, automatización y análisis de datos.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                            <div className="text-center p-4 bg-white dark:bg-evo rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">40+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">cursos y certificaciones</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-evo rounded-xl shadow-sm border border-slate-100 dark:border-white/5">
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">10+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">proyectos de automatización</div>
                            </div>
                            <div className="text-center p-4 bg-white dark:bg-evo rounded-xl shadow-sm border border-slate-100 dark:border-white/5 col-span-2 sm:col-span-1">
                                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">6+</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">años en contabilidad</div>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center text-primary dark:text-primary font-semibold hover:text-primary-soft transition-colors"
                        >
                            Ver portafolio completo
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-7 space-y-4">
                        {ITEMS.map((item) => (
                            <div
                                key={item.key}
                                className={cn(
                                    "bg-white dark:bg-evo rounded-2xl overflow-hidden shadow-sm border transition-all duration-300",
                                    activeItem === item.key
                                        ? "border-primary/50 shadow-md ring-1 ring-primary/20"
                                        : "border-slate-200 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30"
                                )}
                            >
                                <button
                                    onClick={() => toggleItem(item.key)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            activeItem === item.key ? "bg-primary/10 dark:bg-primary/20" : "bg-slate-100 dark:bg-white/5"
                                        )}>
                                            <span className="text-primary dark:text-primary">{item.icon}</span>
                                        </div>
                                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={cn("w-5 h-5 text-slate-400 transition-transform duration-300", activeItem === item.key && "transform rotate-180")}
                                    />
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 ease-in-out",
                                        activeItem === item.key ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="p-6 pt-0 text-slate-600 dark:text-text-muted border-t border-slate-100 dark:border-white/5 mt-2">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
