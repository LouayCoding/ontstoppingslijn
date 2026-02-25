export const PHONE_NUMBER = "085 060 47 02";
export const PHONE_HREF = "tel:0850604702";
export const EMAIL = "info@ontstoppingslijn.nl";
export const COMPANY_NAME = "Ontstoppingslijn";

export const NAV_LINKS = [
  { label: "Diensten", href: "/diensten" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Reviews", href: "/reviews" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    slug: "riool-ontstoppen",
    title: "Riool ontstoppen",
    price: "149",
    description: "Snel en vakkundig uw riool ontstoppen met professionele apparatuur. 24/7 spoedservice beschikbaar.",
    image: "/heropc.png",
    details: [
      { label: "Riool ontstoppen", price: "€149,-" },
      { label: "Spoedservice (24/7)", price: "€199,-" },
    ],
    benefits: [
      "Snelle oplossing bij verstoppingen",
      "Professionele hogedrukreiniging",
      "Voorkomt waterschade en overlast",
      "24/7 spoedservice beschikbaar",
    ],
    process: [
      { step: "Diagnose", description: "We lokaliseren de verstopping en bepalen de oorzaak" },
      { step: "Ontstopping", description: "Professioneel ontstoppen met hogedrukreiniging of veerspiraal" },
      { step: "Doorspoelen", description: "Het riool wordt grondig doorgespoeld" },
      { step: "Controle", description: "Eindcontrole op goede doorstroming" },
    ],
    faq: [
      { q: "Hoe snel kunnen jullie er zijn bij een spoedgeval?", a: "Bij spoed zijn wij vaak binnen 1-2 uur ter plaatse. Wij zijn 24/7 bereikbaar." },
      { q: "Wat zijn veelvoorkomende oorzaken van een verstopt riool?", a: "Vet- en zeepophoping, haren, vochtige doekjes, wortelgroei en kalkafzetting zijn de meest voorkomende oorzaken." },
      { q: "Hoe lang duurt het ontstoppen?", a: "Gemiddeld 30-60 minuten, afhankelijk van de ernst en locatie van de verstopping." },
    ],
  },
  {
    slug: "wc-ontstoppen",
    title: "WC ontstoppen",
    price: "99",
    description: "Uw toilet verstopt? Wij lossen het snel en hygiënisch op. Geen rommel, geen gedoe.",
    image: "/camera-inspectie.png",
    details: [
      { label: "WC ontstoppen", price: "€99,-" },
      { label: "WC ontstoppen (spoed)", price: "€149,-" },
    ],
    benefits: [
      "Snel ter plaatse, ook in het weekend",
      "Hygiënische en nette werkwijze",
      "Professionele apparatuur voor hardnekkige verstoppingen",
      "Advies ter voorkoming van herhaling",
    ],
    process: [
      { step: "Inspectie", description: "We bepalen de aard en locatie van de verstopping" },
      { step: "Ontstopping", description: "Vakkundig ontstoppen met de juiste methode" },
      { step: "Reiniging", description: "Alles wordt netjes en hygiënisch achtergelaten" },
      { step: "Advies", description: "Tips om toekomstige verstoppingen te voorkomen" },
    ],
    faq: [
      { q: "Wat kost WC ontstoppen?", a: "Een standaard WC ontstopping kost €99,-. Bij spoed buiten kantooruren geldt een spoedtarief van €149,-." },
      { q: "Kunnen jullie alle soorten toiletten ontstoppen?", a: "Ja, wij hebben ervaring met alle typen toiletten, inclusief hangtoiletten en oudere modellen." },
      { q: "Hoe voorkom ik een verstopt toilet?", a: "Spoel alleen toiletpapier door en gebruik geen vochtige doekjes. Regelmatig spoelen met heet water helpt ook." },
    ],
  },
  {
    slug: "afvoer-ontstoppen",
    title: "Afvoer ontstoppen",
    price: "89",
    description: "Verstopte afvoer in badkamer, douche of wasbak? Wij maken het weer vrij.",
    image: "/luchtkanaal-reinigen.png",
    details: [
      { label: "Afvoer ontstoppen", price: "€89,-" },
      { label: "Meerdere afvoeren", price: "€69,- per extra afvoer" },
    ],
    benefits: [
      "Oplossing voor alle typen afvoeren",
      "Snelle en schone werkwijze",
      "Voorkomt wateroverlast in huis",
      "Professionele veerspiraal en hogedruk",
    ],
    process: [
      { step: "Lokaliseren", description: "We bepalen waar de verstopping zich bevindt" },
      { step: "Ontstoppen", description: "Met veerspiraal of hogedruk wordt de verstopping verwijderd" },
      { step: "Doorspoelen", description: "De afvoer wordt grondig doorgespoeld" },
      { step: "Controle", description: "We controleren of het water goed wegloopt" },
    ],
    faq: [
      { q: "Welke afvoeren kunnen jullie ontstoppen?", a: "Alle afvoeren: douche, wasbak, badkuip, wasmachine-afvoer en vloerputjes." },
      { q: "Hoe lang duurt het ontstoppen van een afvoer?", a: "Meestal 15-30 minuten per afvoer, afhankelijk van de verstopping." },
      { q: "Kan ik het zelf proberen?", a: "Bij lichte verstoppingen kunt u een ontstopper proberen. Komt het water niet weg, bel dan een professional om schade te voorkomen." },
    ],
  },
  {
    slug: "rioolreiniging",
    title: "Rioolreiniging",
    price: "195",
    description: "Preventieve rioolreiniging en onderhoud. Voorkom verstoppingen en verleng de levensduur van uw leidingen.",
    image: "/vogelnest-verwijderen.png",
    details: [
      { label: "Rioolreiniging", price: "€195,-" },
      { label: "Periodiek onderhoudscontract", price: "Op aanvraag" },
    ],
    benefits: [
      "Voorkomt verstoppingen en stankoverlast",
      "Verwijdert vet-, kalk- en vuilophoping",
      "Verlengt de levensduur van uw riolering",
      "Geschikt voor particulier en zakelijk",
    ],
    process: [
      { step: "Inspectie", description: "We beoordelen de staat van uw riolering" },
      { step: "Doorspuiten", description: "Hogedrukreiniging van de leidingen" },
      { step: "Controle", description: "We controleren de doorstroming na reiniging" },
      { step: "Rapportage", description: "Advies over onderhoud en eventuele aandachtspunten" },
    ],
    faq: [
      { q: "Hoe vaak moet een riool gereinigd worden?", a: "Wij adviseren elke 2-3 jaar preventief reinigen. Bij bedrijven met veel vetafvoer kan vaker nodig zijn." },
      { q: "Is rioolreiniging ook geschikt voor bedrijven?", a: "Ja, wij reinigen riolering voor zowel particulieren als bedrijven, horeca en vastgoedbeheerders." },
      { q: "Merkt u verschil na reiniging?", a: "Ja, het water loopt sneller weg en stankoverlast verdwijnt. Het voorkomt ook toekomstige verstoppingen." },
    ],
  },
  {
    slug: "rioolinspectie",
    title: "Rioolinspectie",
    price: "175",
    description: "Camera-inspectie van uw riolering. Opsporen van lekkages, scheuren, verzakkingen of wortelgroei.",
    image: "/schoorsteenkap-plaatsen.png",
    details: [
      { label: "Camera-inspectie", price: "€175,-" },
      { label: "Inspectie + rapport", price: "€225,-" },
    ],
    benefits: [
      "Exacte locatie van problemen in beeld",
      "Detecteert scheuren, wortelgroei en verzakkingen",
      "HD-beelden en uitgebreid rapport",
      "Ideaal bij aankoop woning of terugkerende problemen",
    ],
    process: [
      { step: "Voorbereiding", description: "Camera-apparatuur wordt klaargemaakt en getest" },
      { step: "Inspectie", description: "HD-camera wordt door de riolering geleid" },
      { step: "Analyse", description: "Directe beoordeling van de staat van uw leidingen" },
      { step: "Rapportage", description: "U ontvangt een rapport met beelden en advies" },
    ],
    faq: [
      { q: "Wanneer is een rioolinspectie nodig?", a: "Bij terugkerende verstoppingen, stankoverlast, bij aankoop van een woning, of als u de staat van uw riolering wilt weten." },
      { q: "Hoe lang duurt een rioolinspectie?", a: "Gemiddeld 30-45 minuten, afhankelijk van de lengte en toegankelijkheid van de leidingen." },
      { q: "Krijg ik de beelden te zien?", a: "Ja, u ontvangt een uitgebreid rapport met foto's en eventueel video-opnames." },
    ],
  },
  {
    slug: "rioolreparatie",
    title: "Rioolreparatie",
    price: "295",
    description: "Reparatie van beschadigde riolering. Van kleine lekkages tot volledige leidingvervanging.",
    image: "/dak-inspectie.png",
    details: [
      { label: "Plaatselijke reparatie", price: "Vanaf €295,-" },
      { label: "Leidingvervanging", price: "Op aanvraag" },
    ],
    benefits: [
      "Vakkundige reparatie van lekkages",
      "Minimale overlast door gerichte aanpak",
      "Vervanging van beschadigde leidingen",
      "Garantie op uitgevoerd werk",
    ],
    process: [
      { step: "Diagnose", description: "Camera-inspectie om de schade exact te lokaliseren" },
      { step: "Offerte", description: "Duidelijke offerte met uitleg van de werkzaamheden" },
      { step: "Reparatie", description: "Vakkundige reparatie of vervanging van de leiding" },
      { step: "Controle", description: "Eindcontrole op waterdichtheid en doorstroming" },
    ],
    faq: [
      { q: "Hoe herken ik een kapot riool?", a: "Terugkerende verstoppingen, stankoverlast, natte plekken in de tuin of verzakking van bestrating kunnen wijzen op rioolschade." },
      { q: "Moet de tuin opengebroken worden?", a: "Niet altijd. Bij kleine schade kan soms een relining (kousboring) worden toegepast zonder graafwerk." },
      { q: "Hoe lang duurt een rioolreparatie?", a: "Een plaatselijke reparatie duurt meestal 1 dag. Bij grotere werkzaamheden kan dit 2-3 dagen zijn." },
    ],
  },
  {
    slug: "hemelwaterafvoer",
    title: "Hemelwater & Afwatering",
    price: "129",
    description: "Reiniging en onderhoud van regenafvoeren. Oplossen en voorkomen van wateroverlast.",
    image: "/daklekkage-repareren.png",
    details: [
      { label: "Hemelwaterafvoer reinigen", price: "€129,-" },
      { label: "Ontstopping + inspectie", price: "€179,-" },
    ],
    benefits: [
      "Voorkomt wateroverlast bij hevige regenval",
      "Reiniging van goten, kolken en afvoerleidingen",
      "Snelle inzet bij acute wateroverlast",
      "Preventief onderhoud bespaart kosten",
    ],
    process: [
      { step: "Inspectie", description: "We controleren goten, kolken en afvoerleidingen" },
      { step: "Reiniging", description: "Doorspuiten en reinigen van hemelwaterafvoer" },
      { step: "Ontstopping", description: "Verwijderen van bladeren, vuil en wortelgroei" },
      { step: "Advies", description: "Tips voor preventief onderhoud" },
    ],
    faq: [
      { q: "Hoe vaak moet een hemelwaterafvoer gereinigd worden?", a: "Wij adviseren minimaal 1x per jaar, bij voorkeur in het najaar na het bladverlies." },
      { q: "Wat als er water in mijn kelder staat?", a: "Bel ons direct. Wij bieden 24/7 spoedservice bij acute wateroverlast." },
      { q: "Kan wortelgroei een hemelwaterafvoer verstoppen?", a: "Ja, wortels van bomen en struiken zijn een veelvoorkomende oorzaak. Wij verwijderen deze en adviseren over preventie." },
    ],
  },
  {
    slug: "keukenafvoer-ontstoppen",
    title: "Keukenafvoer ontstoppen",
    price: "89",
    description: "Verstopte keukenafvoer door vet of etensresten? Wij maken het snel weer vrij.",
    image: "/creosoot-verwijderen.png",
    details: [
      { label: "Keukenafvoer ontstoppen", price: "€89,-" },
      { label: "Keukenafvoer + vetreiniging", price: "€139,-" },
    ],
    benefits: [
      "Specialist in vetverstopping",
      "Snelle en schone werkwijze",
      "Professionele ontvetters en hogedruk",
      "Advies om herhaling te voorkomen",
    ],
    process: [
      { step: "Inspectie", description: "We bekijken de afvoer en bepalen de verstopping" },
      { step: "Ontstoppen", description: "Verwijderen van vet, etensresten en vuil" },
      { step: "Doorspoelen", description: "Grondig doorspoelen voor optimale doorstroming" },
      { step: "Preventie", description: "Advies over vetvangers en goed gebruik" },
    ],
    faq: [
      { q: "Waarom raakt mijn keukenafvoer steeds verstopt?", a: "Meestal door ophoping van vet, etensresten en zeep. Een vetafscheider of regelmatig spoelen met heet water helpt." },
      { q: "Kan ik zelf een keukenafvoer ontstoppen?", a: "Bij lichte verstopping kunt u heet water met soda proberen. Bij hardnekkige verstopping is professionele hulp nodig." },
      { q: "Helpt een vetafscheider?", a: "Ja, vooral bij intensief kookgebruik of in de horeca is een vetafscheider zeer effectief." },
    ],
  },
  {
    slug: "douche-ontstoppen",
    title: "Douche ontstoppen",
    price: "89",
    description: "Verstopte douche? Haren, zeep en kalk maken we snel weer vrij. Schone en hygiënische werkwijze.",
    image: "/camera-inspectie.png",
    details: [
      { label: "Douche ontstoppen", price: "€89,-" },
      { label: "Douche + afvoer reiniging", price: "€119,-" },
    ],
    benefits: [
      "Snelle oplossing voor verstopte douche",
      "Verwijdering van haren, zeep en kalkresten",
      "Hygiënische werkwijze zonder rommel",
      "Preventief advies om herhaling te voorkomen",
    ],
    process: [
      { step: "Inspectie", description: "We bepalen de oorzaak van de verstopping" },
      { step: "Ontstoppen", description: "Professioneel verwijderen van de verstopping" },
      { step: "Doorspoelen", description: "De afvoer wordt grondig doorgespoeld" },
      { step: "Advies", description: "Tips om toekomstige verstoppingen te voorkomen" },
    ],
    faq: [
      { q: "Waardoor raakt een douche verstopt?", a: "Meestal door ophoping van haren, zeep en kalk in de afvoer. Een haarfilter kan dit grotendeels voorkomen." },
      { q: "Hoe lang duurt het ontstoppen?", a: "Een doucheontstopping duurt gemiddeld 15-30 minuten." },
      { q: "Kan ik het zelf proberen?", a: "Bij lichte verstoppingen kunt u een ontstopper of soda met azijn proberen. Helpt het niet, bel dan een vakman." },
    ],
  },
  {
    slug: "hoofdriolering-ontstoppen",
    title: "Hoofdriolering ontstoppen",
    price: "199",
    description: "Verstopping in de hoofdriolering? Wij lossen het op met professionele hogedrukapparatuur.",
    image: "/heropc.png",
    details: [
      { label: "Hoofdriolering ontstoppen", price: "€199,-" },
      { label: "Spoedservice (24/7)", price: "€249,-" },
    ],
    benefits: [
      "Krachtige hogedrukreiniging voor hoofdleidingen",
      "Oplossing voor hardnekkige verstoppingen",
      "Voorkomt waterschade aan meerdere woningen",
      "24/7 spoedservice beschikbaar",
    ],
    process: [
      { step: "Diagnose", description: "Lokaliseren van de verstopping in de hoofdleiding" },
      { step: "Hogedruk", description: "Ontstoppen met professionele hogedrukapparatuur" },
      { step: "Doorspoelen", description: "De volledige leiding wordt doorgespoeld" },
      { step: "Controle", description: "Camera-inspectie ter controle van de doorstroming" },
    ],
    faq: [
      { q: "Wat is een hoofdriolering?", a: "De hoofdriolering is de centrale afvoerleiding die alle afvoeren van uw woning naar het gemeenteriool verbindt." },
      { q: "Hoe herken ik een verstopping in de hoofdriolering?", a: "Meerdere afvoeren die tegelijk slecht lopen, borrelende toiletten of stankoverlast wijzen op een verstopping in de hoofdleiding." },
      { q: "Is dit duurder dan een gewone ontstopping?", a: "De hoofdriolering vereist zwaardere apparatuur, vandaar de hogere prijs. De exacte kosten hangen af van de situatie." },
    ],
  },
  {
    slug: "preventieve-rioolreiniging",
    title: "Preventieve rioolreiniging",
    price: "195",
    description: "Voorkom verstoppingen met regelmatige rioolreiniging. Verwijdering van vet, kalk en vuilophoping.",
    image: "/vogelnest-verwijderen.png",
    details: [
      { label: "Preventieve reiniging", price: "€195,-" },
      { label: "Jaarcontract", price: "Op aanvraag" },
    ],
    benefits: [
      "Voorkomt verstoppingen en stankoverlast",
      "Verwijdert vet-, kalk- en vuilophoping",
      "Verlengt de levensduur van uw riolering",
      "Geschikt voor particulier en zakelijk",
    ],
    process: [
      { step: "Inspectie", description: "We beoordelen de staat van uw riolering" },
      { step: "Doorspuiten", description: "Hogedrukreiniging van de leidingen" },
      { step: "Controle", description: "We controleren de doorstroming na reiniging" },
      { step: "Rapportage", description: "Advies over onderhoud en eventuele aandachtspunten" },
    ],
    faq: [
      { q: "Hoe vaak moet een riool gereinigd worden?", a: "Wij adviseren elke 2-3 jaar preventief reinigen. Bij bedrijven met veel vetafvoer kan vaker nodig zijn." },
      { q: "Is dit ook geschikt voor bedrijven?", a: "Ja, wij reinigen riolering voor zowel particulieren als bedrijven, horeca en vastgoedbeheerders." },
      { q: "Merkt u verschil na reiniging?", a: "Ja, het water loopt sneller weg en stankoverlast verdwijnt. Het voorkomt ook toekomstige verstoppingen." },
    ],
  },
  {
    slug: "periodiek-onderhoud",
    title: "Periodiek onderhoud",
    price: "175",
    description: "Regelmatig onderhoud aan uw riolering voorkomt dure reparaties. Onderhoudscontracten op maat.",
    image: "/dak-inspectie.png",
    details: [
      { label: "Eenmalig onderhoud", price: "€175,-" },
      { label: "Onderhoudscontract (per jaar)", price: "Op aanvraag" },
    ],
    benefits: [
      "Voorkomt onverwachte verstoppingen",
      "Bespaart op dure noodreparaties",
      "Vaste afspraken op een moment dat u uitkomt",
      "Geschikt voor woningen, VvE's en bedrijfspanden",
    ],
    process: [
      { step: "Planning", description: "Samen stellen we een onderhoudsschema op" },
      { step: "Inspectie", description: "Controle van de staat van uw riolering" },
      { step: "Reiniging", description: "Doorspuiten en reinigen van leidingen" },
      { step: "Rapport", description: "Verslag van de werkzaamheden en aandachtspunten" },
    ],
    faq: [
      { q: "Voor wie is periodiek onderhoud geschikt?", a: "Voor iedereen die verstoppingen wil voorkomen: huiseigenaren, VvE's, vastgoedbeheerders en bedrijven." },
      { q: "Hoe vaak komt u langs?", a: "Standaard 1x per jaar, maar de frequentie stemmen we af op uw situatie en wensen." },
      { q: "Kan ik een onderhoudscontract opzeggen?", a: "Ja, onze contracten zijn flexibel en maandelijks opzegbaar." },
    ],
  },
  {
    slug: "doorspuiten-leidingen",
    title: "Doorspuiten van leidingen",
    price: "149",
    description: "Professioneel doorspuiten van afvoerleidingen met hogedruk. Voor optimale doorstroming.",
    image: "/luchtkanaal-reinigen.png",
    details: [
      { label: "Doorspuiten leidingen", price: "€149,-" },
      { label: "Doorspuiten + camera-inspectie", price: "€225,-" },
    ],
    benefits: [
      "Krachtige hogedrukreiniging tot 200 bar",
      "Verwijdert alle aanslag en ophoping",
      "Geschikt voor alle typen leidingen",
      "Preventief en curatief inzetbaar",
    ],
    process: [
      { step: "Voorbereiding", description: "Aansluiten van hogedrukapparatuur" },
      { step: "Doorspuiten", description: "Leidingen worden onder hoge druk gereinigd" },
      { step: "Naspoelen", description: "Grondig naspoelen voor schone leidingen" },
      { step: "Controle", description: "Controleren of de doorstroming optimaal is" },
    ],
    faq: [
      { q: "Wat is het verschil met gewoon ontstoppen?", a: "Doorspuiten reinigt de gehele leiding preventief, terwijl ontstoppen gericht is op het verwijderen van een specifieke verstopping." },
      { q: "Kan doorspuiten leidingen beschadigen?", a: "Nee, onze vakmensen werken met de juiste druk voor elk type leiding. Dit is volledig veilig." },
      { q: "Hoe lang duurt het doorspuiten?", a: "Gemiddeld 30-60 minuten, afhankelijk van de lengte en het aantal leidingen." },
    ],
  },
  {
    slug: "leidingvervanging",
    title: "Vervangen van leidingen",
    price: "395",
    description: "Beschadigde of verouderde leidingen? Wij vervangen ze vakkundig met minimale overlast.",
    image: "/schoorsteenkap-plaatsen.png",
    details: [
      { label: "Leidingvervanging (per meter)", price: "Vanaf €395,-" },
      { label: "Volledige renovatie", price: "Op aanvraag" },
    ],
    benefits: [
      "Vakkundige vervanging van oude leidingen",
      "Gebruik van duurzame, moderne materialen",
      "Minimale overlast door efficiënte werkwijze",
      "Garantie op materiaal en arbeid",
    ],
    process: [
      { step: "Inspectie", description: "Camera-inspectie om de schade in kaart te brengen" },
      { step: "Offerte", description: "Gedetailleerde offerte met werkplan" },
      { step: "Vervanging", description: "Vakkundige vervanging van de leidingen" },
      { step: "Oplevering", description: "Eindcontrole en netjes achterlaten van de werkplek" },
    ],
    faq: [
      { q: "Wanneer moeten leidingen vervangen worden?", a: "Bij terugkerende lekkages, scheuren, ernstige corrosie of wanneer reparatie niet meer rendabel is." },
      { q: "Moet de vloer of tuin open?", a: "Soms is graafwerk nodig, maar we beperken dit tot het minimum. Bij sommige situaties is sleufloze techniek mogelijk." },
      { q: "Hoe lang duurt leidingvervanging?", a: "Een eenvoudige vervanging duurt 1 dag, grotere projecten kunnen 2-5 werkdagen duren." },
    ],
  },
  {
    slug: "wateroverlast-oplossen",
    title: "Wateroverlast oplossen",
    price: "129",
    description: "Wateroverlast door hevige regenval of verstopte afvoeren? Wij staan 24/7 paraat.",
    image: "/daklekkage-repareren.png",
    details: [
      { label: "Wateroverlast verhelpen", price: "€129,-" },
      { label: "Spoedservice (24/7)", price: "€179,-" },
    ],
    benefits: [
      "Snelle inzet bij acute wateroverlast",
      "Oplossing voor kelders, kruipruimtes en tuinen",
      "Reiniging van goten, kolken en afvoerleidingen",
      "Preventief advies om herhaling te voorkomen",
    ],
    process: [
      { step: "Melding", description: "U belt ons en wij komen zo snel mogelijk" },
      { step: "Diagnose", description: "We bepalen de oorzaak van de wateroverlast" },
      { step: "Oplossing", description: "Ontstoppen, doorspuiten of afvoeren van water" },
      { step: "Preventie", description: "Advies om toekomstige wateroverlast te voorkomen" },
    ],
    faq: [
      { q: "Hoe snel zijn jullie er bij wateroverlast?", a: "Bij spoed zijn wij vaak binnen 1-2 uur ter plaatse. Wij zijn 24/7 bereikbaar." },
      { q: "Wat zijn veelvoorkomende oorzaken?", a: "Verstopte hemelwaterafvoeren, overbelaste riolering bij hevige regenval, of defecte pompen." },
      { q: "Kunnen jullie ook de schade herstellen?", a: "Wij lossen de oorzaak op. Voor gevolgschade adviseren wij u contact op te nemen met uw verzekering." },
    ],
  },
  {
    slug: "regenpijp-ontstoppen",
    title: "Regenpijp ontstoppen",
    price: "99",
    description: "Verstopte regenpijp? Wij maken uw regenpijp snel weer vrij en voorkomen waterschade aan uw gevel.",
    image: "/daklekkage-repareren.png",
    details: [
      { label: "Regenpijp ontstoppen", price: "€99,-" },
      { label: "Regenpijp + gootreiniging", price: "€149,-" },
    ],
    benefits: [
      "Voorkomt vochtschade aan gevels en funderingen",
      "Snelle en vakkundige werkwijze",
      "Verwijdering van bladeren, vuil en mosgroei",
      "Preventief advies voor langdurig resultaat",
    ],
    process: [
      { step: "Inspectie", description: "We bepalen de oorzaak en locatie van de verstopping" },
      { step: "Ontstoppen", description: "Professioneel reinigen van de regenpijp" },
      { step: "Doorspoelen", description: "De regenpijp wordt grondig doorgespoeld" },
      { step: "Controle", description: "We controleren of het water goed afvoert" },
    ],
    faq: [
      { q: "Waardoor raakt een regenpijp verstopt?", a: "Meestal door ophoping van bladeren, mos, vuil of vogelpoep. Bomen in de buurt vergroten het risico." },
      { q: "Hoe herken ik een verstopte regenpijp?", a: "Water dat langs de gevel stroomt, overlopende dakgoten of plassen bij de voet van de regenpijp zijn tekenen." },
      { q: "Hoe vaak moet een regenpijp gereinigd worden?", a: "Wij adviseren minimaal 1x per jaar, bij voorkeur in het najaar na het bladverlies." },
    ],
  },
];

export const PRICING_DISCLAIMER =
  "Wij voeren onze werkzaamheden landelijk uit via ons netwerk van ervaren monteurs. De genoemde prijzen zijn exclusief btw. Spoedtarieven gelden buiten reguliere werktijden. Neem contact op voor een offerte op maat.";

export const TOP_CITIES = [
  "Amsterdam",
  "Rotterdam",
  "Den Haag",
  "Utrecht",
  "Eindhoven",
  "Groningen",
  "Tilburg",
  "Almere",
  "Breda",
  "Nijmegen",
];

export const FAQ_ITEMS = [
  {
    question: "Hoe snel kunnen jullie er zijn bij een verstopt riool?",
    answer:
      "Bij spoedgevallen zijn wij vaak binnen 1-2 uur ter plaatse. Wij zijn 24/7 bereikbaar, ook in het weekend en op feestdagen.",
  },
  {
    question: "Wat kost het om een riool te laten ontstoppen?",
    answer:
      "Een standaard rioolontstopping begint vanaf €149,-. De exacte kosten hangen af van de ernst en locatie van de verstopping. Prijzen zijn exclusief btw.",
  },
  {
    question: "Zijn jullie in heel Nederland actief?",
    answer:
      "Ja, wij werken met een landelijk netwerk van ervaren monteurs. Van Groningen tot Maastricht.",
  },
  {
    question: "Werken jullie ook voor bedrijven en VvE's?",
    answer:
      "Ja, wij bieden rioolservice voor particulieren, bedrijven, vastgoedbeheerders, VvE's en overheidsinstellingen.",
  },
  {
    question: "Moet ik thuis zijn tijdens de werkzaamheden?",
    answer:
      "Ja, er moet iemand aanwezig zijn om toegang te verlenen. De meeste werkzaamheden duren 30-60 minuten.",
  },
];
