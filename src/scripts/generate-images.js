import fs from 'fs';
import path from 'path';

// Create the images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a simple colored SVG
function createSVG(width, height, bgColor, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial" font-size="${height/10}px">${text}</text>
  </svg>`;
}

// Image definitions
const images = [
  { name: 'logo.svg', width: 100, height: 50, color: '#1e3a8a', text: 'Ed Academy' },
  { name: 'hero1.svg', width: 1200, height: 600, color: '#1e3a8a', text: 'Hero Image 1' },
  { name: 'hero2.svg', width: 1200, height: 600, color: '#f97316', text: 'Hero Image 2' },
  { name: 'hero3.svg', width: 1200, height: 600, color: '#1e3a8a', text: 'Hero Image 3' },
  { name: 'welcome-image.svg', width: 800, height: 450, color: '#f97316', text: 'Welcome' },
  { name: 'welcome-image-2.svg', width: 300, height: 300, color: '#1e3a8a', text: 'Welcome 2' },
  { name: 'news1.svg', width: 600, height: 400, color: '#1e3a8a', text: 'News 1' },
  { name: 'news2.svg', width: 600, height: 400, color: '#f97316', text: 'News 2' },
  { name: 'news3.svg', width: 600, height: 400, color: '#1e3a8a', text: 'News 3' },
  { name: 'event1.svg', width: 400, height: 300, color: '#f97316', text: 'Event 1' },
  { name: 'event2.svg', width: 400, height: 300, color: '#1e3a8a', text: 'Event 2' },
  { name: 'event3.svg', width: 400, height: 300, color: '#f97316', text: 'Event 3' },
  { name: 'course1.svg', width: 400, height: 300, color: '#1e3a8a', text: 'Course 1' },
  { name: 'course2.svg', width: 400, height: 300, color: '#f97316', text: 'Course 2' },
  { name: 'course3.svg', width: 400, height: 300, color: '#1e3a8a', text: 'Course 3' },
  { name: 'course4.svg', width: 400, height: 300, color: '#f97316', text: 'Course 4' },
  { name: 'testimonial1.svg', width: 100, height: 100, color: '#1e3a8a', text: 'T1' },
  { name: 'testimonial2.svg', width: 100, height: 100, color: '#f97316', text: 'T2' },
  { name: 'testimonial3.svg', width: 100, height: 100, color: '#1e3a8a', text: 'T3' },
  { name: 'students.svg', width: 800, height: 600, color: '#1e3a8a', text: 'Students' },
];

// Create each image
images.forEach(img => {
  const svgContent = createSVG(img.width, img.height, img.color, img.text);
  const filePath = path.join(imagesDir, img.name);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!'); 