// Note: This conversion assumes you have already loaded the audio file using appropriate JavaScript audio APIs.

// Quantizing the levels of the audio into a predefined number of levels
const L = 1024;
const sound = []; // Audio data array

let max = Math.max.apply(null, sound);
let min = Math.min.apply(null, sound);
let delta = min / ((L - 1) / 2);
let levels1 = [];
for (let i = min; i >= 0; i -= delta) {
  levels1.push(i);
}
let level1flp = levels1.slice().reverse();
let levels = levels1.concat(level1flp.slice(1));

let diff1 = 0;
let q = new Array(sound.length);
for (let i = 0; i < sound.length; i++) {
  for (let j = 0; j < levels.length; j++) {
    let diff = Math.abs(sound[i] - levels[j]);
    if (diff < diff1) {
      q[i] = levels[j];
    }
    diff1 = diff;
  }
}

// Getting the probabilities of different symbols or levels
let prob = new Array(levels.length).fill(0);
for (let i = 0; i < levels.length; i++) {
  for (let j = 0; j < q.length; j++) {
    if (levels[i] === q[j]) {
      prob[i] += 1;
    }
  }
}
prob = prob.map((count) => count / q.length);
let probval = [];
for (let i = 0; i < levels.length; i++) {
  probval.push([prob[i], levels[i]]);
}
probval.sort((a, b) => b[0] - a[0]);
let probvalind = probval.map((item, index) => [...item, index + 1]);
let indexofnzero = probvalind.findIndex((item) => item[0] > 0);
let probvalindnew = probvalind.map((row) => row.slice(0, indexofnzero));
prob = probvalindnew.map((row) => row[0]);

// Applying Huffman coding to the probabilities
let codes = new Array(probvalindnew[0].length);
for (let i = 0; i < codes.length; i++) {
  codes[i] = { c: [] };
}

let s = [
  { f: [], c: [] },
  { f: [], c: [] },
];
for (let i = 0; i < probvalindnew[0].length; i++) {
  s[0].f[i] = probvalindnew[0][i];
  s[1].f[i] = probvalindnew[2][i];
}

let m = 1;
var n = 1;
while (s[0].f[0] !== 1) {
  let rightind = s[1].f.slice(-m);
  let leftind = s[1].f.slice(-m - 1, -1);
  for (let r = 0; r < rightind.length; r++) {
    let e = rightind[r];
    codes[e - 1].c.push(1);
  }
  for (let r = 0; r < leftind.length; r++) {
    codes[leftind[r] - 1].c.push(0);
  }
  s[0].f[s[0].f.length - m - 1] += s[0].f[s[0].f.length - m];
  s[1].f[s[0].f.length - m - 1] = s[1].f[s[0].f.length - m - 1].concat(
    s[1].f[s[0].f.length - m]
  );
  n = m;
  if (s[0].f[0] !== 1) {
    while (s[0].f[s[0].f.length - n] > s[0].f[s[0].f.length - n - 1]) {
      let buffer1 = s[0].f[s[0].f.length - n];
      let buffer2 = s[1].f[s[0].f.length - n];
      s[0].f[s[0].f.length - n] = s[0].f[s[0].f.length - n - 1];
      s[1].f[s[0].f.length - n] = s[1].f[s[0].f.length - n - 1];
      s[0].f[s[0].f.length - n - 1] = buffer1;
      s[1].f[s[0].f.length - n - 1] = buffer2;
      n = n + 1;
      if (n === s[0].f.length - 1) {
        break;
      }
    }
  }
  m = m + 1;
}

for (let i = 0; i < codes.length; i++) {
  codes[i].c.reverse();
}

// Calculating entropy
let H = 0;
for (let i = 0; i < prob.length; i++) {
  H -= prob[i] * Math.log2(prob[i]);
}

// Calculating average after applying Huffman coding
let Lav = 0;
for (let i = 0; i < prob.length; i++) {
  Lav += prob[i] * codes[i].c.length;
}

// Calculating the maximum efficiency of Huffman code for this speech signal
let Efficiency = (H / Lav) * 100;

// Encoding the speech signal
let enc = new Array(q.length);
for (let i = 0; i < q.length; i++) {
  enc[i] = { e: [] };
}

for (let i = 0; i < probvalindnew[0].length; i++) {
  let rrrr = q.findIndex((item) => item === probvalindnew[1][i]);
  for (let j = 0; j < rrrr.length; j++) {
    enc[rrrr[j]].e = enc[rrrr[j]].e.concat(codes[i].c);
  }
}
let encodedsound = [];

for (let i = 0; i < q.length; i++) {
  encodedsound = encodedsound.concat(enc[i].e);
}

// Decoding the speech signal
var n = 1;
let decodedsoundind = [];
for (let j = 0; j < q.length; j++) {
  for (let i = 0; i < probvalindnew[0].length; i++) {
    let bool =
      JSON.stringify(codes[i].c) ===
      JSON.stringify(encodedsound.slice(n - 1, n + codes[i].c.length - 1));
    if (bool) {
      decodedsoundind[j] = i + 1;
      n = n + codes[i].c.length;
      break;
    }
  }
}

// Note: The above code assumes you have already implemented or have access to appropriate audio decoding functions for playback or further processing of the decoded audio.
