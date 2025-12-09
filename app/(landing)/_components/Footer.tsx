export default function Footer() {
    return (
        <footer className="py-12 bg-slate-50 dark:bg-evo-soft border-t border-slate-200 dark:border-white/5 transition-colors">
            <div className="container-evo flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-text-muted">
                <p>© EVORIX 2025 — Erick D. Todos los derechos reservados.</p>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                    Política de Privacidad
                </a>
            </div>
        </footer>
    );
}
