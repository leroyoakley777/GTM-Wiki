import { readFileSync } from "node:fs";
const c = readFileSync("docs/contributing.md","utf8");
const out=new Set(); const lines=c.split("\n"); let inFence=false;
for(const line of lines){ if(/^\s*(```|~~~)/.test(line)){inFence=!inFence;continue;} if(inFence)continue;
 for(const m of line.matchAll(/\[([^\]|]+)\]\(https?:\/\/[^)]+\)/g)){ let t=m[1].split(":")[0].split("—")[0].split(" - ")[0].split(" (")[0].trim(); t=t.replace(/^(?:the|a|an)\s+/i,""); t=t.replace(/[',]$/,"").trim(); if(t.length>=3&&t.length<=45&&/^[A-Z]/.test(t))out.add(t); }
}
console.log("CANDIDATES:"); for(const x of out) console.log(" -", x);
