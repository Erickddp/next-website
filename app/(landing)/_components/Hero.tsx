"use client";

import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/utils";

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-evo">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container-evo relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                            La libertad de <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient-x">
                                ser uno mismo
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-600 dark:text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                            [NOMBRE] entendió que la verdadera autonomía nace cuando dejas de actuar y empiezas a ser. <span className="font-semibold text-slate-900 dark:text-white">Esta es su búsqueda.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                            <button
                                onClick={() => scrollToId("servicios")}
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-evo bg-primary rounded-full hover:bg-primary-soft focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-evo shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all cursor-pointer"
                            >
                                Continuar
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToId("contacto")}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 dark:text-text-main hover:text-primary dark:hover:text-primary transition-colors focus:outline-none cursor-pointer"
                            >
                                Contacto
                            </button>
                        </div>
                    </div>

                    {/* Visual Placeholder for Desktop */}
                    <div className="hidden lg:flex items-center justify-center relative">
                        <div className="w-full aspect-square max-w-md bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                        {/* Abstract Graphic or Illustration could go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}

