import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, AlertCircle, Zap } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const statistici = [
  "Echivalează cu 10 sesiuni de masaj",
  "Echivalează cu 45 min de detoxifiere limfatică",
  "Echivalează cu 1 oră de purificare a canalelor energetice",
  "Arderea caloriilor = alergare 6 km",
  "Echivalează cu absorbția anionilor în 3 ore",
  "Echivalează cu 500 repetări la presa pieptului",
  "Echivalează cu 36 milioane mișcări celulare",
  "Elimină 4.1 grame de toxine din organele interne",
];

const adresat = [
  "Detoxifiere și reechilibrare energetică naturală",
  "Afecțiuni cronice sau dezechilibre funcționale",
  "Recuperare post-AVC sau pareze ușoare",
  "Dureri musculare și articulare",
  "Tensiune nervoasă, insomnie, anxietate",
  "Oboseală cronică",
  "Îmbunătățirea imunității și circulației",
];

const beneficii = [
  "Stimularea circulației periferice și drenaj limfatic",
  "Oxigenarea țesuturilor și regenerare celulară",
  "Reducerea inflamației și durerilor musculare/articulare",
  "Relaxare profundă și reglarea sistemului nervos vegetativ",
  "Ameliorarea anxietății, insomniei, oboselii",
  "Sprijin pentru imunitate și digestie",
  "Susținerea recuperării post-AVC sau post-traumatice",
];

const contraindicatii = [
  "Sarcină (în special primul trimestru)",
  "Febră, boli infecțioase acute",
  "Epilepsie sau stimulator cardiac",
  "Afecțiuni oncologice active (doar cu acord medical)",
  "Implanturi metalice sau dentare",
  "Stenturi cardiace",
];

export default function TerapiaFohow() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Terapia Fohow Iași – Medicină Tradițională Chineză | FrecventaVietii</title>
        <meta name="description" content="Terapia Fohow în Iași – detoxifiere, reechilibrare energetică, medicină tradițională chineză. Echivalentul a 10 sesiuni de masaj într-o ședință. Programări: 0755 560 592." />
        <meta name="keywords" content="terapia Fohow Iași, medicină tradițională chineză Iași, detoxifiere naturală, reechilibrare energetică, biofoton Iași" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/terapia-fohow" />
        <meta property="og:title" content="Terapia Fohow Iași | FrecventaVietii" />
        <meta property="og:description" content="Detoxifiere și reechilibrare energetică prin medicină tradițională chineză. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/terapia-fohow" />
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_20%_60%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Zap className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Terapia Fohow
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Un tratament natural bazat pe tainele medicinei tradiționale chinezești. Masajul bio-energo-terapeutic Fohow echilibrează meridianele corpului pentru o viață sănătoasă și fericită.
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
            <span>Non-invazivă și complet automată &nbsp;·&nbsp; Fără efort din partea pacientului</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Despre Terapia Fohow</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Terapia Fohow este un tratament natural bazat pe tainele medicinei tradiționale chinezești. Celebrul masaj <strong className="text-foreground">bio-energo-terapeutic Fohow</strong> este ideal pentru momentele în care corpul simte nevoia de revitalizare.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Din perspectiva medicinei tradiționale, <strong className="text-foreground">meridianele corpului</strong> sunt cele care dirijează funcțiile organismului. Această terapie are rolul de a echilibra meridianele corpului, care reprezintă acele fire ale unei vieți sănătoase și fericite. Îmbunătățirea stării de sănătate se realizează eficient prin echilibrarea acestor meridiane.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Cum se desfășoară ședința?</h2>
              <div className="space-y-4">
                {[
                  { title: "Confort total", desc: "Pacientul este așezat confortabil pe masa de terapie, fără nicio pregătire specială necesară." },
                  { title: "Stimuli combinați", desc: "Dispozitivul aplică o combinare de stimuli: vibrații oscilante, căldură profundă și presiune ritmică, acționând simultan asupra meridianelor." },
                  { title: "Complet automatizat", desc: "Terapia este non-invazivă și complet automată — fără necesitatea efortului din partea pacientului, relaxarea este totală." },
                ].map((item, i) => (
                  <div key={i} className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                    <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">De ce să alegi Masajul Fohow?</h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                În urma studiilor despre performanțele masajului, au fost demonstrate următoarele statistici pentru o singură ședință:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {statistici.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Cui se adresează?</h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                Terapia Fohow este recomandată persoanelor care:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {adresat.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Beneficii</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {beneficii.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Contraindicații</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Terapia este în general bine tolerată și sigură. Cu toate acestea, există situații în care nu este recomandată. Consultați medicul înainte de prima ședință.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {contraindicatii.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
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
                Terapia Fohow este <strong className="text-accent">non-invazivă și automată</strong>. Beneficiile unei singure ședințe echivalează cu ore de efort fizic și terapii combinate.
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
            Terapia Fohow se prezintă ca o alternativă naturală și eficientă pentru echilibrarea energetică a organismului. Recomandăm consultarea unui medic înainte de a urma orice terapie complementară, în special dacă există afecțiuni preexistente.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
