import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, Zap, AlertCircle, BookOpen } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const aplicatii = [
  {
    titlu: "Identificarea Alergiilor și Intoleranțelor Alimentare",
    desc: "Biorezonanța poate detecta reacții subtile la diferite substanțe sau alimente care ar putea declanșa simptome alergice sau intoleranțe.",
  },
  {
    titlu: "Evaluarea Funcției Organelor",
    desc: "Aparatura poate evalua starea organelor interne, inclusiv ficatul, rinichii, inima și plămânii, identificând eventualele dezechilibre energetice.",
  },
  {
    titlu: "Diagnosticarea Dezechilibrelor Hormonale",
    desc: "Prin analiza semnalelor emise de sistemul endocrin, biorezonanța poate indica perturbări hormonale.",
  },
  {
    titlu: "Detecția Stresului și a Dezechilibrelor Mentale",
    desc: "Biorezonanța ajută la identificarea nivelului de stres și a efectelor acestuia asupra corpului, inclusiv asupra sistemului nervos.",
  },
  {
    titlu: "Screening-ul Intoxicațiilor",
    desc: "Poate identifica prezența metalelor grele, toxinelor sau altor substanțe nocive în organism.",
  },
];

const factoriDurata = [
  "Cât de bine răspunzi la antrenament",
  "Starea asupra căreia te concentrezi",
  "Obiectivele tale pentru tratament",
];

export default function BiorezonantaRaycomp() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Biorezonanță Raycomp PS 1000 Iași – Diagnosticare Holistică | FrecventaVietii</title>
        <meta name="description" content="Biorezonanță cu aparatul Rayocomp PS 1000 Evolution în Iași. Detectare alergii, dezechilibre hormonale, stres oxidativ. Metodă non-invazivă. Programări: 0755 560 592." />
        <meta name="keywords" content="biorezonanță Iași, Raycomp PS 1000, diagnostic energetic, biorezonanta Iași, medicină vibratională, alergii biorezonanță" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/biorezonanta-raycomp" />
        <meta property="og:title" content="Biorezonanță Raycomp PS 1000 Iași | FrecventaVietii" />
        <meta property="og:description" content="Diagnosticare holistică cu Rayocomp PS 1000 Evolution. Detectare alergii, dezechilibre hormonale, stres. Non-invaziv." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/biorezonanta-raycomp" />
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_30%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Zap className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Biorezonanță<br />Rayocomp PS 1000
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              O metodă bazată pe principiile biofizicii, care analizează frecvențele electromagnetice emise de corpul uman pentru a detecta dezechilibre și a sprijini vindecarea naturală.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex flex-wrap items-center gap-4 mt-8 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" /> 30–60 min / ședință
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>8–10 ședințe recomandate</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Non-invazivă · Fără medicamente</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Ce este biorezonanța?</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Biorezonanța este o metodă bazată pe principiile biofizicii, care analizează frecvențele electromagnetice emise de corpul uman. <strong className="text-foreground">Fiecare celulă, organ sau sistem are un spectru specific de frecvențe.</strong> Aparatura de biorezonanță detectează aceste semnale și identifică eventualele anomalii.
              </p>

              <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent mt-6">
                <h3 className="font-bold text-foreground text-lg mb-3">Aparatul Rayocomp PS 1000 Evolution</h3>
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <img
                    src="/rayocomp-ps1000.png"
                    alt="Aparat Biorezonanță Rayocomp PS 1000 Evolution"
                    className="w-full sm:w-48 rounded-xl object-contain bg-white p-2 border border-border shadow-sm shrink-0"
                  />
                  <div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Bazându-se pe conceptul lor holistic, Rayonex a dezvoltat unul dintre cele mai utilizate aparate, modelul polar <strong className="text-foreground">Rayocomp PS 1000 Evolution</strong>. O gamă largă de accesorii și în special nou-dezvoltatul <strong className="text-foreground">RAH (Rayonex Analysis and Harmonizing System)</strong> au completat sistemul.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      RAH este rezultatul colaborării a <strong className="text-foreground">peste 30 de experți în lume</strong> și este actualizat constant.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Ce Diagnostică Se Poate Face cu Ajutorul Biorezonanței?</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Biorezonanța este utilizată într-o gamă variată de aplicații, printre care:
              </p>
              <div className="space-y-4">
                {aplicatii.map((a, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-border rounded-2xl p-5 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{a.titlu}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-accent" />
                Studii Relevante despre Biorezonanță
              </h2>
              <div className="space-y-4">
                <div className="bg-[#F7F5F2] rounded-2xl p-5 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mai multe studii au fost realizate pentru a evalua eficiența biorezonanței în diagnosticare. Un studiu publicat în <strong className="text-foreground">Journal of Alternative and Complementary Medicine</strong> a arătat că tehnologia poate detecta anumite dezechilibre și intoleranțe alimentare cu un grad de precizie comparabil cu metodele tradiționale.
                  </p>
                </div>
                <div className="bg-[#F7F5F2] rounded-2xl p-5 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cercetări efectuate în <strong className="text-foreground">Germania și Rusia</strong>, publicate în reviste de specialitate, au evidențiat capacitatea biorezonanței de a identifica stresul oxidativ și dezechilibrele energetice la nivel celular.
                  </p>
                </div>
                <div className="bg-[#F7F5F2] rounded-2xl p-5 border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Un alt studiu clinic realizat în <strong className="text-foreground">2020, disponibil pe PubMed</strong>, a concluzionat că utilizarea biorezonanței în monitorizarea pacienților cu boli cronice poate contribui la detectarea precoce a complicațiilor.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Cum funcționează?</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Biorezonanța se bazează pe ideea că toate componentele organismelor vii (organe, țesuturi și celule) emit unde electromagnetice. Aceste unde electromagnetice sunt măsurabile la frecvențe care se pot schimba odată cu modificările mediului fiziologic.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Potrivit terapeuților care practică biorezonanța, numită și <strong className="text-foreground">medicină energetică sau medicină vibrațională</strong>, oscilațiile electromagnetice emise de organele bolnave și celulele canceroase sunt diferite de cele emise de celulele sănătoase.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Cu terapia cu biorezonanță, acest deficit energetic este corectat prin furnizarea externă de energie pentru a readuce țesuturile și organele la niveluri de energie sănătoase. Astfel, celulele, țesuturile și organele corpului se vindecă și își revin la starea normală.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">De câte ședințe de biorezonanță am nevoie?</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                O sesiune tipică de biorezonanță durează <strong className="text-foreground">între 30 și 60 de minute</strong>. Un plan de tratament include de obicei <strong className="text-foreground">între 8–10 ședințe</strong>. Însă, nu este neobișnuit ca tratamentul să dureze chiar și 10 sau 15 ședințe.
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Durata tratamentului și numărul de sesiuni necesare depind de mulți factori, inclusiv:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {factoriDurata.map((f) => (
                  <div key={f} className="bg-white border border-border rounded-xl p-4 text-center shadow-sm">
                    <p className="text-sm font-medium text-foreground leading-snug">{f}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#F7F5F2] rounded-2xl p-5 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unii pacienți preferă biorezonanța ca formă de tratament pentru aceste afecțiuni, deoarece este <strong className="text-foreground">neinvazivă și nu se bazează pe medicamente</strong>. Alți pacienți combină biorezonanța cu opțiuni de tratament mai tradiționale pentru a-și îmbunătăți starea generală de sănătate.
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Concluzii</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Biorezonanța reprezintă o metodă promițătoare pentru diagnosticare și prevenție, oferind o abordare <strong className="text-foreground">non-invazivă și holistică</strong> asupra sănătății. Deși este considerată o tehnologie inovatoare, aceasta nu înlocuiește metodele tradiționale de diagnostic și tratament, ci le <strong className="text-foreground">completează</strong>. Consultarea unui specialist calificat și utilizarea acestei metode într-un context adecvat pot contribui semnificativ la îmbunătățirea stării generale de sănătate.
              </p>
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
              <h3 className="font-serif text-xl font-bold mb-3">Programează o ședință</h3>
              <div className="bg-white/10 rounded-xl p-4 mb-5 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>30–60 min / ședință</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>8–10 ședințe recomandat</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Zap className="w-4 h-4 text-accent shrink-0" />
                  <span>Non-invazivă · Fără medicamente</span>
                </div>
              </div>
              <a
                href="tel:0755560592"
                className="block w-full text-center bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent/90 transition-colors mb-3 text-sm"
                data-testid="button-call-booking"
              >
                Sună: 0755 560 592
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
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-foreground mb-1">Riscuri</p>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Biorezonanța este considerată, în general, sigură. Nu au fost raportate efecte secundare negative. Dacă ai probleme grave de sănătate mintală, consultă medicul psihiatru pentru a te asigura că ești un candidat potrivit pentru o astfel de terapie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
