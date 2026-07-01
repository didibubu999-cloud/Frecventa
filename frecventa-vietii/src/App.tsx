import React, { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Auriculoterapie from "@/pages/auriculoterapie";
import TerapiaBowen from "@/pages/terapia-bowen";
import TerapiaFohow from "@/pages/terapia-fohow";
import AlergenTest from "@/pages/alergen-test";
import TerapiaBach from "@/pages/terapia-bach";
import BiorezonantaRaycomp from "@/pages/biorezonanta-raycomp";
import SaruriSchussler from "@/pages/saruri-schussler";
import { motion } from "framer-motion";
import { ChevronDown, Phone, Globe, Shield, Heart, Quote, Menu, X, ArrowRight, Activity, Ear, CircleDot, Zap, Sparkles, Mail, MapPin, Flower, Leaf, ExternalLink } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const queryClient = new QueryClient();

const navMenus: Record<string, { label: string; href: string; desc?: string }[]> = {
  "Acasă": [],
  "Servicii": [
    { label: "Auriculoterapie", href: "/servicii/auriculoterapie", desc: "Puncte specifice ale urechii" },
    { label: "Alergen Test", href: "/servicii/alergen-test", desc: "1000 substanțe evaluate precis" },
    { label: "Biorezonanță Raycomp 1000", href: "/servicii/biorezonanta-raycomp", desc: "35 domenii investigate" },
  ],
  "Stare de Bine": [
    { label: "Terapia Bowen", href: "/servicii/terapia-bowen", desc: "Mișcări delicate pe țesut conjunctiv" },
    { label: "Terapia Fohow", href: "/servicii/terapia-fohow", desc: "Medicină tradițională chinezească" },
    { label: "Terapia Dr. Bach", href: "/servicii/terapia-bach", desc: "38 esențe florale pentru echilibru emoțional" },
    { label: "Terapia cu săruri Schüssler", href: "/servicii/saruri-schussler", desc: "12 minerale esențiale pentru echilibru celular" },
  ],
  "Biorezonanță": [],
  "Magazin": [],
  "Contact": [
    { label: "Programare Online", href: "#contact", desc: "Rezervă o ședință" },
    { label: "Locație & Hartă", href: "#contact", desc: "Aleea Tudor Niculai 22, Iași" },
    { label: "Telefon", href: "tel:0755560592", desc: "0755 560 592" },
    { label: "Email", href: "mailto:contact@organic-natura.ro", desc: "contact@organic-natura.ro" },
  ],
};

const navDirectHref: Record<string, string> = {
  "Biorezonanță": "/servicii/biorezonanta-raycomp",
};

function NavDropdown({ label, href, items }: { label: string; href: string; items: { label: string; href: string; desc?: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (items.length === 0) {
    return (
      <a href={href} className="flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors py-2">
        {label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
        data-testid={`nav-menu-${label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
        >
          <div className="p-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex flex-col px-4 py-3 rounded-lg hover:bg-[#F7F5F2] group transition-colors"
                data-testid={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                {item.desc && <span className="text-xs text-muted-foreground mt-0.5">{item.desc}</span>}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuEntries = Object.entries(navMenus);

  return (
    <>
      <div className="w-full bg-accent text-white text-center py-2 text-sm font-medium">
        <Phone className="inline w-4 h-4 mr-1 mb-0.5" />
        Sună pentru programare: 0755 560 592
      </div>
      <nav className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${isScrolled ? "shadow-md py-3" : "py-4"}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="/" className="font-serif text-2xl font-bold text-primary">FrecventaVietii</a>

          <div className="hidden md:flex items-center gap-1">
            {menuEntries.map(([label, items]) =>
              label === "Magazin" ? (
                <a
                  key={label}
                  href="https://organic-natura.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-accent border border-accent/50 rounded-lg px-3 py-1.5 hover:bg-accent hover:text-white transition-all duration-200 ml-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Magazin
                </a>
              ) : (
                <NavDropdown
                  key={label}
                  label={label}
                  href={navDirectHref[label] ?? `#${label.toLowerCase().replace(/\s+/g, "-")}`}
                  items={items}
                />
              )
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0755560592" className="flex items-center text-sm font-bold text-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-1.5 text-accent" />
              0755 560 592
            </a>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6" data-testid="button-programare">
              Programare
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[102px] z-40 bg-white md:hidden flex flex-col overflow-y-auto shadow-lg">
          {menuEntries.map(([label, items]) => (
            <div key={label} className="border-b">
              {label === "Magazin" ? (
                <a
                  href="https://organic-natura.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-6 py-4 text-base font-semibold text-accent"
                >
                  <ExternalLink className="w-4 h-4" />
                  Magazin
                </a>
              ) : items.length === 0 ? (
                <a
                  href={navDirectHref[label] ?? "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ) : (
                <>
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-base font-medium text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                  >
                    {label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === label && (
                    <div className="bg-[#F7F5F2] px-6 pb-4 flex flex-col gap-1">
                      {items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 text-sm text-foreground font-medium hover:text-primary transition-colors border-b border-gray-200 last:border-0"
                        >
                          {item.label}
                          {item.desc && <span className="block text-xs text-muted-foreground">{item.desc}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="px-6 py-4">
            <Button className="w-full bg-primary text-white rounded-full">Programare</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
        >
          Armonie profundă pentru minte, corp și suflet.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-light text-primary-foreground/90 max-w-2xl mx-auto mb-10"
        >
          Fiecare serviciu include evaluare detaliată și recomandări personalizate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Descoperă Terapiile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold tracking-wider text-accent uppercase mb-4">Despre abordarea noastră</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              Privim corpul omenesc ca pe un ecosistem care are nevoie de frecvența corectă.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Într-o lume tot mai grăbită, zgomotul exterior ajunge adesea să acopere ceea ce simțim cu adevărat la nivel interior. Noi credem că fiecare organism are propriul ritm și propriile nevoi energetice.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mr-6">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tehnologie precisă germană</h3>
                <p className="text-muted-foreground">Echipamente certificate pentru măsurători energetice precise și intervenții non-invazive.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mr-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Evaluări holistice sigure</h3>
                <p className="text-muted-foreground">Diagnosticarea identifică dezechilibrele înainte ca ele să se manifeste la nivel fizic.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md mr-6">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Aliniere emoțională suportivă</h3>
                <p className="text-muted-foreground">Terapii care lucrează atât pe corpul fizic, cât și pe eliberarea blocajelor emoționale.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Ear className="w-6 h-6 text-accent" />,
      title: "Auriculoterapie",
      href: "/servicii/auriculoterapie",
      description: "O tehnică terapeutică non-invazivă ce folosește puncte specifice ale urechii pentru a trata diverse afecțiuni și a restabili echilibrul energetic al organismului."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Terapia Bowen",
      href: "/servicii/terapia-bowen",
      description: "Un tratament holistic alternativ care presupune aplicarea unor mișcări delicate pe țesutul conjunctiv pentru a stimula procesul de auto-vindecare."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "Terapia Fohow",
      href: "/servicii/terapia-fohow",
      description: "Un tratament natural, bazat pe tehnicile medicinii tradiționale chinezești. Masajul bio-energo-terapeutic Fohow redă vitalitatea și ameliorează durerile."
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Alergen Test",
      href: "/servicii/alergen-test",
      description: "70 grup, 1000 substanțe alimentare și nealimentare evaluate și măsurate precis pentru a identifica intoleranțele care îți afectează vitalitatea."
    },
    {
      icon: <Flower className="w-6 h-6 text-accent" />,
      title: "Terapia Dr. Bach",
      href: "/servicii/terapia-bach",
      description: "Consiliere personalizată cu 38 esențe florale pentru echilibru emoțional profund, reducerea stresului și clarificarea obiectivelor personale."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Biorezonanță Raycomp 1000",
      href: "/servicii/biorezonanta-raycomp",
      description: "35 de domenii investigate, echilibrare energetică, protocoale acro-terapeutice personalizate pentru a aduce corpul pe frecvența optimă de funcționare."
    },
    {
      icon: <Leaf className="w-6 h-6 text-accent" />,
      title: "Terapia cu săruri Schüssler",
      href: "/servicii/saruri-schussler",
      description: "12 minerale esențiale preparate homeopatic care restabilesc echilibrul celular și stimulează capacitatea naturală de vindecare a organismului."
    },
  ];

  return (
    <section id="servicii" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-wider text-accent uppercase mb-4">Servicii</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Descoperă terapiile noastre</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border rounded-xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 bg-card relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
              {service.href ? (
                <a href={service.href} className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  Detalii <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors cursor-default opacity-50">
                  Detalii <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-wider text-accent uppercase mb-4">Recenzii Clienți</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Ce spun clienții despre schimbările resimțite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "După luni de insomnie, prima mea ședință de Biorezonanță a fost ca un buton de resetare. Am plecat de acolo plutind.",
              name: "Ana Mihălescu",
              role: "Domeniul IT",
              initials: "AM"
            },
            {
              quote: "Am venit plin de anxietate și îndoieli. Profesionalismul și măsurătorile precise mi-au oferit confirmările la care tânjeam.",
              name: "Andrei T.",
              role: "Antreprenor",
              initials: "AT"
            },
            {
              quote: "Fiecare echilibrare bioenergetică m-a învățat cum să îmi reasum granițele personale și să mă raportez mai calm la factori de stres.",
              name: "Iulia Dinu",
              role: "Profesor",
              initials: "ID"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-border/50 relative flex flex-col"
            >
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
              <div className="mb-8 flex-grow">
                <p className="text-foreground text-lg italic leading-relaxed">"{item.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-wider text-accent uppercase mb-4">Informații Utile</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Întrebări frecvente</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-border py-2">
            <AccordionTrigger className="text-lg font-bold text-foreground hover:text-accent transition-colors hover:no-underline text-left">
              Ce presupune diagnosticarea prin biorezonanță?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Diagnosticarea prin biorezonanță este o metodă neinvazivă de analiză a câmpului electromagnetic al corpului, identificând dezechilibrele la nivel energetic înainte ca ele să se manifeste ca afecțiuni fizice, oferind astfel o hartă precisă a stării de sănătate a organismului.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-border py-2">
            <AccordionTrigger className="text-lg font-bold text-foreground hover:text-accent transition-colors hover:no-underline text-left">
              Câte ședințe sunt necesare pentru a vedea rezultate?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Numărul de ședințe variază în funcție de complexitatea dezechilibrelor și de tipul terapiei alese. De regulă, o îmbunătățire a stării generale se resimte încă de la prima ședință, însă pentru rezultate durabile, recomandăm un protocol de 3-5 ședințe urmate de reevaluare.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-border py-2">
            <AccordionTrigger className="text-lg font-bold text-foreground hover:text-accent transition-colors hover:no-underline text-left">
              Sunt terapiile potrivite pentru copii?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Da, majoritatea terapiilor noastre, inclusiv biorezonanța și terapia Bowen, sunt blânde, neinvazive și complet sigure pentru copii, ajutându-i în probleme precum alergii, tulburări de somn, hiperactivitate sau scăderea imunității.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b border-border py-2">
            <AccordionTrigger className="text-lg font-bold text-foreground hover:text-accent transition-colors hover:no-underline text-left">
              Cum mă pregătesc pentru o ședință?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              Recomandăm să purtați haine comode, din materiale naturale, să fiți hidratați (beți suficientă apă plată înainte) și să evitați mesele copioase cu cel puțin o oră înainte de terapie. De asemenea, în ziua evaluării, este bine să evitați consumul excesiv de cafea sau energizante.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,96.6,-2.8C96.4,12.4,90,27.5,80.7,40.1C71.4,52.7,59.2,62.8,45.8,70.9C32.4,79,17.8,85.1,2.1,81.4C-13.6,77.7,-28.3,64,-42.6,53.4C-56.9,42.8,-70.8,35.3,-79.1,23.3C-87.4,11.3,-90.1,-5.2,-85.4,-19.4C-80.7,-33.6,-68.6,-45.5,-55.4,-53.4C-42.2,-61.3,-28,-65.2,-13.9,-68.6C0.2,-72,15,-74.9,30.6,-78.5C44.7,-76.4,58.8,-69.2,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-primary-foreground">
            <p className="text-xs font-bold tracking-wider text-accent uppercase mb-4">Programări directe</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Începe călătoria ta spre echilibru astăzi.</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-lg">
              Completează formularul pentru o evaluare și îți vom confirma detaliile în cel mai scurt timp, fie telefonic, fie prin email.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold">0755 560 592</p>
                  <p className="text-sm text-primary-foreground/70">COJOCARU IOANA</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold">contact@organic-natura.ro</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold">organic-natura.ro</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold">Aleea Tudor Niculai nr. 22, Iași</p>
                </div>
              </div>
            </div>

            <div className="w-full h-48 bg-primary-foreground/10 rounded-xl flex items-center justify-center border border-primary-foreground/20 overflow-hidden">
              <div className="text-center opacity-50">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Harta Cabinetului</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex border-b border-border mb-8">
                <button className="pb-4 px-4 font-bold text-primary border-b-2 border-primary flex-1 text-center">
                  Formular Cerere
                </button>
                <button className="pb-4 px-4 font-medium text-muted-foreground border-b-2 border-transparent flex-1 text-center hover:text-foreground transition-colors">
                  Calendar Direct
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nume complet *</label>
                    <Input placeholder="Popescu Ion" className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Telefon *</label>
                    <Input placeholder="07XX XXX XXX" className="bg-background border-border" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Adresă de Email *</label>
                  <Input type="email" placeholder="nume@email.ro" className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Serviciu dorit</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Alege un serviciu (opțional)</option>
                    <option value="auriculoterapie">Auriculoterapie</option>
                    <option value="bowen">Terapia Bowen</option>
                    <option value="fohow">Terapia Fohow</option>
                    <option value="alergen">Alergen Test</option>
                    <option value="raycomp">Biorezonanță Raycomp 1000</option>
                    <option value="cristalo">Cristaloterapie Integrativă</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Data ședinței</label>
                    <Input type="date" className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ora preferată</label>
                    <Input type="time" className="bg-background border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mesaj adițional</label>
                  <Textarea placeholder="Detalii despre serviciu sau simptome..." className="bg-background border-border min-h-[100px]" />
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg rounded-xl shadow-lg mt-4">
                  Trimite Solicitarea
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">Frecvența Vieții</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tehnologie de ultimă generație și terapii holistice pentru evaluarea și echilibrarea energetică avansată a organismului.
            </p>
            <div className="text-white/50 text-xs space-y-1">
              <p className="font-bold">ORGANIC NATURA S.R.L.</p>
              <p>Jud. Iași, Municipiul Iași, Strada Sf. Gheorghe, Nr. 3, parter, Ap. 1</p>
              <p className="pt-4">© 2026 Frecvența Vieții. Timp pentru corpul și spiritul tău.</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-accent mb-6 text-sm tracking-wider">NAVIGARE RAPIDĂ</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Servicii Evaluare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biorezonanță</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stare de Bine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programări</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent mb-6 text-sm tracking-wider">LEGAL / GDPR</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Politică de Confidențialitate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politică Cookie-uri</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Protecția Consumatorului - A.N.P.C.</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent mb-6 text-sm tracking-wider">CONTACT CABINET</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-white">Persoană:</span> Cojocaru Ioana
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-white">Adresă:</span> Aleea Tudor Niculai nr. 22, Iași
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-white">Email:</span> contact@organic-natura.ro
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40 leading-relaxed">
          <p>Cod Unic de înregistrare: 48369771 din data de: 22.06.2023 | Reg. Com.: J2023001860221 / EUID: ROONRC.J2023001860221 | Certificat Seria B Nr: 0148295 / Data eliberării: 26.02.2025</p>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background font-sans">
      <Helmet>
        <title>FrecventaVietii – Terapii Holistice în Iași | Auriculoterapie, Biorezonanță, Terapie Bowen</title>
        <meta name="description" content="Cabinet de terapii holistice în Iași. Auriculoterapie, Biorezonanță Raycomp PS 1000, Terapie Bowen, Terapia Dr. Bach, Alergen Test, Terapia Fohow, Săruri Schüssler. Programări: 0755 560 592." />
        <link rel="canonical" href="https://frecventavietii.ro/" />
        <meta property="og:url" content="https://frecventavietii.ro/" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicii/auriculoterapie" component={Auriculoterapie} />
      <Route path="/servicii/terapia-bowen" component={TerapiaBowen} />
      <Route path="/servicii/terapia-fohow" component={TerapiaFohow} />
      <Route path="/servicii/alergen-test" component={AlergenTest} />
      <Route path="/servicii/terapia-bach" component={TerapiaBach} />
      <Route path="/servicii/biorezonanta-raycomp" component={BiorezonantaRaycomp} />
      <Route path="/servicii/saruri-schussler" component={SaruriSchussler} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
