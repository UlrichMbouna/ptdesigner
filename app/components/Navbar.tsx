"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { label: "Accueil", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "CV", href: "/cv" },
        { label: "Services", href: "#services" },
    ];

    const getLinkClass = (href: string) => {
        const isActive = href === pathname;
        return `${isActive ? "text-primary font-bold border-b-2 border-secondary-container pb-1" : "text-on-surface-variant hover:text-primary"} transition-colors font-button text-button`;
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
            <nav className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
                <div className="text-headline-md font-headline-md text-primary tracking-tight">Design Excellence</div>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-button text-button active:scale-95 transition-all duration-300 hover:opacity-80">
                    Me Contacter
                </button>
            </nav>
        </header>
    );
}
