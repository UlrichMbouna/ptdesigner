"use client";

import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }} className="mesh-gradient">
      <Hero />

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 bg-surface-container-low/50"
      >
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="p-8 rounded-2xl bg-surface shadow-sm border border-outline-variant/10">
              <h3 className="font-headline-xl text-headline-xl text-primary mb-2">8+</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Années d'expérience</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="p-8 rounded-2xl bg-surface shadow-sm border border-outline-variant/10">
              <h3 className="font-headline-xl text-headline-xl text-primary mb-2">132+</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Produits livrés</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="p-8 rounded-2xl bg-surface shadow-sm border border-outline-variant/10">
              <h3 className="font-headline-xl text-headline-xl text-primary mb-2">39+</h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-tighter">Marques leaders</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services (abbreviated) */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
        id="services"
      >
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Expertises Stratégiques</h2>
          <div className="w-20 h-1 bg-secondary-container mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }} className="group p-10 rounded-[32px] bg-white border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">strategy</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Stratégie de Produit</h3>
            <p className="text-on-surface-variant leading-relaxed">Alignement des objectifs business avec les besoins utilisateurs pour créer des roadmaps produits cohérentes et performantes.</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }} className="group p-10 rounded-[32px] bg-white border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">grid_view</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Systèmes de Design</h3>
            <p className="text-on-surface-variant leading-relaxed">Création de bibliothèques de composants scalables et documentées pour assurer une cohérence visuelle absolue sur tous vos points de contact.</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }} className="group p-10 rounded-[32px] bg-white border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Expertise Cognition UX</h3>
            <p className="text-on-surface-variant leading-relaxed">Application des principes de psychologie cognitive pour réduire la charge mentale et maximiser l'engagement utilisateur intuitif.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35 }}
          className="bg-primary rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-headline-xl text-headline-xl text-on-primary mb-6 max-w-3xl mx-auto">Prêt à élever vos standards numériques ?</h2>
            <p className="text-primary-fixed font-body-lg text-body-lg mb-12 max-w-xl mx-auto opacity-90">Transformons ensemble vos défis complexes en interfaces élégantes et hautement performantes.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-full font-button text-button hover:scale-105 transition-transform shadow-xl shadow-black/20">Démarrer un projet</button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-button text-button hover:bg-white/20 transition-all">Voir mes tarifs</button>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
