const fs = require('fs');
const path = require('path');

// Corrigir arquivo home.html
const homeFile = 'src/app/pages/home/home.html';
let content = fs.readFileSync(homeFile, 'utf8');

// Substituições de caracteres mal codificados
content = content.replace(/OfereÃ§a/g, 'Ofereça');
content = content.replace(/vocÃª/g, 'você');
content = content.replace(/famÃ­lia/g, 'família');
content = content.replace(/BenefÃ­cios/g, 'Benefícios');
content = content.replace(/serviÃ§os/g, 'serviços');
content = content.replace(/residÃªncia/g, 'residência');
content = content.replace(/proteÃ§Ã£o/g, 'proteção');
content = content.replace(/incríveis/g, 'incríveis');
content = content.replace(/soluÃ§Ãµes/g, 'soluções');

fs.writeFileSync(homeFile, content, 'utf8');
console.log('Arquivo corrigido com UTF-8');