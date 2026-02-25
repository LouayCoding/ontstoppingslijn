const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-3-pro-image-preview';

if (!API_KEY) {
  console.error('❌ GEMINI_API_KEY niet ingesteld.');
  process.exit(1);
}

// Lees prompt
const promptFile = path.join(__dirname, 'prompts', 'heromobile.md');
console.log('📄 Prompt laden uit:', promptFile);
const rawPrompt = fs.readFileSync(promptFile, 'utf-8');
const prompt = rawPrompt.replace(/^#.*\n+/, '').trim();
console.log('📝 Prompt lengte:', prompt.length, 'tekens\n');

// Lees logo als base64 referentie
const logoPath = path.join(__dirname, 'public', 'logo.png');
console.log('🖼️  Logo laden als referentie:', logoPath);
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
console.log('🖼️  Logo base64 lengte:', (logoBase64.length / 1024).toFixed(1), 'KB\n');

const fullPrompt = `CRITICAL: The attached image is my exact company logo. Generate a photorealistic commercial photograph. On the worker's left chest polo shirt, reproduce this EXACT logo as an embroidered badge — copy every pixel: the dark navy shield, the white spiral drill inside it, the light blue water droplet below, and the text "ONTSTOPPINGSLIJN" with ".NL" in light blue. The logo must be perfectly legible and identical to the reference.\n\n${prompt}`;

const body = JSON.stringify({
  contents: [
    {
      parts: [
        {
          inline_data: {
            mime_type: 'image/png',
            data: logoBase64,
          },
        },
        {
          text: fullPrompt,
        },
      ],
    },
  ],
  generationConfig: {
    responseModalities: ['IMAGE', 'TEXT'],
    temperature: 1,
  },
});

const apiPath = `/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

console.log(`🚀 API request naar Gemini (${MODEL}) met logo referentie...`);
console.log('⏳ Dit kan 30-120 seconden duren...\n');

const startTime = Date.now();
const outputPath = path.join(__dirname, 'public', 'heromobile.png');

const req = https.request(
  {
    hostname: 'generativelanguage.googleapis.com',
    path: apiPath,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
    timeout: 180000,
  },
  (res) => {
    let data = '';
    console.log('📡 Response status:', res.statusCode);

    res.on('data', (chunk) => {
      data += chunk;
      process.stdout.write('.');
    });

    res.on('end', () => {
      console.log('\n');
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`⏱️  Response ontvangen in ${elapsed}s`);

      if (res.statusCode !== 200) {
        console.error('❌ API Error:', res.statusCode);
        try { console.error(JSON.stringify(JSON.parse(data), null, 2)); } catch { console.error(data.substring(0, 1000)); }
        process.exit(1);
      }

      try {
        const json = JSON.parse(data);
        const candidates = json.candidates;

        if (!candidates || !candidates[0] || !candidates[0].content) {
          console.error('❌ Geen candidates in response');
          console.error(JSON.stringify(json, null, 2).substring(0, 1000));
          process.exit(1);
        }

        const parts = candidates[0].content.parts;
        let saved = false;

        for (const part of parts) {
          const idata = part.inline_data || part.inlineData;
          if (idata && idata.data) {
            const imgBuffer = Buffer.from(idata.data, 'base64');
            fs.writeFileSync(outputPath, imgBuffer);
            console.log('✅ Afbeelding opgeslagen:', outputPath);
            console.log('📐 Grootte:', (imgBuffer.length / 1024 / 1024).toFixed(2), 'MB');
            saved = true;
          }
          if (part.text) {
            console.log('📋 Tekst:', part.text.substring(0, 200));
          }
        }

        if (saved) {
          console.log('\n🎉 Klaar! Gemini heeft de afbeelding gegenereerd met logo referentie.');
        } else {
          console.error('❌ Geen afbeelding gevonden in response');
          console.error('Parts:', JSON.stringify(parts.map(p => Object.keys(p)), null, 2));
        }
      } catch (e) {
        console.error('❌ Error:', e.message);
        console.error('Raw:', data.substring(0, 500));
      }
    });
  }
);

req.on('error', (e) => console.error('❌ Request error:', e.message));
req.on('timeout', () => { console.error('❌ Timeout'); req.destroy(); });
req.write(body);
req.end();
