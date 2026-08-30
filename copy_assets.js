const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\3c96c551-dda2-40c8-9be9-00059ad05d7a';
const destDir = 'C:\\Python_Full_Stack_Course\\UI\\Projects\\Salon-demo\\assets';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp')) {
    let targetName = file;
    if (file.startsWith('kolhapur_hero_bg')) targetName = 'hero_bg.png';
    else if (file.startsWith('artisan_leather_craft')) targetName = 'leather_craft.png';
    else if (file.startsWith('kolhapur_bridal_saaj')) targetName = 'bridal_saaj.png';
    else if (file.startsWith('salon_transformation_after')) targetName = 'transformation_after.png';
    else if (file.startsWith('stylist_editorial_portrait')) targetName = 'stylist_portrait.png';
    else if (file.startsWith('man_haircut_before')) targetName = 'haircut_before.jpg';
    else if (file.startsWith('man_haircut_after')) targetName = 'haircut_after.jpg';
    
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, targetName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} -> ${targetName}`);
  }
});

