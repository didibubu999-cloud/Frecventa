import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, Leaf, Star, Heart } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const minerale = [
  "Fierul — indispensabil sângelui",
  "Siliciul — necesar cartilajelor",
  "Fosfatul de fier — în celulele firului de păr și membrana musculară a vaselor sanguine",
  "Fosfatul de potasiu — implicat în transportul de oxigen și detoxifiere (sistemul limfatic și ficat)",
  "Fosfatul de sodiu — localizat în celulele cerebrale, mușchi și țesut conjunctiv",
  "Sulfatul de calciu — necesar în ficat și colecist",
  "Clorura de potasiu — necesară salivei",
  "Kaliu, magneziu și fier — prezente în țesuturile musculare",
  "Fluorul și siliciul — necesare țesutului conjunctiv",
];

const sedintaPasi = [
  {
    nr: "01",
    titlu: "Evaluarea Individuală",
    desc: "Începem cu o discuție detaliată pentru a înțelege contextul tău personal, istoricul medical și obiectivele tale. Această evaluare inițială ne ajută să creăm o abordare personalizată.",
  },
  {
    nr: "02",
    titlu: "Identificarea Sănătății Celulare",
    desc: "Explorăm conceptul unic al sărurilor tisulare Dr. Schüssler, concentrându-ne pe echilibrul și funcționarea sănătoasă a celulelor din organism. Fiecare sărură tisulară are un rol specific și contribuie la armonia generală a organismului.",
  },
  {
    nr: "03",
    titlu: "Prescrierea Personalizată",
    desc: "Pe baza evaluării tale, se va crea o prescripție personalizată de săruri tisulare, adaptată nevoilor tale individuale. Aceasta poate implica combinarea mai multor săruri pentru a aborda aspecte specifice ale sănătății tale.",
  },
  {
    nr: "04",
    titlu: "Sesizarea Dezechilibrelor",
    desc: "Împreună, vom identifica posibilele dezechilibre și deficiențe celulare care pot contribui la starea ta de sănătate actuală. Această abordare holistică are scopul de a restaura echilibrul natural al organismului.",
  },
];

const beneficii = [
  {
    titlu: "Optimizarea Funcționării Celulare",
    desc: "Sărurile tisulare contribuie la reglarea proceselor celulare, asigurând o funcționare sănătoasă a celulelor din diverse țesuturi și organe.",
  },
  {
    titlu: "Echilibrarea Minerală",
    desc: "Această abordare vizează echilibrul mineral în organism, un aspect esențial pentru funcționarea optimă a metabolismului și a sistemelor organismului.",
  },
  {
    titlu: "Gestionarea Discomfortului",
    desc: "Sărurile tisulare Dr. Schüssler sunt cunoscute pentru capacitatea lor de a gestiona diverse disconforturi fizice, de la probleme digestive până la stări de oboseală.",
  },
  {
    titlu: "Promovarea Energiei și Vitalității",
    desc: "Prin corectarea dezechilibrelor, sărurile tisulare contribuie la creșterea nivelului de energie și la îmbunătățirea stării generale de bine.",
  },
];

const deCe = [
  {
    titlu: "Personalizare Exclusivă",
    desc: "Fiecare sesiune este adaptată nevoilor și obiectivelor tale specifice, oferindu-ți o experiență unică de vindecare.",
  },
  {
    titlu: "Profesionalism și Experiență",
    desc: "Beneficiezi de expertiza unui consilier specializat în săruri tisulare Dr. Schüssler, dedicat îmbunătățirii stării tale de sănătate.",
  },
  {
    titlu: "Abordare Holistică",
    desc: "Ne concentrăm nu doar pe simptome, ci și pe cauzele profunde, abordând sănătatea într-un mod holistic.",
  },
];

export default function SaruriSchussler() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Terapia cu Săruri Schüssler Iași – 12 Minerale Celulare | FrecventaVietii</title>
        <meta name="description" content="Terapia cu săruri Schüssler în Iași – 12 minerale celulare esențiale pentru echilibru mineral, imunitate, energie și recuperare. Metodă homeopatică naturală. Programări: 0755 560 592." />
        <meta name="keywords" content="săruri Schüssler Iași, minerale celulare, terapie homeopatică Iași, tratament natural minerale, Dr Schüssler săruri tisulare" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/saruri-schussler" />
        <meta property="og:title" content="Săruri Schüssler Iași | FrecventaVietii" />
        <meta property="og:description" content="12 minerale celulare esențiale pentru echilibru, imunitate și recuperare. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/saruri-schussler" />
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
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la pagina principală
          </Link>
        </div>
      </nav>

      <div className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Leaf className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Terapia cu săruri Schüssler
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              12 minerale esențiale preparate homeopatic care ajută celulele să utilizeze corect nutrienții din hrană, restabilind echilibrul mineral și stimulând capacitatea naturală de vindecare a organismului.
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
              <Clock className="w-4 h-4 text-accent" /> Consiliere individuală personalizată
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>12 săruri minerale esențiale</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Metoda Dr. Schüssler (1874)</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Despre terapie</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Terapia cu săruri Schüssler se bazează pe <strong className="text-foreground">12 minerale esențiale preparate homeopatic</strong> (în diluții D6 și D12) care ajută celulele să utilizeze corect nutrienții din hrană. Acestea restabilesc echilibrul mineral și stimulează capacitatea naturală de vindecare a organismului.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Prima lucrare a dr. Schüssler a apărut în <strong className="text-foreground">1874</strong> sub titlul <em>„O terapie prescurtată pe bazele fiziologiei și patologiei celulare"</em>, în care autorul se referă la faptul că substanțele anorganice aflate în corpul uman ajută la reglarea tulburărilor constituționale.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Dr. Schüssler susține că țesuturile se îmbolnăvesc pentru că celulele nu conțin în proporțiile necesare substanțele minerale din care sunt alcătuite. Biochimia Schüssler cuprinde <strong className="text-foreground">12 săruri minerale prezente în sânge și țesuturi</strong>, fiecare cu influență directă asupra diferitelor funcții ale organelor.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent mb-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Modalitatea de preparare</strong> a sărurilor Schüssler este realizată prin potențarea succesivă cu lactoză — metodă de preparare homeopată a doctorului Samuel Hahnemann (1755–1843).
                </p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Rolul mineralelor în organism</h2>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Atâta timp cât sărurile își mențin un echilibru, corpul se găsește într-o perfectă stare de sănătate. Dezechilibrul acestora generează apariția bolii:
              </p>
              <div className="grid sm:grid-cols-1 gap-3">
                {minerale.map((m, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <Leaf className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Ce se întâmplă în ședința de consiliere?</h2>
              <div className="space-y-4">
                {sedintaPasi.map((pas) => (
                  <div key={pas.nr} className="flex gap-5 bg-white border border-border rounded-2xl p-5 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {pas.nr}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{pas.titlu}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pas.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">La ce ajută consilierea?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {beneficii.map((b) => (
                  <div key={b.titlu} className="bg-[#F7F5F2] rounded-2xl p-5 border-l-4 border-accent">
                    <h3 className="font-bold text-foreground text-sm mb-2">{b.titlu}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">De ce să alegi serviciul nostru?</h2>
              <div className="space-y-4">
                {deCe.map((d, i) => (
                  <div key={i} className="flex gap-4 bg-white border border-border rounded-2xl p-5 shadow-sm">
                    <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{d.titlu}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6}>
              <div className="bg-primary text-white rounded-2xl p-6">
                <h3 className="font-serif text-xl font-bold mb-3">Cum funcționează evaluarea la distanță?</h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  Te voi sprijini în procesul de descoperire a deficitelor de săruri tisulare Dr. Schüssler, care se traduc prin diferite stări ale corpului și decolorări ale pielii, unghiilor și limbii. <strong className="text-accent">Te voi ruga să îmi trimiți câteva poze făcute la lumina naturală</strong> pentru a vedea cât mai concret despre ce este vorba și a „traduce" care sunt deficitele de microminerale tisulare ce transmite corpul prin semnele arătate.
                </p>
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
              <h3 className="font-serif text-xl font-bold mb-3">Programează o sesiune</h3>
              <div className="bg-white/10 rounded-xl p-4 mb-5 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>12 săruri minerale esențiale</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Leaf className="w-4 h-4 text-accent shrink-0" />
                  <span>Abordare complet personalizată</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Heart className="w-4 h-4 text-accent shrink-0" />
                  <span>Evaluare fizică și la distanță</span>
                </div>
              </div>
              <a
                href="tel:0755560592"
                className="block w-full text-center bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent/90 transition-colors mb-3 text-sm"
              >
                Sună: 0755 560 592
              </a>
              <Link
                href="/#contact"
                className="block w-full text-center border border-white/30 text-white font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                Programare online
              </Link>
              <div className="mt-6 pt-5 border-t border-white/20 space-y-2 text-xs text-white/70">
                <p>📍 Aleea Tudor Niculai nr. 22, Iași</p>
                <p>✉ contact@organic-natura.ro</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-[#F7F5F2] rounded-2xl p-5 border border-border text-sm text-muted-foreground leading-relaxed"
            >
              <Leaf className="w-5 h-5 text-accent mb-3" />
              <p>
                Descoperă forța vindecătoare a sărurilor tisulare Dr. Schüssler. Oferă-ți șansa de a experimenta <strong className="text-foreground">echilibrul și vitalitatea</strong> printr-o abordare naturală și personalizată.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
