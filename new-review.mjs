import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.log('Error: Please provide a movie title in quotes.');
  process.exit(1);
}

// Convert "The Truman Show" to "the-truman-show.md"
const fileName = title.toLowerCase().trim().replace(/\s+/g, '-') + '.md';
const filePath = path.join('docs', 'movies', fileName);

const template = `---
title: ${title}
date: ${new Date().toISOString().split('T')[0]}
editLink: true
---

# ${title} | Review

> "[Insert a quote here]"



### 📋 The Vitals
*   **Director:** [Name]
*   **Genre:** [Genre]
*   **My Rating:** [ /10]
*   **Vibe Check:** [One sentence on the general feeling]



### 📖 The Premise
[Two sentences max. No spoilers.]



### ⚙️ The Technical Flex
[Comment on the cinematography, sound, or CGI. Keep it tech-capable.]



### 🧠 The Deep Dive
[This is where you analyze the logic or the existential themes.]



### 🏁 Final Verdict
[Is it a masterpiece or a 404 error?]



### 🔚 The End
I hope you enjoyed it, make sure to check out my other reviews, and see you on the next one!
`;

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, template);
  console.log(`🚀 Created new review: ${filePath}`);
} else {
  console.log('⚠️ That file already exists. Stop overthinking and just edit it.');
}
