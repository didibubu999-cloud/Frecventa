import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, Flower, Heart } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const sesiunePasi = [
  {
    nr: "01",
    titlu: "Istoricul personal",
    desc: "Discutăm despre istoricul dumneavoastră personal, experiențele de viață și stările emoționale sau mentale cu care vă confruntați în prezent. Scopul acestui dialog este de a stabili un cadru înțelegător și de a identifica zonele care necesită atenție și explorare.",
  },
  {
    nr: "02",
    titlu: "Explorarea stărilor emoționale",
    desc: "Vom explora împreună stările emoționale pe care le simțiți — anxietate, frică, tristețe sau alte emoții — și vom încerca să le identificăm și să le înțelegem în profunzime.",
  },
  {
    nr: "03",
    titlu: "Selectarea remediilor florale",
    desc: "Pe baza discuției, vom alege remediile florale Dr. Bach care corespund cel mai bine stării dumneavoastră emoționale. Sunt disponibile 38 de esențe florale, fiecare corespunzătoare unei emoții sau stări specifice.",
  },
  {
    nr: "04",
    titlu: "Planul de acțiune",
    desc: "Vom crea împreună un plan de acțiune pentru integrarea remediilor florale în viața de zi cu zi, cu termene pentru urmărirea progresului și ajustări în funcție de evoluția stării dumneavoastră.",
  },
  {
    nr: "05",
    titlu: "Încheierea sesiunii",
    desc: "Vom discuta despre orice întrebări sau preocupări și veți fi încurajat să împărtășiți experiențele pe parcursul utilizării remediilor. Scopul este să vă susțin în călătoria dumneavoastră către echilibrul emoțional și mental.",
  },
];

const avantaje = [
  "Creșterea stimei de sine",
  "Clarificarea obiectivelor personale",
  "Îmbunătățirea relațiilor interpersonale",
  "Reducerea stresului și anxietății",
  "Echilibru emoțional profund",
  "Promovarea stării generale de bine",
  "Cunoaștere de sine și autocunoaștere",
  "Identificarea tiparelor emoționale perturbatoare",
];

const caracteristici = [
  { label: "100% naturale", desc: "Extrase delicat din flori alese cu grijă" },
  { label: "Non-toxice", desc: "Fără risc de supradozare sau reacții adverse" },
  { label: "Sigure pentru toți", desc: "Adulți, copii și animale de companie" },
  { label: "38 esențe florale", desc: "Fiecare corespunzând unei stări emoționale specifice" },
];

export default function TerapiaBach() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Terapia Dr. Bach Iași – 38 Esențe Florale pentru Echilibru Emoțional | FrecventaVietii</title>
        <meta name="description" content="Terapia florală Dr. Bach în Iași – 38 esențe florale pentru anxietate, depresie, frică, stres emoțional și dezechilibre mentale. Abordare holistică naturală. Programări: 0755 560 592." />
        <meta name="keywords" content="terapia Bach Iași, esențe florale Bach, remedii Bach Iași, anxietate tratament natural, echilibru emoțional Iași" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/terapia-bach" />
        <meta property="og:title" content="Terapia Dr. Bach Iași | FrecventaVietii" />
        <meta property="og:description" content="38 esențe florale pentru echilibru emoțional, anxietate și stres. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/terapia-bach" />
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_40%_60%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <Flower className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Terapia Dr. Bach
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Consiliere personalizată cu remedii florale — un proces terapeutic profund care îmbină cunoașterea tradițională a plantelor cu înțelegerea stărilor emoționale umane.
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
              <Clock className="w-4 h-4 text-accent" /> Sesiuni individuale personalizate
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Dezvoltată de Dr. Edward Bach în anii 1930</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>38 esențe florale disponibile</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Despre remediile florale Dr. Bach</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Consilierea individuală cu remedii florale Bach reprezintă un proces terapeutic profund, care îmbină cunoașterea tradițională a plantelor cu înțelegerea complexă a stărilor emoționale umane. Această metodă unică a fost dezvoltată de <strong className="text-foreground">Dr. Edward Bach în anii 1930</strong> și se bazează pe principiul că echilibrul emoțional influențează sănătatea generală a unei persoane.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Prin sesiunile de consiliere individuală, vi se oferă un <strong className="text-foreground">spațiu sigur și înțelegător</strong> unde emoțiile și provocările cu care vă confruntați pot fi exprimate liber. Un specialist certificat vă va ghida spre cunoașterea de sine, ajutându-vă să identificați tiparele emoționale care vă perturbă echilibrul.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Procesul începe cu o evaluare atentă a stării dvs. emoționale, urmată de o selecție meticuloasă a remediilor florale care să răspundă cel mai bine vibrației și nevoilor unice ale sufletului dvs. <strong className="text-foreground">Nu mai puțin de 38 de esențe florale</strong> sunt disponibile, fiecare corespunzătoare cu o emoție sau stare specifică — de la teamă și incertitudine până la descurajare și solitudine.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Caracteristicile remediilor florale</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {caracteristici.map((c) => (
                  <div key={c.label} className="bg-[#F7F5F2] rounded-2xl p-5 border-l-4 border-accent">
                    <h3 className="font-bold text-foreground mb-1">{c.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Ce se întâmplă la o sesiune?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Sesiunea individuală are scopul de a explora și de a adresa stările emoționale și mentale care pot influența sănătatea și bunăstarea dumneavoastră.
              </p>
              <div className="space-y-4">
                {sesiunePasi.map((pas) => (
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

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Avantaje și beneficii</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Fie că vă confruntați cu stres, anxietate, dezechilibre emoționale sau pur și simplu căutați o metodă naturală de a îmbunătăți bunăstarea, consilierea cu remedii florale Bach vă poate oferi suportul necesar:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {avantaje.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4 shadow-sm">
                    <Heart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
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
              <h3 className="font-serif text-xl font-bold mb-3">Programează o sesiune</h3>
              <div className="bg-white/10 rounded-xl p-4 mb-5 text-sm space-y-1">
                <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Sesiune individuală</p>
                <p className="text-white/90 leading-relaxed text-sm">
                  Personalizată complet nevoilor dumneavoastră emoționale și spirituale.
                </p>
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

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-[#F7F5F2] rounded-2xl p-5 border border-border text-sm text-muted-foreground leading-relaxed"
            >
              <Flower className="w-5 h-5 text-accent mb-3" />
              <p>
                Remediile florale Bach sunt <strong className="text-foreground">100% naturale și non-toxice</strong>. Nu există risc de supradozare sau reacții adverse, ceea ce le face sigure pentru utilizare de către adulți, copii și animale de companie.
              </p>
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
            Consilierea cu remedii florale Bach este o metodă complementară și nu înlocuiește consultul psihologic sau medical. Dacă vă confruntați cu probleme grave de sănătate mintală, vă recomandăm să consultați un specialist.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
