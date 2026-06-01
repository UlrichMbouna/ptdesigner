import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Design Excellence",
  description: "Curriculum Vitae d'un Senior UI/UX Designer.",
};

export default function CVPage() {
  return (
    <main className="pt-20 bg-surface text-on-surface selection:bg-secondary-container/30">
      <section className="mesh-gradient py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="" id="hero-text">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md mb-6">
              PARCOURS PROFESSIONNEL
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-tight">
              Concevoir des écosystèmes numériques avec une <span className="text-primary">précision premium.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Expert en design stratégique, je transforme des visions complexes en interfaces intuitives et performantes, en alliant esthétique de luxe et rigueur technologique.
            </p>
            <div className="flex gap-4">
              <button type="button" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-button text-button flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
                Télécharger CV <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[32px] overflow-hidden shadow-2xl relative z-10">
              <img
                alt="Portrait Designer"
                className="w-full h-full object-cover"
                data-alt="A professional, high-end portrait of a Lead Product Designer in a modern, minimalist studio. The lighting is soft and cinematic, with a high-key blue and gold color palette that matches the brand identity. The background is a sophisticated architectural space with glass partitions and subtle warm glows. The overall mood is confident, calm, and intellectually premium."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmwXushaJ8iu3nRBtbseBnF78qebOdgDMRtrGmY89GjscKw6OgCXYXeKr4CAvWPi3Lg6B7dYZutcfJnkNvr0BfdDH9ByjPxGtJHBR9y0bgm1LsbX7L3aHv_abIMXUVSGPZ1YZDhnh703IfAtLbIDSPBYox__QoOoKRowLHCOMm_zWyHlSetf6a0z-7oWcr54qvIsbolJjP_4rvaqMR-T1oknIFE_oPZxH9dp-7VoJKJwA_ScwhsJDbo2TuxYHGMEO24JGR1euuXdNW"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-container rounded-3xl -z-10 opacity-20 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-10 blur-xl" />
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Expériences Professionnelles</h2>
              <div className="h-1.5 w-24 bg-secondary-container rounded-full" />
            </div>
          </div>

          <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30 md:before:left-1/2 md:before:-translate-x-1/2">
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:text-right">
                <h3 className="font-headline-md text-headline-md text-primary">Lead Product Designer</h3>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">2021 — Présent</p>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-2">Lux Tech Solutions, Paris</p>
              </div>
              <div className="md:border-l-4 md:border-secondary-container md:pl-8 pt-2">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Direction artistique et stratégique pour une plateforme SaaS B2B. Management d'une équipe de 5 designers, mise en place d'un Design System global (Tokenisation) et réduction de la dette UI de 40%. Collaboration directe avec les C-level pour définir la vision produit.
                </p>
              </div>
              <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-surface border-4 border-primary rounded-full z-10 flex items-center justify-center">
                <span className="w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:order-2">
                <h3 className="font-headline-md text-headline-md text-primary">Senior UI/UX Designer</h3>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">2018 — 2021</p>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-2">E-Commerce Elite, Lyon</p>
              </div>
              <div className="md:text-right md:border-r-4 md:border-secondary-container md:pr-8 pt-2">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Refonte complète de l'expérience checkout mobile, augmentant le taux de conversion de 18%. Animation de workshops design thinking et prototypage haute fidélité pour des présentations investisseurs. Expertise pointue en accessibilité numérique (WCAG).
                </p>
              </div>
              <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-surface border-4 border-outline-variant rounded-full z-10 flex items-center justify-center">
                <span className="w-3 h-3 bg-outline-variant rounded-full" />
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 md:gap-24">
              <div className="md:text-right">
                <h3 className="font-headline-md text-headline-md text-primary">UI Designer</h3>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">2015 — 2018</p>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-2">Creative Studio Agency</p>
              </div>
              <div className="md:border-l-4 md:border-secondary-container md:pl-8 pt-2">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Création d'interfaces visuelles percutantes pour des clients grands comptes. Focus sur le pixel-perfect design et l'iconographie sur mesure. Développement de composants d'interface interactifs en collaboration avec les équipes front-end.
                </p>
              </div>
              <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-surface border-4 border-outline-variant rounded-full z-10 flex items-center justify-center">
                <span className="w-3 h-3 bg-outline-variant rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-surface p-8 rounded-[32px] shadow-sm">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Leadership &amp; DNA</h3>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-md text-label-md">Stratégie Produit</span>
                    <span className="font-label-md text-label-md text-secondary">95%</span>
                  </div>
                  <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
                    <div className="progress-bar-fill h-full bg-gradient-to-r from-primary to-secondary-container" style={{ width: "95%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-md text-label-md">Mentorat Team</span>
                    <span className="font-label-md text-label-md text-secondary">90%</span>
                  </div>
                  <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
                    <div className="progress-bar-fill h-full bg-gradient-to-r from-primary to-secondary-container" style={{ width: "90%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-md text-label-md">Design Thinking</span>
                    <span className="font-label-md text-label-md text-secondary">100%</span>
                  </div>
                  <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
                    <div className="progress-bar-fill h-full bg-gradient-to-r from-primary to-secondary-container" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary text-on-primary p-8 rounded-[32px] shadow-xl">
                <span className="material-symbols-outlined text-4xl mb-4" data-weight="fill">diamond</span>
                <h4 className="font-headline-md text-headline-md mb-4">Compétences Clés</h4>
                <ul className="space-y-3 font-body-md text-body-md opacity-90">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Architecture de l'Information
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Design System (Figma, Tokens)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Prototypage Motion &amp; Interaction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Recherche Utilisateur &amp; Audit
                  </li>
                </ul>
              </div>

              <div className="bg-secondary-container p-8 rounded-[32px] shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4" data-weight="fill">terminal</span>
                <h4 className="font-headline-md text-headline-md text-on-secondary-container mb-4">Stack Technique</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container">Figma</span>
                  <span className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container">Framer</span>
                  <span className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container">Adobe CC</span>
                  <span className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container">Webflow</span>
                  <span className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid md:grid-cols-3 gap-12">
          <div className="">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">school</span> Éducation
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-body-lg text-body-lg font-bold text-on-surface">Master Design Numérique</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">École Supérieure de Design, 2015</p>
              </div>
              <div>
                <h4 className="font-body-lg text-body-lg font-bold text-on-surface">Licence Arts Graphiques</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Université des Arts, 2013</p>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-8 mt-12 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">verified</span> Certifications
            </h3>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <li>• Google UX Design Professional Certificate</li>
              <li>• Nielsen Norman Group UX Certified</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">translate</span> Langues
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-2xl">
                <span className="font-body-md text-body-md font-semibold">Français</span>
                <span className="font-label-md text-label-md text-primary">Natif</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-2xl">
                <span className="font-body-md text-body-md font-semibold">Anglais</span>
                <span className="font-label-md text-label-md text-primary">C2 — Bilingue</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-2xl">
                <span className="font-body-md text-body-md font-semibold">Espagnol</span>
                <span className="font-label-md text-label-md text-primary">B2 — Intermédiaire</span>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">menu_book</span> Publications
            </h3>
            <div className="space-y-8">
              <a className="block group" href="#">
                <h4 className="font-body-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">L'avenir du Design System dans le Luxe</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Medium, 2023 — Article de référence</p>
              </a>
              <a className="block group" href="#">
                <h4 className="font-body-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Psychologie de la couleur et conversion</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Design Digest, 2022</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-inverse-surface rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/10 blur-[120px]" />
          <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mb-6 relative z-10">Prêt à élever votre prochain projet ?</h2>
          <p className="font-body-lg text-body-lg text-inverse-on-surface/70 mb-10 max-w-2xl mx-auto relative z-10">
            Je suis actuellement ouvert à de nouvelles opportunités de collaboration pour des projets ambitieux et innovants.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button type="button" className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-button text-button hover:scale-105 transition-transform">
              Discutons de votre projet
            </button>
            <button type="button" className="bg-transparent border border-outline-variant text-inverse-on-surface px-10 py-4 rounded-full font-button text-button hover:bg-inverse-on-surface/10 transition-colors">
              Consulter mon Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
