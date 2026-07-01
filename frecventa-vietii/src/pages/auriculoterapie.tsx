import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, Ear } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Auriculoterapie() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Auriculoterapie Iași – Puncte Reflexe ale Urechii | FrecventaVietii</title>
        <meta name="description" content="Auriculoterapie în Iași – stimularea punctelor reflexe ale urechii pentru durere, stres, insomnie și dezechilibre ale organelor. Programări: 0755 560 592." />
        <meta name="keywords" content="auriculoterapie Iași, terapie urechii, puncte reflexe, acupunctură auriculară, tratament natural Iași" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/auriculoterapie" />
        <meta property="og:title" content="Auriculoterapie Iași | FrecventaVietii" />
        <meta property="og:description" content="Stimularea punctelor reflexe ale urechii pentru durere, stres și dezechilibre. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/auriculoterapie" />
      </Helmet>
      <div className="w-full bg-accent text-white text-center py-2 text-sm font-medium">
        📞 Sună pentru programare: 0755 560 592
      </div>

      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">FrecventaVietii</Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            data-testid="link-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
        </div>
      </nav>

      <div className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Ear className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Auriculoterapie
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              O tehnică terapeutică care folosește puncte specifice ale urechii pentru a trata diverse afecțiuni de sănătate, promovând echilibrul fizic și emoțional.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex items-center gap-2 mt-8 text-white/70 text-sm"
          >
            <Clock className="w-4 h-4 text-accent" />
            <span>30–50 minute per ședință &nbsp;·&nbsp; Săptămânal sau bilunar</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ce este auriculoterapia?</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Auriculoterapia este o practică bazată pe Medicina Tradițională Chineză și a fost dezvoltată în Franța. Ea consideră urechea ca pe un <strong className="text-foreground">microsistem care reflectă întregul corp uman</strong>. Fiecare punct din ureche corespunde unui organ sau unui sistem specific, permițând stimularea acestor puncte pentru a ajuta la ameliorarea simptomelor fizice și emoționale.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Cum funcționează?</h2>
              <div className="space-y-6">
                <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-foreground text-lg mb-2">Stimularea punctelor</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Tehnica implică aplicarea de presiune asupra unor puncte specifice ale urechii, care pot fi stimulate în diverse moduri — presiunea mâinii, ace, semințe sau bile magnetice. Acești stimuli activează terminațiile nervoase care trimit semnale către creier, promovând autoreglarea corpului și eliberând tensiunea.
                  </p>
                </div>
                <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-foreground text-lg mb-2">Efecte terapeutice</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Auriculoterapia poate ajuta la tratarea unei varietăți de afecțiuni, inclusiv durerea, anxietatea, insomnia, problemele digestive și chiar poate sprijini pierderea în greutate. Mulți pacienți raportează beneficii semnificative după ședințe regulate.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Indicații și beneficii</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Auriculoterapia este adesea folosită ca terapie complementară și nu înlocuiește tratamentele medicale convenționale. Este indicată pentru:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Ameliorarea durerii",
                  "Reducerea stresului și anxietății",
                  "Îmbunătățirea calității somnului",
                  "Sprijin împotriva dependențelor (ex. fumatul)",
                  "Echilibrul emoțional și bunăstarea generală",
                  "Probleme digestive",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-primary text-white rounded-2xl p-6 shadow-xl sticky top-24"
            >
              <h3 className="font-serif text-xl font-bold mb-2">Programează o ședință</h3>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">
                Sesiunile durează între <strong className="text-accent">30–50 de minute</strong> și pot avea loc săptămânal sau bilunar, în funcție de caz.
              </p>
              <a
                href="tel:0755560592"
                className="block w-full text-center bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent/90 transition-colors mb-3 text-sm"
                data-testid="button-call-booking"
              >
                Sună acum: 0755 560 592
              </a>
              <Link
                href="/#contact"
                className="block w-full text-center border border-white/30 text-white font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                data-testid="link-online-booking"
              >
                Programare online
              </Link>

              <div className="mt-6 pt-5 border-t border-white/20 space-y-2 text-xs text-white/70">
                <p>📍 Aleea Tudor Niculai nr. 22, Iași</p>
                <p>✉ contact@organic-natura.ro</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-[#F7F5F2] rounded-2xl p-8 border border-border"
        >
          <p className="text-sm text-muted-foreground italic leading-relaxed text-center max-w-2xl mx-auto">
            Auriculoterapia se prezintă ca o alternativă interesantă și non-invazivă pentru îngrijirea sănătății, promovând un echilibru între corp și minte. Recomandăm consultarea unui medic înainte de a urma orice terapie complementară.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
