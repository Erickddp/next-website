import { MessageCircle, Linkedin, Github, ExternalLink } from "lucide-react";

export default function ContactoSection() {
    const contacts = [
        {
            title: "Mensaje Directo",
            text: "Conversar",
            link: "https://wa.me/XXXXXXXXXX",
            icon: <MessageCircle className="w-8 h-8 text-green-500" />
        },
        {
            title: "Perfil",
            text: "Ver perfil",
            link: "#",
            icon: <Linkedin className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Código",
            text: "Explorar repositorios",
            link: "#",
            icon: <Github className="w-8 h-8 text-slate-900 dark:text-white" />
        }
    ];

    return (
        <section id="contacto" className="section-padding bg-white dark:bg-evo transition-colors">
            <div className="container-evo text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-12">
                    Si quieres continuar tu propia historia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {contacts.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-50 dark:bg-evo-soft p-8 rounded-2xl flex flex-col items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 transition-all hover:-translate-y-1 hover:shadow-lg border border-slate-200 dark:border-white/5"
                        >
                            <div className="mb-4 bg-white dark:bg-white/5 p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <div className="flex items-center text-primary dark:text-primary font-medium">
                                {item.text}
                                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
