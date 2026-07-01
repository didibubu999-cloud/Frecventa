import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, AlertCircle, Waves } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const benefits = [
  "Postură greșită",
  "Dureri cronice de spate",
  "Migrene",
  "Oboseală generală",
  "Accidentări",
  "Stres",
];

const afectiuni = [
  "Fibromialgii",
  "Lombosciatică",
  "Dureri de gât (coloana cervicală)",
  "Dureri mandibulare",
  "Dureri ale umerilor și brațelor",
  "Sindromul tunelului carpian",
  "Anxietate generalizată",
  "Astm",
  "Accidentări la sport",
  "Dureri ale încheieturilor",
];

const reactii = [
  "Roșeață și iritație la nivelul pielii",
  "Oboseală (semn al autovindecare)",
  "Dureri musculare tranzitorii",
  "Dureri de cap temporare",
];

export default function TerapiaBowen() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Terapia Bowen Iași – Tehnici Delicate pentru Durere și Stres | FrecventaVietii</title>
        <meta name="description" content="Terapia Bowen în Iași – mișcări delicate pe țesut conjunctiv pentru dureri de spate, migrene, fibromialgie, stres și anxietate. Fără medicamentație. Programări: 0755 560 592." />
        <meta name="keywords" content="terapia Bowen Iași, bowen therapy, dureri spate tratament natural, fibromialgie terapie, masaj Bowen Iași" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/terapia-bowen" />
        <meta property="og:title" content="Terapia Bowen Iași | FrecventaVietii" />
        <meta property="og:description" content="Tehnici blânde pe țesut conjunctiv pentru dureri cronice, migrene, stres. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/terapia-bowen" />
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Waves className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Terapia Bowen
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Un tratament holistic, alternativ, care presupune masarea delicată a unor puncte specifice ale corpului, stimulând autovindecare naturală prin țesutul conjunctiv.
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
            <span>45–60 minute per ședință &nbsp;·&nbsp; Potrivit pentru toate vârstele</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ce este Terapia Bowen?</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Terapia Bowen își are originile în Australia, la începutul anilor '80, iar bazele acesteia au fost puse de <strong className="text-foreground">Thomas Ambrose Bowen</strong>, care considera că are un adevărat dar de la Dumnezeu de a vindeca oamenii.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Tehnica Bowen este un tratament holistic, alternativ, care presupune masarea anumitor zone ale corpului — mai exact puncte care duc la încordarea mușchilor sau care afectează nervii. Se bazează pe <strong className="text-foreground">țesutul conectiv</strong> și felul în care acesta poate influența sănătatea organelor pe care le înconjoară.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Indicații principale</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Terapia Bowen vizează o mare parte dintre problemele actuale ale oamenilor, inclusiv:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Principii și mod de aplicare</h2>
              <div className="space-y-5">
                <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-foreground text-lg mb-2">Tehnica de rulare delicată</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Masajul Bowen se aplică printr-o tehnică specifică de rulare delicată a mâinilor deasupra zonelor considerate afectate. Se poate efectua chiar și peste haine, motiv pentru care este preferată de persoanele care nu doresc ședințe lungi de masaj clasic cu presiune puternică.
                  </p>
                </div>
                <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-foreground text-lg mb-2">Mișcări pozitive și negative</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Mișcările pozitive activează energia bună din zonele corpului, în timp ce mișcările negative o blochează și o ajută să se răspândească în timpul repausului. <strong className="text-foreground">Intervenția minimă este secretul terapiei Bowen</strong> — organismul se resetează prin mișcările fine aplicate în punctele cheie.
                  </p>
                </div>
                <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent">
                  <h3 className="font-bold text-foreground text-lg mb-2">Efecte la multiple niveluri</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Practicienii promovează efecte posibile la nivel: <strong className="text-foreground">chimic, mental, emoțional, fizic, neurologic și psiho-somatic</strong>, prin stimularea fasciei, țesutului conjunctiv și tendoanelor.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Afecțiuni tratate</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Deși nu există suficiente dovezi care să facă terapia Bowen o alternativă recomandată medical, aceasta poate fi benefică în cazul:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {afectiuni.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Reacții posibile după ședință</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Terapia Bowen este considerată <strong>minim invazivă</strong>. Există contraindicații în cazul femeilor însărcinate — se recomandă evitarea masajului pentru zona coccisului.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Practicienii susțin că aceste efecte apar atunci când organismul intră în etapa de autovindecare:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {reactii.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
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
                Sesiunile durează între <strong className="text-accent">45–60 de minute</strong>. Persoana va fi lăsată singură pe masa de masaj o perioadă, pentru ca mișcările să-și facă efectul.
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
            Terapia Bowen este potrivită pentru toate categoriile de vârstă. Este recomandabil să discuți cu medicul înainte de a opta pentru aceasta, mai ales dacă îți dorești să tratezi probleme mai serioase de sănătate.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
