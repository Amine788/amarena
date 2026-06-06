const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
if (fs.existsSync(path.join(__dirname, 'index.html'))) files.push(path.join(__dirname, 'index.html'));
if (fs.existsSync(path.join(__dirname, 'style.css'))) files.push(path.join(__dirname, 'style.css'));
if (fs.existsSync(path.join(__dirname, 'tailwind.config.js'))) files.push(path.join(__dirname, 'tailwind.config.js'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace logos
  content = content.replace(/\/images\/logo-amarena\.png/g, '/logo.png');
  
  // Replace colors
  content = content.replace(/#C9A86A/gi, '#1565C0'); // Gold -> Royal Blue
  content = content.replace(/#C9A84C/gi, '#1565C0'); // Other gold
  content = content.replace(/rgba\(201,\s*168,\s*106/gi, 'rgba(21, 101, 192'); 
  
  content = content.replace(/#FAF6F0/gi, '#FFFFFF'); // Cream -> White
  content = content.replace(/rgba\(250,\s*246,\s*240/gi, 'rgba(255, 255, 255'); 
  
  content = content.replace(/#0B0B0C/gi, '#0A2254'); // Dark -> Deep Blue
  content = content.replace(/#111111/gi, '#0D2B6B'); // Darker -> Navy
  content = content.replace(/#121214/gi, '#0A2254');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
