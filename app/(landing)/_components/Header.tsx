"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn, scrollToId } from "@/lib/utils";

// Header.tsx - visual update
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check localStorage or system preference
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else if (stored === "light") {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        } else {
            // System pref
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemDark) {
                setIsDark(true);
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        const newVal = !isDark;
        setIsDark(newVal);
        if (newVal) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const id = href.replace("#", "");
        scrollToId(id);
    };

    const navItems = [
        { name: "Inicio", href: "#inicio" },
        { name: "Método", href: "#servicios" },
        { name: "Entorno", href: "#ecosistema" },
        { name: "Voces", href: "#referencias" },
        { name: "Historia", href: "#sobre-mi" },
        { name: "Aprendizajes", href: "#reconocimientos" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 dark:bg-evo/80 backdrop-blur-md transition-colors duration-300">
            <div className="container-evo">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#inicio"
                            onClick={(e) => handleNavClick(e, "#inicio")}
                            className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white hover:text-primary transition-colors cursor-pointer"
                        >
                            EVORIX
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <a
                            href="#contacto"
                            onClick={(e) => handleNavClick(e, "#contacto")}
                            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-evo bg-primary rounded-full hover:bg-primary-soft transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-evo cursor-pointer"
                        >
                            Contacto
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-1 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                            aria-label="Menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden block border-t border-white/10 bg-white dark:bg-evo">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-white/5 rounded-md transition-colors cursor-pointer"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/10">
                            <a
                                href="#contacto"
                                onClick={(e) => handleNavClick(e, "#contacto")}
                                className="flex items-center justify-center w-full px-5 py-3 text-base font-medium text-evo bg-primary rounded-md hover:bg-primary-soft transition-colors cursor-pointer"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
