const chapters = [{"title": "How Our Story Started", "text": "Kuch kahaniyan plan nahi hoti… bas ek chhoti si baat se shuru ho jaati hain. ❤️\n\nDelhi ki ek Snapchat se shuru hui baat… number save karne ki zid… aur 21 September 2025 ko hamari conversations officially shuru hui.", "photo": 1, "caption": "Kuch kahaniyan plan nahi hoti… bas ek chhoti si baat se shuru ho jaati hain. ❤️"}, {"title": "Our First Call", "text": "21 September 2025 — around 8:45 PM.\n\nPehli call sirf 55 minutes ki thi… par uske baad baatein kabhi chhoti nahi hui. 📞🥹", "photo": 2, "caption": "Pehli call sirf 55 minutes ki thi… par uske baad baatein kabhi chhoti nahi hui. 🥹📞"}, {"title": "And Then… We Started Getting Closer", "text": "Daily talks… chhoti-chhoti baatein… aur woh baar-baar poochna — “Tu mere ko kab haan karegi?”\n\nAur har baar ek hi jawab: “Sochenge, sochenge, sochenge…” 😭❤️\n\nLagbhag ek mahine tak yehi chalta raha… aur pata hi nahi chala kab baaton se aadat, aur aadat se ek khoobsurat rishta ban gaya.", "photo": 3, "video": true, "caption": "Pata hi nahi chala kab baaton se aadat, aur aadat se ek khoobsurat rishta ban gaya. ❤️"}, {"title": "The Night I Finally Said Yes", "text": "15 October 2025 ko visa aaya.\n\nPhir 20 October 2025, Diwali ki raat, exactly 12:00 AM… woh moment aaya jab finally “haan, I love you” kaha gaya. ❤️\n\nEk aisa moment jo hamesha special rahega.", "image": "proposal-20-oct.jpg", "caption": "20 October ki woh raat… ek chhoti si ‘haan’ ne hamari story ko ek naya naam de diya. 🥹❤️"}, {"title": "The Day Distance Began", "text": "24 October 2025.\n\nSubah around 7:00 AM hamari last conversation hui… aur phir Dubai ki journey shuru ho gayi.\n\nUs din se long distance hamari story ka hissa ban gaya. ✈️🥹", "image": "flight-ticket.png", "ticketPdf": true, "caption": "Ek ticket… ek nayi journey… aur hamari story ka sabse mushkil chapter. ✈️🥹❤️"}, {"title": "Our Long Distance Journey", "text": "Same feelings. Different cities. 🌍\n\nDoor rehkar bhi daily life ki chhoti-chhoti baatein share karna, miss karna, wait karna… aur har din connection ko alive rakhna.", "photo": 4, "caption": "Faasle sirf jagahon ke the… dil toh tab bhi ek hi jagah tha. ❤️🌍"}, {"title": "The Hardest Few Days", "text": "Ek Instagram story ki wajah se uske ghar par problem hui… aur 3–4 din tak properly baat nahi ho paayi.\n\nDono taraf bas yaad, tension aur emotions the. Phir family ne baat karne di, aur dheere-dheere conversations wapas normal hone lagi.", "photo": 5, "caption": "Kuch din bahut mushkil the… par unhone humein ye sikha diya ki sachchi feelings aasani se haar nahi maanti. 🥹❤️"}, {"title": "When My Family Found Out", "text": "Kuch time tak sab normal tha… phir ek din sab kuch mere ghar par pata chal gaya.\n\nMere ghar walon ko pehli baar uske baare mein pata chala, aur uske baad ghar par bahut problems aa gayi.", "photo": 6, "caption": "Sab kuch achanak badal gaya… par dil mein jo tha, woh itni aasani se nahi badla. ❤️"}, {"title": "The Month We Couldn't Talk", "text": "Lagbhag ek mahina aisa tha jab properly baat karna possible nahi tha.\n\nUski awaaz theek se sunna bhi mushkil ho gaya tha. Dono ne ek-doosre ko bahut miss kiya… aur bahut emotions the. 🥺", "photo": 7, "caption": "Ek mahina baaton ke bina guzarna easy nahi tha… har khamoshi mein ek doosre ki yaad thi. 🥺❤️"}, {"title": "The Twist We Never Expected", "text": "Ye kisi personal fight ki wajah se nahi tha.\n\nBas itna tha ki mere family ko uske baare mein pehle pata nahi tha. Jab unhe pata chala, toh story ne ek aisa mod liya jo humne kabhi socha bhi nahi tha.\n\nPhir bhi umeed ko chhodna nahi tha.", "photo": 8, "caption": "Kahani ne ek aisa mod liya jo humne kabhi socha bhi nahi tha… phir bhi humne umeed ko chhodne nahi diya. ✨❤️"}, {"title": "Where We Are Today", "text": "Dheere-dheere cheezein thodi better hui hain… lekin sab kuch pehle jaisa nahi hai.\n\nPehle baatein 1–1 AM tak chalti thi; ab aksar around 10:30 PM tak rukni padti hain. Ghar par freely baat karna abhi bhi easy nahi hai.\n\nLekin little by little, things are becoming somewhat like before. ❤️", "photo": 9, "caption": "Sab kuch pehle jaisa nahi hai… lekin jo feelings hain, woh aaj bhi wahi hain. ❤️🥹"}, {"title": "Waiting For December", "text": "Ab bas December ka intezaar hai… 🥹❤️\n\nKyunki December mein pehli baar face-to-face milna hai.\n\nItni saari calls, messages, memories aur distance ke baad — finally, first meeting.", "photo": 10, "caption": "Ab bas December ka intezaar hai… kyunki is baar kahani screen par nahi, saamne se milegi. 🥹❤️✨"}];
let current = 0;

const chapterEl = document.getElementById('chapter');
const storyEl = document.getElementById('story');
const endingEl = document.getElementById('ending');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function startStory(){
  document.querySelector('.hero').classList.add('hidden');
  storyEl.classList.remove('hidden');
  renderChapter();
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderChapter(){
  const c = chapters[current];
  const photo = c.photo ? `<img class="photo" src="assets/photo-${c.photo}.jpg" alt="Story memory ${c.photo}" loading="lazy">` : (c.image ? `<img class="photo" src="assets/${c.image}" alt="Story memory" loading="lazy">` : '');
  const video = c.video ? `<div class="video-wrap"><video controls playsinline preload="metadata"><source src="assets/chapter-3-video.mp4" type="video/mp4">Your browser does not support video.</video></div>` : '';
  const ticketLink = c.ticketPdf ? `<a class="secondary ticket-link" href="assets/flight-ticket.pdf" target="_blank" rel="noopener">Open full ticket PDF ✈️</a>` : '';
  chapterEl.innerHTML = `
    <article class="chapter-card">
      <div class="chapter-number">Chapter ${current+1} of ${chapters.length}</div>
      <h3>${c.title}</h3>
      <p class="story-text">${c.text}</p>
      ${photo}
      ${ticketLink}
      ${video}
      <p class="caption">${c.caption}</p>
    </article>`;
  progressBar.style.width = `${((current+1)/chapters.length)*100}%`;
  prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
  nextBtn.textContent = current === chapters.length-1 ? 'Finish story ❤️' : 'Next chapter →';
}

function nextChapter(){
  if(current < chapters.length-1){
    current++;
    renderChapter();
    window.scrollTo({top:0,behavior:'smooth'});
  } else {
    storyEl.classList.add('hidden');
    endingEl.classList.remove('hidden');
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

function prevChapter(){
  if(current>0){
    current--;
    renderChapter();
    window.scrollTo({top:0,behavior:'smooth'});
  }
}

function restartStory(){
  current=0;
  endingEl.classList.add('hidden');
  storyEl.classList.remove('hidden');
  renderChapter();
  window.scrollTo({top:0,behavior:'smooth'});
}

function makeHeart(){
  const h=document.createElement('span');
  h.className='heart';
  h.textContent='♥';
  h.style.left=(Math.random()*100)+'%';
  h.style.fontSize=(12+Math.random()*18)+'px';
  h.style.animationDuration=(5+Math.random()*5)+'s';
  document.querySelector('.hearts').appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(makeHeart,900);
