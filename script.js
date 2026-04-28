let rotation = 0;
let score = 0;
let reward50 = false;
let reward100 = false;

/* 🎬 START */
function startGame() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("login").classList.remove("hidden");
  }, 2000);
}

/* 🔐 LOGIN */
function unlock() {
  const p = document.getElementById("pass").value;

  if (p === "Babi 0328") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerHTML = "❌ Incorrect";
  }
}

function togglePass() {
  const i = document.getElementById("pass");
  i.type = i.type === "password" ? "text" : "password";
}

/* 🎡 WHEEL */
const options = ["💋 Kiss","🤗 Hug","😏 Bite","💜 You decide","😢 Sad","🔁 Try again"];

function spinWheel() {
  const w = document.getElementById("wheel");

  rotation += Math.random()*360 + 1800;
  w.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    let r = options[Math.floor(Math.random()*options.length)];
    document.getElementById("wheelResult").innerHTML = r;
    showOverlay(r);
  }, 4000);
}

/* 💬 TRUTH / DARE */
const truths = [/* 20 included earlier */];
const dares = [/* 20 included earlier */];

function pickTruth(){
  document.getElementById("toldResult").innerHTML =
    truths[Math.floor(Math.random()*truths.length)];
  showOverlay("💬 Truth");
}

function pickDare(){
  document.getElementById("toldResult").innerHTML =
    dares[Math.floor(Math.random()*dares.length)];
  showOverlay("💘 Dare");
}

/* 💜 HEART */
function spawnHeart(){
  const h = document.createElement("div");
  h.innerHTML="💜";
  h.style.position="absolute";
  h.style.left=Math.random()*90+"%";
  document.getElementById("heartArea").appendChild(h);

  setTimeout(()=>h.remove(),2000);

  h.onclick=()=>{
    score++;
    document.getElementById("score").innerHTML=score;

    if(score>=100){
      firework();
    }
    h.remove();
  };
}
setInterval(spawnHeart,800);

/* 💥 OVERLAY */
function showOverlay(t){
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlayText").innerHTML=t;

  setTimeout(()=>{
    document.getElementById("overlay").classList.add("hidden");
  },2000);
}

/* 🎆 FIREWORK */
function firework(){
  for(let i=0;i<20;i++){
    let s=document.createElement("div");
    s.innerHTML="✨";
    s.style.position="fixed";
    s.style.left=Math.random()*100+"%";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),1500);
  }
}
