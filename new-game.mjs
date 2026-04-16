import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.log('Error: Please provide a game title in quotes.');
  process.exit(1);
}

// Convert "Titanfall 2" to "titanfall-2.md"
const fileName = title.toLowerCase().trim().replace(/\s+/g, '-') + '.md';
const filePath = path.join('docs', 'games', fileName);

const template = `---
title: ${title}
date: ${new Date().toISOString().split('T')[0]}
editLink: true
---

# ${title} | Review

> "[Insert your opening hook here.]"



### 📋 The Vitals
- **Platform:** [PC / PS5 / Xbox / Switch]
- **Playtime:** [X hours]
- **My Rating:** [/10]
- **Verdict:** [One-line take]



### 🎮 Gameplay
[How it feels to play, mechanics, controls, pacing, and what stands out.]



### 📖 Story
[Keep this spoiler-free by default. Add a spoiler warning before plot details if needed.]



### 🎧 Graphics & Audio
[Visual style, performance, soundtrack, voice work, and general atmosphere.]



### 🏁 Final Verdict
[Who should play this, and is it worth the time/money?]



### 🔚 The End
I hope you enjoyed it, make sure to check out my other reviews, and see you on the next one!
`;

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, template);
  console.log(`🚀 Created new game review: ${filePath}`);
} else {
  console.log('⚠️ That file already exists. Stop overthinking and just edit it.');
}
