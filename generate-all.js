const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-3-pro-image-preview';

if (!API_KEY) {
  console.error('❌ GEMINI_API_KEY niet ingesteld.');
  process.exit(1);
}

// Logo als base64
const logoPath = path.join(__dirname, 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
console.log('🖼️  Logo geladen\n');

const LOGO_INSTRUCTION = `CRITICAL: The attached image is my exact company logo. On the worker's left chest polo shirt, reproduce this EXACT logo as an embroidered badge — the dark navy shield, white spiral drill inside, light blue water droplet below, text "ONTSTOPPINGSLIJN.NL". Copy it identically from the reference.`;

const COMMON_WORKER = `Werkkleding: donkerblauwe polo met op linkerborstzak het exacte bedrijfslogo uit de referentie (donkerblauw schildembleem, witte spiraalvormige boor, lichtblauwe waterdruppel, tekst "ONTSTOPPINGSLIJN.NL"). Donkerblauwe werkbroek, werkhandschoenen.`;

const IMAGES = [
  {
    file: 'riool-ontstoppen.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een riool ontstopt BUITEN bij een Nederlands woonhuis. De vakman knielt naast een open rioolput in een achtertuin en bedient een professionele hogedrukreiniger. De hogedrukslang verdwijnt in de rioolput. ${COMMON_WORKER} Omgeving: open rioolput met PVC-leidingen, hogedrukreiniger op wielen, nette achtertuin met betontegels, bakstenen woonhuis, licht bewolkte Nederlandse lucht, helder daglicht. Sfeer: vakkundig, professioneel, snel opgelost. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'wc-ontstoppen.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een verstopt toilet ontstopt BINNEN in een moderne Nederlandse badkamer. De vakman knielt naast een wit hangtoilet en gebruikt een professionele closetpomp of elektrische veerspiraal. ${COMMON_WORKER} Overschoenen aan. Omgeving: moderne badkamer met witte tegels, beschermdoek op vloer, emmer, gereedschapstas, warm interieurlicht en daglicht. Schone hygiënische werkwijze. Sfeer: professioneel, hygiënisch. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'afvoer-ontstoppen.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een verstopte wastafelafvoer ontstopt BINNEN in een moderne Nederlandse badkamer. De vakman werkt onder een wastafel met een veerspiraal die in de sifon verdwijnt. ${COMMON_WORKER} Overschoenen aan. Omgeving: moderne badkamer, witte tegels, chromen kraan, zichtbare sifon en PVC-leiding, beschermdoek, emmer, gereedschapstas. Warm licht. Sfeer: schoon, vakkundig. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'rioolreiniging.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die preventieve rioolreiniging uitvoert BUITEN bij een Nederlands woonhuis. De vakman knielt naast een open rioolput en voert een hogedrukslang met spoelmondstuk door de riolering. ${COMMON_WORKER} Kniebeschermers. Omgeving: open rioolput, hogedrukreiniger op wielen, achtertuin met betontegels en schutting, bakstenen huis, licht bewolkt, helder daglicht. Sfeer: planmatig onderhoud, grondig, georganiseerd. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'rioolinspectie.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een camera-inspectie uitvoert BUITEN bij een rioolput. De vakman knielt naast een open inspectieput en bedient een rioolcamerasysteem met LCD-monitor. Op het scherm is de binnenkant van een rioolbuis zichtbaar. ${COMMON_WORKER} Kniebeschermers. Omgeving: open inspectieput op klinkers, camerakabel in de put, LCD-monitor, tablet voor rapportage, Nederlandse oprit, bakstenen huis, helder daglicht. Sfeer: high-tech, analytisch, vakkundig. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'rioolreparatie.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een rioolleiding repareert in een opengewerkte sleuf BUITEN naast een Nederlands woonhuis. De vakman knielt in een nette werksleuf en monteert een nieuwe PVC-rioolbuis. ${COMMON_WORKER} Kniebeschermers. Omgeving: werksleuf met nieuwe en oude PVC-buizen, gereedschap (PVC-lijm, zaag), kruiwagen, bakstenen huis, licht bewolkt, helder daglicht. Sfeer: specialistisch vakmanschap, duurzame reparatie. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, licht van bovenaf, diepe focus.`
  },
  {
    file: 'hemelwater.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die BUITEN een verstopte regenpijp en hemelwaterafvoer reinigt bij een Nederlands woonhuis. De vakman staat naast de gevel en reinigt een zinken regenpijp die uitkomt op een straatkolk. ${COMMON_WORKER} Omgeving: zinken regenpijp langs bakstenen gevel, straatkolk geopend, veerspiraal in leiding, blad/vuilresten in emmer, regendruppels op gevel, Nederlandse woonwijk, bewolkte lucht met doorbrekend zonlicht, nat wegdek. Sfeer: snelle hulp na regenbui. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'keukenafvoer.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een verstopte keukenafvoer ontstopt BINNEN in een moderne Nederlandse keuken. De vakman knielt onder het aanrechtblad en werkt met een veerspiraal aan de sifon onder de gootsteen. ${COMMON_WORKER} Overschoenen. Omgeving: open kastje onder aanrecht, sifon en PVC-leiding zichtbaar, emmer eronder, beschermfolie op keukenvloer, modern aanrecht, RVS kraan, warm keukenverlichting. Sfeer: huiselijk maar professioneel, schoon. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, warme kleuren.`
  },
  {
    file: 'douche-ontstoppen.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een verstopte doucheafvoer ontstopt BINNEN in een moderne Nederlandse badkamer. De vakman knielt bij een inloopdouche en voert een veerspiraal in de douchegoot. ${COMMON_WORKER} Overschoenen. Omgeving: inloopdouche met grijze tegels, glazen douchewand, douchegoot geopend, gereedschapstas, beschermdoek, warm interieurlicht en daglicht. Sfeer: schoon, hygiënisch, vakkundig. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'hoofdriolering.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die een verstopping in de hoofdriolering oplost BUITEN bij een Nederlands woonhuis. De vakman bedient een zware professionele hogedrukreiniger naast een groot open rioolputdeksel op straat. ${COMMON_WORKER} Kniebeschermers, veiligheidsschoenen. Omgeving: groot rioolputdeksel geopend op straat/oprit, industriële hogedrukreiniger met dikke slang, Nederlandse woonstraat, bakstenen huizen, geparkeerde auto's, helder daglicht. Sfeer: professioneel, krachtig materiaal, 24/7 paraat. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'preventieve-reiniging.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die preventieve rioolreiniging uitvoert BUITEN bij een bedrijfspand. De vakman spoelt met hogedruk een rioolleiding door via een open inspectieput op een parkeerterrein. ${COMMON_WORKER} Kniebeschermers. Omgeving: open inspectieput op betonvloer/parkeerterrein, hogedrukreiniger, hogedrukslang in put, bedrijfsgebouw op achtergrond, professioneel busje met logo zichtbaar op afstand, helder daglicht. Sfeer: planmatig, preventief, professioneel. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'periodiek-onderhoud.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die periodiek onderhoud uitvoert aan riolering BUITEN bij een Nederlands woonhuis. De vakman inspecteert een rioolput met een zaklamp en maakt aantekeningen op een klembord/tablet. ${COMMON_WORKER} Kniebeschermers. Omgeving: open rioolput, zaklamp schijnt in de put, klembord of tablet, gereedschapstas, achtertuin met betontegels, bakstenen huis, helder daglicht. Sfeer: planmatig, zorgvuldig, preventief. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'doorspuiten.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die afvoerleidingen doorspoelt met hogedruk BINNEN in een bijkeuken of technische ruimte van een Nederlands woonhuis. De vakman bedient een compacte hogedrukreiniger, de slang verdwijnt in een afvoerput in de vloer. ${COMMON_WORKER} Overschoenen. Omgeving: bijkeuken met tegelvloer, afvoerput geopend, compacte hogedrukreiniger, beschermdoek, emmer, wasmachine op achtergrond. Warm interieurlicht. Sfeer: vakkundig, schoon, effectief. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
  {
    file: 'leidingen-vervangen.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die verouderde rioolbuizen vervangt in een opengewerkte sleuf BUITEN naast een Nederlands woonhuis. De vakman legt nieuwe oranje PVC-buizen in een nette sleuf terwijl oude grijze buizen ernaast liggen. ${COMMON_WORKER} Kniebeschermers. Omgeving: werksleuf met nieuwe oranje en oude grijze PVC-buizen, PVC-lijm en zaag, kruiwagen met grond, bakstenen gevel, licht bewolkte lucht. Sfeer: vakmanschap, vernieuwing, duurzaam. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, van bovenaf, diepe focus.`
  },
  {
    file: 'wateroverlast.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die wateroverlast oplost BUITEN bij een Nederlands woonhuis. De vakman bedient een dompelpomp die water wegpompt uit een ondergelopen voortuin of oprit. De slang loopt naar de straatkolk. ${COMMON_WORKER} Lichte regenjas over polo. Omgeving: natte bestrating met plassen, dompelpomp in werking, tuinslang naar straatkolk, bakstenen woonhuis, licht bewolkte lucht met wat zon erdoorheen, Nederlandse woonwijk, overdag. Sfeer: snel, professioneel, hulpvaardig. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus, natuurlijk daglicht.`
  },
  {
    file: 'regenpijp.png',
    prompt: `Fotorealistische foto (1536x1024, horizontaal) van een professionele rioolmonteur die BUITEN een verstopte regenpijp ontstopt aan de gevel van een Nederlands woonhuis. De vakman staat op een klein trapje of ladder en voert een veerspiraal in de regenpijp van bovenaf. ${COMMON_WORKER} Omgeving: zinken regenpijp langs bakstenen gevel, monteur op klein trapje, veerspiraal in regenpijp, emmer onder de pijp, dakgoot zichtbaar bovenaan, Nederlandse voortuinmet tegels, licht bewolkt, daglicht. Sfeer: snel, vakkundig, preventie waterschade. Geen cartoon, geen CGI — fotorealistisch. Camera: 35-50mm, ooghoogte, diepe focus.`
  },
];

async function generateImage(item, index) {
  return new Promise((resolve, reject) => {
    const fullPrompt = `${LOGO_INSTRUCTION}\n\n${item.prompt}`;
    
    const body = JSON.stringify({
      contents: [{ parts: [
        { inline_data: { mime_type: 'image/png', data: logoBase64 } },
        { text: fullPrompt },
      ]}],
      generationConfig: { responseModalities: ['IMAGE', 'TEXT'], temperature: 1 },
    });

    const apiPath = `/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
    const start = Date.now();

    console.log(`\n[${index + 1}/${IMAGES.length}] 🚀 Genereren: ${item.file}...`);

    const req = https.request({
      hostname: 'generativelanguage.googleapis.com',
      path: apiPath,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      timeout: 180000,
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; process.stdout.write('.'); });
      res.on('end', () => {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        console.log(` ${elapsed}s`);

        if (res.statusCode !== 200) {
          console.error(`   ❌ API Error ${res.statusCode}`);
          try { console.error(JSON.parse(data).error.message); } catch {}
          resolve(false);
          return;
        }

        try {
          const json = JSON.parse(data);
          const parts = json.candidates?.[0]?.content?.parts || [];
          for (const part of parts) {
            const idata = part.inline_data || part.inlineData;
            if (idata?.data) {
              const buf = Buffer.from(idata.data, 'base64');
              const outPath = path.join(__dirname, 'public', item.file);
              fs.writeFileSync(outPath, buf);
              console.log(`   ✅ ${item.file} (${(buf.length/1024/1024).toFixed(2)} MB)`);
              resolve(true);
              return;
            }
          }
          console.error(`   ❌ Geen afbeelding in response`);
          resolve(false);
        } catch (e) {
          console.error(`   ❌ ${e.message}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => { console.error(`   ❌ ${e.message}`); resolve(false); });
    req.on('timeout', () => { console.error('   ❌ Timeout'); req.destroy(); resolve(false); });
    req.write(body);
    req.end();
  });
}

async function main() {
  console.log(`🎯 ${IMAGES.length} afbeeldingen genereren met ${MODEL}...\n`);
  let success = 0;
  let fail = 0;

  for (let i = 0; i < IMAGES.length; i++) {
    const ok = await generateImage(IMAGES[i], i);
    if (ok) success++; else fail++;
    // Kleine pauze tussen requests
    if (i < IMAGES.length - 1) await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`🎉 Klaar! ${success} gelukt, ${fail} mislukt van ${IMAGES.length} totaal.`);
}

main();
