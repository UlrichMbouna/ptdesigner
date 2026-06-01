export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline-variant/30">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 max-w-container-max mx-auto">
                <div className="mb-8 md:mb-0">
                    <div className="text-headline-sm font-headline-sm text-gradient-gold mb-2">Design Excellence</div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Design Excellence. Tous droits réservés.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex gap-6">
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Mentions Légales</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Politique de Confidentialité</a>
                    </div>
                    <div className="flex gap-6 border-l border-outline-variant/30 pl-8">
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm font-semibold" href="#">LinkedIn</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm font-semibold" href="#">Dribbble</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
