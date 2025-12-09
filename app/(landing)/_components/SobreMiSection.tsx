import { Quote } from "lucide-react";

export default function SobreMiSection() {

    return (
        <section id="sobre-mi" className="section-padding bg-white dark:bg-evo transition-colors relative">
            <div className="container-evo">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Placeholder - Abstract representation of 'Erick' */}
                    <div className="order-2 lg:order-1 relative mx-auto lg:mx-0 max-w-md lg:max-w-full w-full">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 dark:bg-evo-soft relative z-10 border border-slate-200 dark:border-white/5 shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                            {/* Abstract avatar placeholder */}
                            <div className="text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-evo text-3xl font-bold shadow-lg">
                                    [N]
                                </div>
                                <p className="text-slate-400 dark:text-slate-500 font-medium">Archivo #001</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-slate-100 dark:border-white/5 rounded-3xl z-0 -z-10" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                            El Origen
                        </h2>
                        <h3 className="text-xl md:text-2xl text-primary dark:text-primary font-medium mb-8">
                            [NOMBRE] rompió las reglas y pagó el precio.
                        </h3>

                        {/* Desktop Text */}
                        <p className="hidden md:block text-lg text-slate-600 dark:text-text-muted leading-relaxed mb-6">
                            Todo comenzó con un error de cálculo. Una desviación que le costó todo a [NOMBRE]. Pero en el fondo del pozo, encontró algo: el código fuente de su propia prisión.
                            EVORIX no es una empresa. Es la filosofía de alguien que aprendió a hackear la vida real. No vendemos servicios; compartimos el mapa de escape que [NOMBRE] trazó con su propia sangre.
                        </p>

                        {/* Mobile Text */}
                        <p className="md:hidden text-lg text-slate-600 dark:text-text-muted leading-relaxed mb-6">
                            [NOMBRE] cayó y se levantó. Ahora comparte las herramientas que forjó en la oscuridad para que otros no tengan que tropezar.
                        </p>

                        <div className="h-1 w-20 bg-primary rounded-full mt-8" />
                    </div>

                </div>
            </div>
        </section>
    );
}
