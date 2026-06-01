export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md mb-6 uppercase tracking-widest">Premium UI/UX Design</span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface leading-tight mb-6">
            L'art de sculpter des <span className="text-gradient-gold">expériences</span> numériques <span className="text-gradient-gold">mémorables</span>.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Concepteur d'interfaces stratégiques fusionnant psychologie cognitive et esthétique de luxe pour les marques qui visent l'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-button text-button flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" href="#portfolio">
              Voir mes projets
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="border-2 border-primary text-primary px-8 py-4 rounded-full font-button text-button flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors" href="#contact">
              Me contacter
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img alt="UI Design Process" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoZsUqFdfj5L4sF7bxflbSyRSJm2DWHgA2XXcRN4rRCV0NizAmXHldqP4Iw7OFsvFRmuQ6X-xxO3wyEW1m1x804ve4RuMoU0E6w8t64H5f4pp_HgY-v8Y5ecLuPlpGyF6EbAz9HABNwiC75NFX0JrSZaQivyTSt3bJIUSnJmwnnCc5qNgNZEhryskBvVY08266kGB4HcL0DT1bstzBxZRCP-uKVgrnGZJNwWQsAhUKuZbS-toKDeUmq68rmbrDGksvbNQqrgw8BCNS"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-xl shadow-xl border border-outline-variant/30 backdrop-blur-sm animate-bounce-subtle">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <div>
                <p className="font-bold text-on-surface">98% Satisfaction</p>
                <p className="text-body-sm text-on-surface-variant">Taux de rétention client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
