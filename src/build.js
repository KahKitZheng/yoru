// build.js - Generates theme JSON files from theme configuration
const fs = require("fs");
const path = require("path");
const { getTheme } = require("./theme");

// Define all themes to generate
const themes = [
  {
    theme: "yoru",
    name: "Yoru",
    type: "dark",
    filename: "Yoru-color-theme.json",
  },
];

// Create themes directory if it doesn't exist
const themesDir = path.join(__dirname, "..", "themes");
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// Generate each theme
console.log("🎨 Building themes...\n");

themes.forEach(({ theme, name, type, filename }) => {
  console.log(`Building ${name}...`);

  // Generate theme object
  const themeData = getTheme({ theme, name, type });

  // Write to file
  const filepath = path.join(themesDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(themeData, null, 2), "utf8");

  console.log(`✓ Created ${filename}`);
});

console.log("\n✨ All themes built successfully!");
console.log(`📁 Output directory: ${themesDir}`);

// Generate a summary
console.log("\n📊 Theme Summary:");
themes.forEach(({ name, filename }) => {
  const filepath = path.join(themesDir, filename);
  const stats = fs.statSync(filepath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  console.log(`   ${name}: ${sizeKB} KB`);
});
