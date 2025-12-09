import { Terminal, Database, Cpu, ArrowUpRight } from "lucide-react";

export default function EcosistemaSection() {
    const items = [
        {
            title: "El Núcleo",
            desc: "[NOMBRE] centralizó su existencia aquí. Nada entra ni sale sin permiso.",
            btnText: "Inyectar",
            icon: <Database className="w-8 h-8 text-primary" />
        },
        {
            title: "Los Artefactos",
            desc: "Pequeñas armas para problemas específicos. Eficiencia brutal.",
            btnText: "Desplegar",
            icon: <Terminal className="w-8 h-8 text-accent" />
        },
        {
            title: "Zona Cero",
            desc: "Donde [NOMBRE] prueba lo que podría destruirle o salvarle.",
            btnText: "Entrar",
            icon: <Cpu className="w-8 h-8 text-purple-400" />
        }
    ];

    return (
        <section id="ecosistema" className="section-padding bg-white dark:bg-evo transition-colors relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-evo relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        El Arsenal
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-text-muted max-w-2xl mx-auto">
                        La tecnología que [NOMBRE] usa para doblar las reglas a su favor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-slate-50 dark:bg-evo-soft border border-slate-200 dark:border-white/5 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
                        >
                            <div className="mb-6 bg-white dark:bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 dark:text-text-muted mb-8 leading-relaxed">
                                {item.desc}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center text-primary dark:text-primary font-semibold hover:text-primary-soft transition-colors"
                            >
                                {item.btnText}
                                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
