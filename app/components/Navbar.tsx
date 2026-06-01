"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: "Accueil", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "CV", href: "/cv" },
        { label: "Services", href: "#services" },
    ];

    const getLinkClass = (href: string) => {
        const isActive = href === pathname;
        return `${isActive ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"} transition-colors font-button text-button`;
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
            <nav className="flex justify-between items-center w-full px-6 md:px-margin-desktop max-w-container-max mx-auto h-20">
                {/* Logo */}
                <div className="text-headline-sm md:text-headline-md font-headline-md text-gradient-gold tracking-tight">
                    Design Excellence
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Actions (Desktop & Mobile Toggle) */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-button text-button active:scale-95 transition-all duration-300 hover:opacity-80">
                        Me Contacter
                    </button>

                    {/* Burger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-primary focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-5">
                            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 top-2" : "top-0"}`} />
                            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "top-2"}`} />
                            <span className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 top-2" : "top-4"}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface border-t border-outline-variant ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-4 p-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${getLinkClass(link.href)} text-lg`}
                            onClick={() => setIsOpen(false)} // Ferme le menu au clic
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="sm:hidden w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-button text-button mt-2">
                        Me Contacter
                    </button>
                </div>
            </div>
        </header>
    );
}