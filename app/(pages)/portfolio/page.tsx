"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const filters = ["Tous les projets", "Web Design", "UI Design", "Mobile Design", "Branding"];

const projects = [
  {
    id: 1,
    category: "Web Design",
    label: "Web Design / Fintech",
    title: "L'Élite Bancaire - Refonte 2024",
    challenge: "Simplifier la gestion de fortune complexe pour une clientèle fortunée tout en conservant une image de prestige.",
    solution: "Interface minimaliste axée sur la clarté visuelle et des interactions haptiques premium pour mobile et desktop.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChKIPGWek0QEuBlBbm3Hg6_VFfHv_nLdgqWQ_vDhb2wkeKCUZAAGTl0H8ViohedqGcIt-ahLUVYM49C2WR0PVrBLY4KraLDCw8PI3lKNNslQpzJFIP3T4TBN3OZ9bJ1q2fDJy9keGPWU5dTiZxPonV8lDjerravhcuLvbhUoW6zikkEXTiA6ZJi9aJrL67sMdSrpHTVJtJUSzMe7wSl1lOcouujyYTkiRkhw3Ht26Xq2uOvzA6TU7Cadjbno3y1ex2XUw0EOa6_mY8",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    id: 2,
    category: "Mobile Design",
    label: "Mobile Design",
    title: "ChronoLux E-commerce",
    description: "Une application d'achat de montres de luxe axée sur l'immersion visuelle et un processus d'achat fluide en trois étapes.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtHPA8TY6zESCy_BfX7TE9TdHAQfy4RMm2mcbcJ8D0bVNnX8uBYaVipKoDbd0ReuR95Apx4619zwwtNEgYvsN3-bdFj659uILP3e6H7_r5N0fXjqwleZgrAmKnYhPUsiUIlAl7mbzNfd8W1XMZtAy8iPTbpkueN1z1WaMRD5w-5UcgT22SOvhB7JasaMIOmXndkeiVfjWz2HjurNGxGCKUAftFlLQ0JIr4Apn53ImOHFxxJB3QFS0yshY9rCvRi5bDi31QudDw3IrX",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    id: 3,
    category: "Branding",
    label: "Branding",
    title: "Terra Nova Archi",
    description: "Identité visuelle complète pour un cabinet d'architecture durable, mêlant élégance intemporelle et engagement écologique.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQRg1LQjouBpRlTQtPt9qfwzBxiI_x_RQI6_g91kZsyKIlPCT_kJJD8GFkAeL1yUyEa9JCB4AdLRlXqYabxUHLWLPLgaiCXjdsjyFNt9WIHjGN33pMFSvhz2DuktqZRMtDJZ_6LK4rRGwGkRmCRTBYjW2xqlcZ5JG8V0kDPXadPLyQx5ITGK0IxmQ8tq0pGhqJZh-QJvwKdgjBhloaX0IRiGlXQbLS-GxNjJLafTlb6fKMyZbqFnrP_fZ_aisq4L-B8rLiXWZEOCr8",
    span: "md:col-span-4",
    aspect: "aspect-square",
  },
  {
    id: 4,
    category: "UI Design",
    label: "UI Design / SaaS",
    title: "Predicta AI Marketing",
    challenge: "Rendre les données d'analyse prédictive accessibles et exploitables sans surcharger l'utilisateur final.",
    solution: "Système de cartes modulaires (Bento) et hiérarchie typographique stricte pour une lecture rapide.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR0ZmWP07_xvn_n712cvsEwdRXbgIIsp0-izljBMuce3KU44vDd2jpwIL8JDqZv8-vlA82wLOCOEQcTGfiEgdR3La7WYx3CpnwwVCMgO3IH38WYn2NfrxBZsKqF2he4SeIN0nBXFMnN1Wqn0xK_S_ig5z-Lh089WVdrmAwXaXGrPDsyz07W0icvcIVtUSolGh5HuoQLOrC5zRRS-J2tLNVjoOj5mYO5u3BzSdn-I0Ez43znEBlOJTqhr6_lst-UQX6AxDCidfWd2uE",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Tous les projets");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous les projets") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="bg-background text-on-surface">
      <section className="relative px-margin-desktop max-w-container-max mx-auto mb-20 mt-8">
        <div className="absolute inset-0 mesh-gradient-blue-gold -z-10 rounded-3xl"></div>
        <div className="py-16 text-center">
          <h1 className="font-headline-xl text-headline-xl mb-6 text-gradient-gold">Travaux sélectionnés et Études de Cas.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Découvrez une collection de projets où l'innovation technologique rencontre une esthétique de luxe discrète pour créer des expériences numériques mémorables.</p>
        </div>
      </section>

      <section className="px-margin-desktop max-w-container-max mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2 rounded-full border font-label-md text-label-md transition-all ${isActive ? "border-primary bg-primary/5 text-primary" : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"}`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              whileHover={{ y: -10, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`${project.span} group relative overflow-hidden rounded-3xl bg-surface-container-low card-shadow`}
            >
              <div className={`${project.aspect} w-full overflow-hidden`}>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt={project.title}
                  src={project.src}
                  alt={project.title}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-label-md text-label-md text-primary uppercase tracking-widest">{project.label}</span>
                    <h3 className="font-headline-lg text-headline-lg mt-2">{project.title}</h3>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-secondary-container">arrow_outward</span>
                </div>
                {project.challenge ? (
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <p className="font-label-md text-label-md text-outline mb-1 uppercase">Challenge</p>
                      <p className="font-body-md text-body-md">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-outline mb-1 uppercase">Solution</p>
                      <p className="font-body-md text-body-md">{project.solution}</p>
                    </div>
                  </div>
                ) : (
                  <p className="font-body-sm text-body-sm mt-4 text-on-surface-variant line-clamp-3">{project.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-surface-container py-24 mb-32">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-gradient-gold">Le Processus de Design</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">Une méthodologie rigoureuse pour des résultats d'exception.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 -z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-4xl">search</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-3">Recherche</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-4">Analyse approfondie du marché, des personas et des objectifs business.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6 shadow-lg shadow-secondary-container/20">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-3">Wireframing</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-4">Architecture de l'information et parcours utilisateurs optimisés.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-4xl">layers</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-3">Prototypage</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-4">Conception haute-fidélité et animations interactives fluides.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6 shadow-lg shadow-secondary-container/20">
                <span className="material-symbols-outlined text-4xl">rule</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-3">Tests</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant px-4">Validation utilisateur et itérations finales pour la perfection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-desktop max-w-[800px] mx-auto mb-32">
        <h2 className="font-headline-lg text-headline-lg text-center mb-12">Questions Fréquentes</h2>
        <div className="space-y-4">
          <details className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer border border-transparent hover:border-outline-variant transition-all">
            <summary className="flex justify-between items-center font-button text-button list-none">
              Combien de temps prend un projet type ?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">La durée varie selon la complexité. Un site vitrine premium prend environ 4 à 6 semaines, tandis qu'une application mobile complète peut nécessiter 3 à 5 mois de développement et design.</p>
          </details>
          <details className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer border border-transparent hover:border-outline-variant transition-all">
            <summary className="flex justify-between items-center font-button text-button list-none">
              Travaillez-vous avec des startups ?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">Oui, j'accompagne les startups ambitieuses qui souhaitent se démarquer par une identité visuelle forte et une expérience utilisateur de classe mondiale dès leur lancement.</p>
          </details>
          <details className="group bg-surface-container-low rounded-2xl p-6 cursor-pointer border border-transparent hover:border-outline-variant transition-all">
            <summary className="flex justify-between items-center font-button text-button list-none">
              Proposez-vous également le développement ?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 font-body-md text-body-md text-on-surface-variant">Je me spécialise dans le design UX/UI, mais je collabore avec un réseau de développeurs experts pour livrer des solutions clés en main parfaitement fonctionnelles.</p>
          </details>
        </div>
      </section>

      <section className="px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="bg-primary-container text-on-primary-container rounded-[32px] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10"></div>
          <div className="relative z-10">
            <h2 className="font-headline-xl text-headline-xl mb-6">Prêt à démarrer votre prochain projet premium ?</h2>
            <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto text-primary-fixed">Transformons votre vision en une réalité numérique exceptionnelle. Discutons de vos objectifs dès aujourd'hui.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-button text-button hover:opacity-90 active:scale-95 transition-all">Démarrer un projet</button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-button text-button hover:bg-white/20 active:scale-95 transition-all">Voir les services</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
