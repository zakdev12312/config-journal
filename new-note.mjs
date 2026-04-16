import fs from 'fs';
import path from 'path';

const title = process.argv[2];

if (!title) {
  console.log('Error: Please provide a note title in quotes.');
  process.exit(1);
}

const fileName = title.toLowerCase().trim().replace(/\s+/g, '-') + '.md';
const filePath = path.join('docs', fileName); 

const template = `---
title: ${title}
date: ${new Date().toISOString().split('T')[0]}
editLink: true
---

# ${title}

> "[Insert a witty or cynical opening quote here]"



### 📓 The Gist
[High-level summary of the topic.]



### 🧠 Thoughts
[The deep dive. Technical rants, observations, or general overthinking live here.]



### 🔚 The End
Hope you enjoyed it! See you on the next one!
`;

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, template);
  console.log(`🚀 Created new note: ${filePath}`);
} else {
  console.log('⚠️ That note already exists.');
}
