import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Clock, AlertCircle, FlaskConical, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const pachetePret = [
  {
    titlu: "Test Alimentar",
    pret: "550 lei",
    desc: "32 grupe — alimente, aditivi alimentari, conservanți, condimente etc.",
    substante: "~350 substanțe",
    highlight: false,
  },
  {
    titlu: "Test Integral",
    pret: "950 lei",
    desc: "70 grupe de substanțe alimentare și nealimentare complete.",
    substante: "~1000 substanțe",
    highlight: true,
  },
];

const afectiuni = [
  "Obezitate și imposibilitate de a slăbi",
  "Acnee și probleme de piele",
  "Oboseală cronică",
  "Constipație",
  "Anxietate",
  "Balonare și disconfort digestiv",
];

type AllergenGroup = { group: string; items: string[] };

const allergenGroups: AllergenGroup[] = [
  {
    group: "G01 — NaCl (sare de bucătărie)",
    items: ["NaCl (sare de bucătărie)"],
  },
  {
    group: "G02 — Lactoză",
    items: ["Lactoză"],
  },
  {
    group: "G03 — Ulei de parafină",
    items: ["Ulei de parafină"],
  },
  {
    group: "G04 — Săruri și fenoli",
    items: ["NaCl + Fenol"],
  },
  {
    group: "G05 — Amine biogene",
    items: ["Histamină", "Serotonină", "Tiramină", "Feniletilamină"],
  },
  {
    group: "G06 — Gliadină, gluten, acid acetilsalicilic, fosfați",
    items: ["Gliadină", "Gluten", "Acid acetilsalicilic", "Fosfați"],
  },
  {
    group: "G07 — Produse lactate, ouă",
    items: [
      "Lapte", "Iaurt", "Smântână", "Unt", "Lapte condensat", "Bifidus",
      "Lapte bătut", "Albuș de ou", "Lapte acru", "Brânză de vacă",
      "Gălbenuș de ou", "Chefir",
    ],
  },
  {
    group: "G08 — Uleiuri vegetale",
    items: [
      "Ulei de șofran", "Margarină", "Ulei de floarea soarelui",
      "Ulei de arahide", "Ulei de măsline", "Ulei de gătit (prăjit)", "Ulei de rapiță",
    ],
  },
  {
    group: "G09 — Brânzeturi",
    items: ["Cașcaval", "Cascaval moale", "Feta / Telemea", "Camembert (brânză cu mucegai)"],
  },
  {
    group: "G10 — Carne, tofu",
    items: [
      "Carne de porc", "Carne de pui", "Carne de vită", "Carne de iepure",
      "Carne de vițel", "Carne de curcan", "Carne de miel", "Tofu",
    ],
  },
  {
    group: "G11 — Pește, crustacee și moluște",
    items: [
      "Țipar", "Pește alb (coregon, păstrăv argintiu)", "Cambulă, plătică",
      "Rac de râu", "Păstrăv brun", "Știucă", "Homar", "Cod", "Crap",
      "Creveți", "Somon", "Midii", "Sardine", "Soleide (limbă-de-mare)",
      "Ton", "Sepie",
    ],
  },
  {
    group: "G12 — Cereale, orez, semințe",
    items: [
      "Grâu", "Ovăz", "Porumb", "Orez", "Semințe de in", "Orz",
      "Semințe de susan", "Secară", "Mei auriu", "Soia", "Alac", "Hrișcă", "Mac",
    ],
  },
  {
    group: "G13 — Leguminoase, semințe",
    items: [
      "Mazăre galbenă", "Mazăre verde", "Semințe de dovleac",
      "Linte", "Semințe de floarea soarelui",
    ],
  },
  {
    group: "G14 — Zahăr, miere, lemn dulce",
    items: [
      "Zahăr alb", "Lactoză", "Zahăr din trestie", "Lemn dulce",
      "Zahăr din sfeclă de zahăr", "Miere de albine", "Fructoză",
    ],
  },
  {
    group: "G15 — Îndulcitori artificiali, înlocuitori de zahăr",
    items: ["Sorbitol", "Maltitol", "Manitol", "Zaharină", "Xilitol", "Ciclamat", "Palatinoză", "Aspartam"],
  },
  {
    group: "G16 — Sare, substanțe picante, iod, fluor",
    items: [
      "Sare", "Sare cu condimente", "Sare de mare", "Sare cu plante aromatice",
      "Clorură de sodiu", "Glutamat", "Iodură de sodiu", "Substanțe picante (de conservare)",
    ],
  },
  {
    group: "G17 — Must de bere, oțet",
    items: ["Oțet de fructe", "Oțet de vin", "Cenovis", "Maggiwürze (sos condimentat)"],
  },
  {
    group: "G18 — Condimente",
    items: [
      "Anason", "Busuioc", "Cimbru", "Piper Cayenne", "Curry", "Mărar",
      "Tarhon", "Cuișoare", "Ghimbir", "Usturoi", "Coriandru", "Chimion",
      "Frunze de dafin", "Măghiran", "Nucșoară", "Oregano", "Boia de ardei",
      "Pătrunjel", "Piper", "Rozmarin", "Salvie", "Arpagic", "Muștar",
      "Cimbrișor", "Ienupăr", "Scorțișoară",
    ],
  },
  {
    group: "G19 — Ceaiuri de plante",
    items: [
      "Verbenă", "Semințe de fenicul", "Măceșe", "Sunătoare",
      "Mușețel", "Flori de tei", "Mentă piperată", "Roiniță",
    ],
  },
  {
    group: "G20 — Cafea, ceai",
    items: ["Espresso", "Cafea din cereale", "Cacao", "Ceai negru", "Nescafe", "Ceai verde"],
  },
  {
    group: "G21 — Ingrediente de copt",
    items: ["Drojdie", "Praf de copt", "Pudră de ciocolată", "Gelatină", "Vanilie", "Șofran"],
  },
  {
    group: "G22 — Nuci",
    items: ["Alune", "Alune braziliene", "Nuci", "Nuci pecan", "Arahide", "Nucă de cocos", "Migdale", "Fistic"],
  },
  {
    group: "G23 — Ciuperci comestibile",
    items: ["Champignon", "Zbârciog", "Trâmbița-piticilor", "Porcini"],
  },
  {
    group: "G24 — Bere, vin, brandy/cognac",
    items: ["Vin alb", "Vin roșu", "Bere", "Cognac / Brandy"],
  },
  {
    group: "G25 — Legume cu tuberculi",
    items: ["Cartof", "Ridiche de lună", "Morcov", "Țelină", "Sfeclă roșie", "Gulie", "Ridiche", "Ceapă"],
  },
  {
    group: "G26 — Legume, pepene galben",
    items: [
      "Varză creață", "Brocoli", "Castravete", "Varză roșie", "Tubercul de fenicul",
      "Zucchini", "Varză de Bruxelles", "Praz", "Pepene galben", "Conopidă",
      "Ardei iute", "Fasole", "Roșii",
    ],
  },
  {
    group: "G27 — Fructe cu semințe",
    items: ["Măr", "Pară", "Strugure", "Stafide"],
  },
  {
    group: "G28 — Fructe sâmburoase, fructe exotice",
    items: ["Piersică", "Cireașă", "Nectarină", "Ananas", "Caisă", "Banană", "Prună", "Smochine"],
  },
  {
    group: "G29 — Fructe de pădure",
    items: ["Căpșună", "Zmeură", "Mure", "Coacăze"],
  },
  {
    group: "G30 — Citrice",
    items: ["Portocală", "Mandarină", "Grapefruit", "Lămâie"],
  },
  {
    group: "G31 — Coloranți alimentari",
    items: [
      "E102 Tartazină", "E104 Galben chinolină", "E110 Galben-portocaliu (sunset)",
      "E120 Coșenilă, carmin", "E122 Azorubină", "E123 Amarant", "E124 Ponceau 4R",
      "E127 Eritrozină", "E131 Albastru patent V", "E132 Indigotină",
      "E142 Verde acid briliant BS", "E150 Caramel", "E151 Negru briliant BN",
      "E153 Cărbune vegetal", "E162 Extract de sfeclă roșie (betanină)",
      "E171 Dioxid de titan", "E172 Aluminiu",
    ],
  },
  {
    group: "G32 — Conservanți alimentari",
    items: [
      "E200 Acid sorbic", "E210 Acid benzoic", "E211 Benzoat de sodiu",
      "E212 Benzoat de potasiu", "E214 Etil paraben", "E216 Propil paraben",
      "E218 Metil paraben", "E221 Sulfit de sodiu", "E222 Bisulfit de sodiu",
      "E223 Disulfit de sodiu", "E230 Bifenil", "E231 Ortofenil fenol",
      "E236 Acid formic", "E251 Nitrat de sodiu", "E252 Nitrat de potasiu",
      "E270 Acid lactic", "E280 Acid propionic", "E281 Propionat de sodiu",
    ],
  },
  {
    group: "G33 — Antioxidanți, emulgatori, stabilizatori, potențatori de gust",
    items: [
      "E310 Galat de propil", "E311 Galat de octil", "E312 Galat de dodecil",
      "E320 BHA (Butilhidroxianisol)", "E321 BHT (Butilhidroxitoluol)", "E322 Lecitină",
      "E406 Agar-agar", "E407 Caragenan", "E410 Gumă de carruba", "E414 Gumă arabică",
      "E420 Sorbitol", "E421 Manitol", "E422 Glicerină", "E440a Pectină",
      "E450b Trifosfat pentasodic", "E450c Hexametafosfat de sodiu",
      "E535 Ferocianură de sodiu", "E536 Ferocianură de potasiu",
      "E621 Glutamat sodic", "E622 Glutamat potasic", "E623 Glutamat de calciu",
      "E627 Guanilat de sodiu", "E640 Glicină", "E641 Leucină",
    ],
  },
  {
    group: "G34 — Diverse substanțe E",
    items: ["E905 Parafină", "E924 Bromat de potasiu", "E951 Aspartam", "E952 Ciclamat", "E954 Zaharină"],
  },
  {
    group: "G35 — Arome alimentare",
    items: [
      "Ananas", "Măr", "Caisă", "Banană", "Migdale amare", "Mure", "Coacăze negre",
      "Căpșună", "Afine", "Zmeură", "Cafea", "Kirsch", "Cireșe", "Migdale",
      "Maraschino (cireșe amare)", "Portocale", "Mentă piperată", "Piersică",
      "Fistic", "Rom", "Strugure", "Vanilie", "Fructe de pădure", "Pere Williams", "Lămâie",
    ],
  },
  {
    group: "G36 — Dezinfectanți și conservanți alimentari",
    items: [
      "Acid 2-etilmercuritiobenzoic", "Clorură de benzalconiu", "Bronopol",
      "Clorură de cetalconiu", "Clorură de cetilpiridiniu", "Cloracetamidă",
      "Digluconat de clorhexidină", "Clorcrezol (PCMC)", "Cloroxilenol",
      "Uree de diazolidinil (Germall II)", "Diclorofen", "Euxyl K400",
      "Glutaraldehidă", "Uree de imidazolidinilă (Germall 115)", "Timerfonat de sodiu",
      "Osmaron B", "Fenilmercuric", "Quaternium 15", "Acid sorbic",
      "BHA (Butilhidroxianisol)", "BHT (Butilhidroxitoluol)", "Galat de dodecil",
      "tert. Butilhidrochinonă", "Butil-4-hidroxibenzoat", "Etil-4-hidroxibenzoat",
      "Metil-4-hidroxibenzoat", "Propil-4-hidroxibenzoat", "Dibromdicianobutan", "Fenoxietanol",
    ],
  },
  {
    group: "G37 — Polen rar / puțin alergen",
    items: [
      "Arțar", "Amarant (coada vulpii)", "Ochiul-boului", "Urzică", "Crizantemă",
      "Dalie", "Stejar", "Frasin", "Molid", "Liliac", "Talpa gâștei albă",
      "Paracherniță", "Splinuță", "Carpen", "Soc", "Hamei", "Iasomie falsă",
      "Pin", "Tei", "Păpădie", "Lucernă", "Porumb", "Margaretă",
      "Rapiță", "Robinie (Salcâm fals)", "Fag european", "Castan",
    ],
  },
  {
    group: "G38 — Polen frecvent, rar alergen",
    items: ["Orz", "Ovăz", "Cynodon dactylon", "Plop", "Platan", "Perișor", "Ambrozie", "Ulm", "Salcie", "Grâu"],
  },
  {
    group: "G39 — Polen frecvent, des alergen",
    items: [
      "Pelin comun", "Mesteacăn", "Arin", "Alun", "Flocoșică",
      "Cynosurus cristatus", "Dactylis glomerata", "Lolium perenne",
      "Secară", "Anthoxanthum odoratum", "Măcriș", "Pătlagină",
      "Mohor", "Timoftică", "Firuță", "Păiuș înalt",
    ],
  },
  {
    group: "G40 — Epitelii animale, venin de insecte",
    items: [
      "Găină", "Rață", "Gâscă", "Peruș", "Hamster auriu", "Câine",
      "Iepure", "Pisică", "Porc de guineea", "Cal", "Vită", "Oaie",
      "Porc", "Capră", "Cămilă", "Șoarece", "Șobolan",
      "Acarian (Dermatophagoides pharinae)", "Acarian de praf (Dermatophagoides pterronyssinus)",
      "Venin de albină", "Venin de viespe",
    ],
  },
  {
    group: "G41 — Fungi (ciuperci microscopice)",
    items: [
      "Alternaria tenuis", "Aspergillus fumigatus", "Botrytis cinerea",
      "Candida albicans", "Chaetomium globosum", "Cladosporium herbarum",
      "Curvularia lunata", "Fusarium moniliforme", "Helmithosporum halodes",
      "Microsporum canis", "Mucor mucedo", "Neurospora sitophila",
      "Penicillium notatum", "Phoma betae", "Pullularia pullulans",
      "Rhizopus nigricans", "Saccharomyces cerevisiae", "Serpula lacrymans",
      "Trichophyton mentagrophytes", "Ustilago tritici", "Alternaria alternata",
      "Aspergillus niger", "Mucor racemosus", "Penicillium expansum",
      "Aspergillus terreus", "Epidermophyton flocosum", "Epicoccum purpurascens",
      "Fusarium solani", "Penicillium roqueforti", "Stemphylium botryosum",
    ],
  },
  {
    group: "G42 — Praf de lemn, fibre vegetale, fân",
    items: [
      "Lemn de fag", "Lemn de stejar", "Lemn de molid", "Lemn de pin",
      "Lemn de nuc", "Lemn de brad", "Lemn de ulm", "Lemn de abachi",
      "Lemn de limba", "Lemn de mahon", "Lemn de macoré", "Lemn de ramin",
      "Lemn de teak", "Bumbac", "In", "Copac de bumbac (Ceiba pentandra)", "Fân",
    ],
  },
  {
    group: "G43 — Gospodărie, cosmetice",
    items: [
      "1,3-Difenilguanidină", "Acid abietic", "Abitol", "Adep lanae",
      "Amerchol L101", "Extract de flori de arnică", "Alcool benzilic",
      "Benzil-salicilat", "Cocamidopropilbetaină", "Difenilthiouree",
      "DMDM Hidantoină", "Hidrochinonă", "Izopropilmiristat",
      "Extract de flori de mușețel", "Ulei de lămâiță", "Extract de flori de spilcuță",
      "Benzoat de sodiu", "Alifie de polietilenglicol", "Primin",
      "Propilenglicol", "Extract de vetrice", "Extract de coada șoricelului",
      "Mix de sesquiterpenlactonă", "Sorbitansesquioleat", "Balsam de tolu",
      "Rășină de toluolsulfonamid-formaldehidă (Santolite MS)", "Triclosan",
      "Trolamină (Trietanolamină)", "Vanilină",
      "Unguent de alcool de lână (DAB 9)", "Piritionă de zinc",
    ],
  },
  {
    group: "G44 — Textile, fibre naturale",
    items: ["Alpacă", "Angora", "Bumbac", "Iută", "Cașmir", "In", "Mohair", "Ramie", "Mătase", "Lână de oaie"],
  },
  {
    group: "G45 — Textile, fibre artificiale",
    items: ["Acril", "Nailon", "Poliamidă", "Poliester", "Poliamidă / Poliuretan", "Vâscoză"],
  },
  {
    group: "G46 — Coloranți de textile",
    items: [
      "4-Aminofenol", "Naftol AS",
      "Colorant dispersie albastru 1", "Colorant dispersie albastru 3",
      "Colorant dispersie galben 3", "Colorant dispersie galben 42",
      "Colorant dispersie portocaliu 9", "Colorant dispersie portocaliu 1",
      "Colorant dispersie portocaliu 3", "Colorant dispersie portocaliu 11",
      "Colorant dispersie roșu 1", "Colorant dispersie roșu 11",
      "Colorant dispersie roșu 13", "Colorant dispersie roșu 17",
    ],
  },
  {
    group: "G47 — Detergenți, balsam de rufe",
    items: [
      "Ancosoft", "Ariel Futur", "Comfort", "Coral", "Dash", "Enka",
      "Lanolină Express", "Filetti Compact", "Florist", "Genie Lavabo",
      "Kürfein Compact", "Lenor Ultra Alp Fresh", "Maga Color", "Niaxa Compact",
      "Omo Complet", "Persil Megaperls", "Perwoll", "Radion Micro Activ",
      "Rei Ultra", "Fulgi de săpun", "Softlan Ultra", "Sunil Aktiv",
      "Tandil Color", "Total", "Vizir Future", "Wollana Finesse", "Calgon Ultra",
    ],
  },
  {
    group: "G48 — Antibiotice, antiseptice și antimicotice",
    items: [
      "Bacitracină", "Cloramfenicol", "Clorchinaldol", "Cliochinol", "Clotrimazol",
      "Eritromicină", "Framicetinsulfat", "Acid fuzidic (Sare de sodiu)",
      "Sulfat de gentamicină", "Sulfat de kanamicină", "Mafenid",
      "Nistatină", "Oxitetraciclină", "Sulfanilamidă", "Clorhidrat de tetraciclină",
    ],
  },
  {
    group: "G49 — Corticoizi",
    items: [
      "Amcinonidă", "Betametazon-17-valerat", "Budesonid",
      "Clobetazol-17-propionat", "Hidrocortizon", "Hidrocortizon-17-butirat",
      "Prednisolon", "Triamcinolon acetonid",
    ],
  },
  {
    group: "G50 — Anestezice locale, substanțe pentru ochi",
    items: [
      "Cincocaină hidroclorică", "Lidocaină hidroclorică", "Procaină hidroclorică",
      "Tetracaină hidroclorică", "Sulfat de atropină", "Sare disodică a acidului edetinic",
      "Clorhidrat de fenilefrină", "Pilocarpină hidroclorică", "Sulfat de polimixină B",
      "Benzoil peroxid", "Bufexamac", "Dexpantonol", "Mentol", "Polidocanol", "Propolis",
    ],
  },
  {
    group: "G51 — Antibiotice, corticoizi, peniciline 1",
    items: [
      "Aciclovir", "Ampicilină", "Carbadox", "Ceftriaxon", "Cefuroxim",
      "Clorochin difosfat", "Clindamicină", "Doxiciclină", "Etambutol",
      "Hexaclorciclohexan", "Izoniazidă", "Metronidazol", "Penicilină G",
      "Penicilină V", "Sulfatiazol", "Vancomicină", "Virginiamicină",
    ],
  },
  {
    group: "G52 — Antibiotice, corticoizi, peniciline 2",
    items: [
      "Amoxicilină", "Cortizon", "Dexametazonă", "Lomefloxacin",
      "Ofloxacină", "Sulfadiazină", "Sulfametoxazol", "Trimetoprim",
    ],
  },
  {
    group: "G53 — Produse farmaceutice, medicamente psihoactive 1",
    items: [
      "Acid acetilsalicilic (ASS)", "Hidroxid de aluminiu", "Azatioprină",
      "Sulfat de bariu", "Acid cromoglicic", "Droperidol", "Estriol",
      "Ibuprofen", "Hidroxid de magneziu", "Noretisteron", "Paracetamol",
      "Progesteron", "Diazepam", "Sulpiridă",
    ],
  },
  {
    group: "G54 — Produse farmaceutice, medicamente psihoactive 2",
    items: [
      "Adrenalină", "Atenolol", "b-Estradiol 17", "Chinină", "Ciclosporină",
      "Cimetidină", "Diclofenac", "Dinoproston", "Fenoterol", "Halotan",
      "Ketamină", "Metoprololtartrat", "Oxitocină", "Fenazonă", "Propranolol",
      "Salbutamol", "Teofilină", "Doxepin", "Flufenazină", "Haloperidol",
      "Maprotilină", "Prometazină",
    ],
  },
  {
    group: "G55 — Vaccinuri, profilaxia malariei, venin de șarpe",
    items: [
      "Clorochin (profilaxia malariei)", "Difterie", "FSME (meningoencefalită)",
      "Cangrenă de gaz", "Febră galbenă", "Haemophilus influenzae",
      "Hepatita A", "Hepatita B", "Pojar (Morbilli)", "Meflochin (profilaxia malariei)",
      "Rubeolă", "Stafilococi", "Tetanus (Trismus)", "Turbare (rabie)",
      "Tuberculoză (bacili BCG)", "Tifos", "Varicelă", "Poliomielită",
      "Vaccinare Di Te (2×)", "Vaccinare MMR (3×)", "Vaccinare Di Te Pe Po (4×)",
      "Vaccinare Di Te Pe Po HepB Haem (6×)", "Meningococi ACWY",
      "Vaccin pneumococi", "Vaccin gripal", "Vaccin variolă",
      "Vaccin holeră", "Pertussis (tuse convulsivă)", "Virus FSME",
      "Febră de căpușă", "Febră Q", "Borellia Nos",
    ],
  },
  {
    group: "G56 — Metale 1",
    items: [
      "Aluminiu", "Amalgam", "Arsen", "Beriliu", "Plumb", "Crom (VI)",
      "Fier", "Aur", "Iridiu", "Cadmiu", "Cobalt", "Cupru", "Litiu",
      "Magneziu", "Mangan", "Molibden", "Nichel", "Osmiu", "Paladiu",
      "Platină", "Mercur", "Rubidiu", "Argint", "Taliu", "Titan", "Vanadiu", "Zinc",
    ],
  },
  {
    group: "G57 — Metale 2",
    items: ["Galiu", "Iridiu", "Tantal", "Wolfram", "Staniu"],
  },
  {
    group: "G58 — Pesticide 1",
    items: ["Permethrin", "Pyrethrum"],
  },
  {
    group: "G59 — Pesticide 2",
    items: ["Troy polifazic", "Lindan", "Pentaclorfenol", "Sulf"],
  },
  {
    group: "G60 — Pesticide 3",
    items: [
      "Benzisothiazolinone", "Bronopol", "Captan", "Diazinon", "Erbicide",
      "Folpet", "Kathon ITZ-14", "Kathon Skane H-8", "Zineb", "Erpax",
      "Oxiclorură de cupru", "Sulfat de cupru (vitriol albastru)",
      "Coumaphos", "Fenoxaprop-etil",
    ],
  },
  {
    group: "G61 — Pesticide 4",
    items: ["Metaldehid", "Fenol", "Xylamon"],
  },
  {
    group: "G62 — Substanțe de protecție solară",
    items: [
      "2-Etilhexil-4-dimetilaminobenzoat", "2-Etilhexil-4-dimetilmetoxicinnamat",
      "Acid sulfonic 2-Fenil-5-benzimidazol", "3-(4-Metilbenziliden)-camfor",
      "Acid para aminobenzoic (PABA)", "4-ter-butil-4-metoxidibenzoat",
      "Isoamil-4-metoxicinnamat", "Oxibenzon", "Sulisobenzon",
    ],
  },
  {
    group: "G63 — Fotoalergeni",
    items: [
      "5-Brom-4-Clorsalicilanilid", "Mosc Ambrette", "Bitionol",
      "Chinidină sulfat", "Clorhidrat de clorpromazină", "Mix de parfumuri",
      "Hexaclorofen", "Olaquindox", "Clorhidrat de prometazină",
      "Sulfanilamidă", "Tetraclorură de salicilanilidă", "Tiouree", "Tribromsalan",
    ],
  },
  {
    group: "G64 — Produse chimice de mediu 1",
    items: [
      "Clormetil izotiazol", "Formaldehidă", "Amoniac", "Trioxid de antimoniu",
      "Ester metilic al acidului benzoic", "Clor (piscină)", "Lindan (HCH)",
      "Mosc-cetonă", "Mix PCB", "Percloretilenă", "Ciment",
    ],
  },
  {
    group: "G65 — Produse chimice de mediu 2",
    items: ["Acid tereftalic", "Tetrabrom-fenol"],
  },
  {
    group: "G66 — Produse chimice de mediu 3",
    items: [
      "Benzocaină", "Alcool cetilstearilic", "Mix de parfumuri", "Rășină epoxidică",
      "Dicromat de potasiu", "Clorofoniu", "Mercapto mix", "Mercaptobenzotiazol (MBT)",
      "N-Izopropil-N'-fenil-p-fenilendiamină", "Sulfat de neomicină",
      "P-fenilendiamină (PPD)", "Rășină de p-tert.-butilfenol-formaldehidă",
      "Mix de parabeni", "Balsam de Peru", "Mix de thiuram",
      "Alcool de lână", "Dietilditiocarbamat de zinc",
    ],
  },
  {
    group: "G67 — Fibre",
    items: ["Azbest", "Fibre de celuloză", "Fibre de sticlă", "Fibre de ceramică"],
  },
  {
    group: "G68 — Combustibil, gaze de eșapament",
    items: [
      "Benzină fără plumb", "Benzină cu plumb", "Combustibil diesel",
      "Petrol", "Gaze de eșapament (autovehicul)", "Gaz de gătit", "Fum de tutun",
    ],
  },
  {
    group: "G69 — Dizolvanți",
    items: ["Acetonă", "Metanol", "Metietilcetonă", "NC Solvent", "Alcool propilic", "Stiren", "Toluen", "Xilen"],
  },
  {
    group: "G70 — Substanțe de proteze dentare",
    items: [
      "Bisfenol", "Amalgam", "Amalgam-aliaj", "Tetracloroplatinat de amoniu",
      "Peroxid de benzoil", "Eugenol", "Hidrochinonă", "Dicianoaurat de potasiu",
      "N,N-dimetil-p-toluidină", "Tiosulfatoaurat de sodiu", "Clorură de paladiu",
      "Clorură de staniu (II)", "(2-Hidroxietil)-metacrilat", "BIS-GMA",
      "Diuretan dimetilacrilat", "Etilenglicol-dimetilacrilat",
      "Metilmetacrilat", "Trietilenglicol-dimetacrilat",
    ],
  },
];

function AllergenAccordion({ group, items }: AllergenGroup) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-[#F7F5F2] transition-colors text-left"
      >
        <span className="font-semibold text-sm text-foreground">{group}</span>
        <span className="flex items-center gap-2 text-xs text-muted-foreground shrink-0 ml-2">
          {items.length} substanțe
          <ChevronDown className={`w-4 h-4 text-accent transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      {open && (
        <div className="bg-[#F7F5F2] px-5 py-4 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 border-t border-border">
          {items.map((item) => (
            <span key={item} className="text-xs text-muted-foreground py-0.5 flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AlergenTest() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Helmet>
        <title>Alergen Test Iași – 1000 Substanțe Evaluate | FrecventaVietii</title>
        <meta name="description" content="Test alergeni în Iași pentru peste 1000 de substanțe împărțite în 70 de grupe: alimente, metale, plante, aditivi. Rezultate rapide, non-invaziv. Programări: 0755 560 592." />
        <meta name="keywords" content="test alergeni Iași, intoleranțe alimentare Iași, alergie test, test alergii Iași, intoleranță gluten Iași" />
        <link rel="canonical" href="https://frecventavietii.ro/servicii/alergen-test" />
        <meta property="og:title" content="Alergen Test 1000 Substanțe Iași | FrecventaVietii" />
        <meta property="og:description" content="Evaluare completă pentru 1000 de substanțe alergene în 70 de grupe. Cabinet în Iași." />
        <meta property="og:url" content="https://frecventavietii.ro/servicii/alergen-test" />
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
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_60%_40%,white,transparent)]" />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <FlaskConical className="w-4 h-4" /> Servicii
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
              Alergen Test
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              O metodă nouă, neinvazivă, pentru depistarea intoleranțelor alimentare și nealimentare — fără înțepături, fără durere, fără contact fizic cu alergenii.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="flex flex-wrap items-center gap-4 mt-8 text-white/70 text-sm"
          >
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-accent" /> ~1 oră per ședință</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>Potrivit de la sugari până la vârstnici</span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>70 grupe · ~1000 substanțe</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Cum funcționează testul?</h2>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                Testul se efectuează cu un <strong className="text-foreground">aparat medical de biorezonanță</strong> — fără înțepături, fără zgârieturi, fără durere. Ești conectat la aparat prin patru electrozi, așezat pe o țesătură specială, <strong className="text-foreground">fără niciun contact fizic cu alergenii</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Informațiile primite în momentul testului semnalează dacă există o <strong className="text-foreground">sensibilitate medie sau crescută</strong> la una sau mai multe grupe. După terminarea testului recomandăm evitarea produselor care produc intoleranță, refacerea echilibrului acido-bazic, repopularea florei intestinale cu probiotice și prebiotice, detoxifiere și ședințe de desensibilizare.
              </p>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                {["Simplu", "Rapid", "Ușor"].map((cuvant) => (
                  <div key={cuvant} className="bg-primary text-white rounded-2xl py-6 px-4">
                    <span className="font-serif text-2xl font-bold">{cuvant}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Cine poate beneficia?</h2>
              <div className="bg-[#F7F5F2] rounded-2xl p-6 border-l-4 border-accent mb-6">
                <p className="text-base text-foreground font-medium leading-relaxed">
                  Oricine — de la copiii foarte mici, chiar sugari, până la vârstnici, fără niciun risc!
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base mb-5">
                Intoleranța alimentară poate fi cauza multor boli și stări, adesea neobservate. Spre exemplu, mulți pacienți se străduiesc să ajungă la silueta dorită fără să știe că în spatele imposibilității de a slăbi poate sta un aliment favorit, la care au intoleranță.
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

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Pachete disponibile</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {pachetePret.map((p) => (
                  <div
                    key={p.titlu}
                    className={`rounded-2xl p-6 border-2 flex flex-col gap-3 ${p.highlight ? "border-accent bg-primary text-white" : "border-border bg-white"}`}
                  >
                    {p.highlight && (
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">Recomandat</span>
                    )}
                    <h3 className={`font-serif text-xl font-bold ${p.highlight ? "text-white" : "text-foreground"}`}>{p.titlu}</h3>
                    <p className={`text-sm leading-relaxed ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
                    <p className={`text-xs font-medium ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>{p.substante}</p>
                    <div className={`text-3xl font-bold mt-auto ${p.highlight ? "text-accent" : "text-primary"}`}>{p.pret}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Lista completă a alergenilor testați</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Testul integral acoperă <strong className="text-foreground">70 grupe</strong> și <strong className="text-foreground">~1000 substanțe</strong> alimentare și nealimentare. Apasă pe o categorie pentru a vedea substanțele incluse.
              </p>
              <div className="space-y-2">
                {allergenGroups.map((g) => (
                  <AllergenAccordion key={g.group} group={g.group} items={g.items} />
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
              <h3 className="font-serif text-xl font-bold mb-2">Programează testul</h3>
              <p className="text-white/80 text-sm mb-3 leading-relaxed">
                Durata: <strong className="text-accent">~1 oră</strong>
              </p>
              <div className="space-y-2 mb-5">
                <div className="bg-white/10 rounded-xl p-3 text-sm">
                  <span className="text-white/60 text-xs block mb-0.5">Test Alimentar</span>
                  <span className="font-bold text-accent text-lg">550 lei</span>
                  <span className="text-white/60 text-xs ml-2">~350 substanțe</span>
                </div>
                <div className="bg-accent/20 border border-accent/40 rounded-xl p-3 text-sm">
                  <span className="text-accent text-xs font-bold block mb-0.5">RECOMANDAT — Test Integral</span>
                  <span className="font-bold text-accent text-lg">950 lei</span>
                  <span className="text-white/60 text-xs ml-2">~1000 substanțe</span>
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
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              Alergen testul prin biorezonanță este o metodă complementară de investigare și nu înlocuiește diagnosticul medical clasic. Recomandăm consultarea unui medic specialist pentru interpretarea rezultatelor și planul de tratament.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
