"use client";

import type { Metadata } from "next";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// --- Reusable animated card with 3D tilt effect ---
function TiltCard({
                    children,
                    className = "",
                  }: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseEnter() {
    scale.set(1.03);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  return (
      <motion.div
          ref={ref}
          style={{ rotateX, rotateY, scale, transformPerspective: 800 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={className}
      >
        {children}
      </motion.div>
  );
}

// --- Skill bar animated on hover ---
function SkillBar({ label, value }: { label: string; value: number }) {
  return (
      <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="flex justify-between mb-2">
          <span className="font-label-md text-label-md">{label}</span>
          <span className="font-label-md text-label-md text-secondary">{value}%</span>
        </div>
        <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
          <motion.div
              className="progress-bar-fill h-full bg-gradient-to-r from-primary to-secondary-container"
              initial={{ width: 0 }}
              whileInView={{ width: `${value}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
  );
}

// --- Timeline item with left/right reveal ---
function TimelineItem({
                        title,
                        period,
                        company,
                        description,
                        align = "left",
                        dotActive = false,
                      }: {
  title: string;
  period: string;
  company: string;
  description: string;
  align?: "left" | "right";
  dotActive?: boolean;
}) {
  const isLeft = align === "left";

  return (
      <motion.div
          className="relative grid md:grid-cols-2 gap-8 md:gap-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text block */}
        <motion.div
            className={isLeft ? "md:text-right" : "md:order-2"}
            whileHover={{ x: isLeft ? -4 : 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <h3 className="font-headline-md text-headline-md text-primary">{title}</h3>
          <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">{period}</p>
          <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-2">{company}</p>
        </motion.div>

        {/* Description block */}
        <motion.div
            className={
              isLeft
                  ? "md:border-l-4 md:border-secondary-container md:pl-8 pt-2"
                  : "md:text-right md:border-r-4 md:border-secondary-container md:pr-8 pt-2"
            }
            whileHover={{ x: isLeft ? 4 : -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{description}</p>
        </motion.div>

        {/* Dot */}
        <motion.div
            className={`absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-surface rounded-full z-10 flex items-center justify-center ${
                dotActive ? "border-4 border-primary" : "border-4 border-outline-variant"
            }`}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400 }}
        >
          <span className={`w-3 h-3 rounded-full ${dotActive ? "bg-primary" : "bg-outline-variant"}`} />
        </motion.div>
      </motion.div>
  );
}

// --- Language badge ---
function LangBadge({ lang, level }: { lang: string; level: string }) {
  return (
      <motion.div
          className="flex items-center justify-between p-4 bg-surface-container-high rounded-2xl"
          whileHover={{ scale: 1.04, x: 6 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <span className="font-body-md text-body-md font-semibold">{lang}</span>
        <span className="font-label-md text-label-md text-primary">{level}</span>
      </motion.div>
  );
}

// --- Publication link ---
function PublicationLink({
                           title,
                           subtitle,
                         }: {
  title: string;
  subtitle: string;
}) {
  return (
      <motion.a
          href="#"
          className="block group"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        <h4 className="font-body-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{subtitle}</p>
      </motion.a>
  );
}

// ===================== PAGE =====================
export default function CVPage() {
  return (
      <main className="pt-20 bg-surface text-on-surface selection:bg-secondary-container/30">
        {/* ── HERO ── */}
        <section className="mesh-gradient py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
                id="hero-text"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span
                  className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md mb-6"
                  whileHover={{ scale: 1.05 }}
              >
                PARCOURS PROFESSIONNEL
              </motion.span>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-tight">
                Concevoir des écosystèmes numériques avec une{" "}
                <span className="text-gradient-gold">précision premium.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Expert en design stratégique, je transforme des visions complexes en interfaces
                intuitives et performantes, en alliant esthétique de luxe et rigueur technologique.
              </p>
              <div className="flex gap-4">
                <motion.button
                    type="button"
                    className="bg-primary text-on-primary px-8 py-4 rounded-xl font-button text-button flex items-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Télécharger CV{" "}
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <TiltCard className="aspect-square rounded-[32px] overflow-hidden shadow-2xl relative z-10">
                <img
                    alt="Portrait Designer"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmwXushaJ8iu3nRBtbseBnF78qebOdgDMRtrGmY89GjscKw6OgCXYXeKr4CAvWPi3Lg6B7dYZutcfJnkNvr0BfdDH9ByjPxGtJHBR9y0bgm1LsbX7L3aHv_abIMXUVSGPZ1YZDhnh703IfAtLbIDSPBYox__QoOoKRowLHCOMm_zWyHlSetf6a0z-7oWcr54qvIsbolJjP_4rvaqMR-T1oknIFE_oPZxH9dp-7VoJKJwA_ScwhsJDbo2TuxYHGMEO24JGR1euuXdNW"
                />
              </TiltCard>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-container rounded-3xl -z-10 opacity-20 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full -z-10 opacity-10 blur-xl" />
            </motion.div>
          </div>
        </section>

        {/* ── EXPÉRIENCES ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto">
            <motion.div
                className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
              <div className="max-w-2xl">
                <h2 className="font-headline-lg text-headline-lg text-gradient-gold mb-4">
                  Expériences Professionnelles
                </h2>
                <div className="h-1.5 w-24 bg-secondary-container rounded-full" />
              </div>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30 md:before:left-1/2 md:before:-translate-x-1/2">
              <TimelineItem
                  title="Lead Product Designer"
                  period="2021 — Présent"
                  company="Lux Tech Solutions, Paris"
                  description="Direction artistique et stratégique pour une plateforme SaaS B2B. Management d'une équipe de 5 designers, mise en place d'un Design System global (Tokenisation) et réduction de la dette UI de 40%. Collaboration directe avec les C-level pour définir la vision produit."
                  align="left"
                  dotActive
              />
              <TimelineItem
                  title="Senior UI/UX Designer"
                  period="2018 — 2021"
                  company="E-Commerce Elite, Lyon"
                  description="Refonte complète de l'expérience checkout mobile, augmentant le taux de conversion de 18%. Animation de workshops design thinking et prototypage haute fidélité pour des présentations investisseurs. Expertise pointue en accessibilité numérique (WCAG)."
                  align="right"
              />
              <TimelineItem
                  title="UI Designer"
                  period="2015 — 2018"
                  company="Creative Studio Agency"
                  description="Création d'interfaces visuelles percutantes pour des clients grands comptes. Focus sur le pixel-perfect design et l'iconographie sur mesure. Développement de composants d'interface interactifs en collaboration avec les équipes front-end."
                  align="left"
              />
            </div>
          </div>
        </section>

        {/* ── COMPÉTENCES ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leadership card */}
              <TiltCard className="md:col-span-1 bg-surface p-8 rounded-[32px] shadow-sm">
                <h3 className="font-headline-md text-headline-md text-gradient-gold mb-8">
                  Leadership &amp; DNA
                </h3>
                <div className="space-y-8">
                  <SkillBar label="Stratégie Produit" value={95} />
                  <SkillBar label="Mentorat Team" value={90} />
                  <SkillBar label="Design Thinking" value={100} />
                </div>
              </TiltCard>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Compétences clés */}
                <TiltCard className="bg-primary text-on-primary p-8 rounded-[32px] shadow-xl">
                <span className="material-symbols-outlined text-4xl mb-4" data-weight="fill">
                  diamond
                </span>
                  <h4 className="font-headline-md text-headline-md text-gradient-gold mb-4">Compétences Clés</h4>
                  <ul className="space-y-3 font-body-md text-body-md opacity-90">
                    {[
                      "Architecture de l'Information",
                      "Design System (Figma, Tokens)",
                      "Prototypage Motion & Interaction",
                      "Recherche Utilisateur & Audit",
                    ].map((item) => (
                        <motion.li
                            key={item}
                            className="flex items-center gap-2"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          <span className="material-symbols-outlined text-sm">check_circle</span>{" "}
                          {item}
                        </motion.li>
                    ))}
                  </ul>
                </TiltCard>

                {/* Stack technique */}
                <TiltCard className="bg-secondary-container p-8 rounded-[32px] shadow-sm">
                <span
                    className="material-symbols-outlined text-4xl text-on-secondary-container mb-4"
                    data-weight="fill"
                >
                  terminal
                </span>
                  <h4 className="font-headline-md text-headline-md text-on-secondary-container mb-4">
                    Stack Technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Framer", "Adobe CC", "Webflow", "Tailwind CSS"].map((tag) => (
                        <motion.span
                            key={tag}
                            className="px-4 py-2 bg-on-secondary-container/10 rounded-full font-label-md text-label-md text-on-secondary-container cursor-default"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        >
                          {tag}
                        </motion.span>
                    ))}
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>

        {/* ── ÉDUCATION / LANGUES / PUBLICATIONS ── */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto grid md:grid-cols-3 gap-12">
            {/* Éducation */}
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">school</span> Éducation
              </h3>
              <div className="space-y-8">
                {[
                  { degree: "Master Design Numérique", school: "École Supérieure de Design, 2015" },
                  { degree: "Licence Arts Graphiques", school: "Université des Arts, 2013" },
                ].map(({ degree, school }) => (
                    <motion.div
                        key={degree}
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    >
                      <h4 className="font-body-lg text-body-lg font-bold text-on-surface">{degree}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{school}</p>
                    </motion.div>
                ))}
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface mb-8 mt-12 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span> Certifications
              </h3>
              <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                {[
                  "Google UX Design Professional Certificate",
                  "Nielsen Norman Group UX Certified",
                ].map((cert) => (
                    <motion.li
                        key={cert}
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    >
                      • {cert}
                    </motion.li>
                ))}
              </ul>
            </div>

            {/* Langues */}
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">translate</span> Langues
              </h3>
              <div className="space-y-6">
                <LangBadge lang="Français" level="Natif" />
                <LangBadge lang="Anglais" level="C2 — Bilingue" />
                <LangBadge lang="Espagnol" level="B2 — Intermédiaire" />
              </div>
            </div>

            {/* Publications */}
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">menu_book</span> Publications
              </h3>
              <div className="space-y-8">
                <PublicationLink
                    title="L'avenir du Design System dans le Luxe"
                    subtitle="Medium, 2023 — Article de référence"
                />
                <PublicationLink
                    title="Psychologie de la couleur et conversion"
                    subtitle="Design Digest, 2022"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <motion.div
                className="bg-inverse-surface rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <div className="absolute inset-0 bg-primary/10 blur-[120px]" />
              <h2 className="font-headline-lg text-headline-lg text-gradient-gold mb-6 relative z-10">
                Prêt à élever votre prochain projet ?
              </h2>
              <p className="font-body-lg text-body-lg text-inverse-on-surface/70 mb-10 max-w-2xl mx-auto relative z-10">
                Je suis actuellement ouvert à de nouvelles opportunités de collaboration pour des
                projets ambitieux et innovants.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <motion.button
                    type="button"
                    className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-button text-button"
                    whileHover={{ scale: 1.07, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Discutons de votre projet
                </motion.button>
                <motion.button
                    type="button"
                    className="bg-transparent border border-outline-variant text-inverse-on-surface px-10 py-4 rounded-full font-button text-button"
                    whileHover={{ scale: 1.07, y: -3, borderColor: "var(--color-primary)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Consulter mon Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
  );
}