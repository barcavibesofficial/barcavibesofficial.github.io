const songs = [
{
title: "Anthem",
artist: "BarcaVibesOfficial",
src: "music/anthem.mp3"
},
{
title: "Haneef Night",
artist: "BarcaVibesOfficial",
src: "music/haneef-night.mp3"
},
{
title: "Lamine Yamal Y Que Fue",
artist: "BarcaVibesOfficial",
src: "music/lamine-yamal-y-que-fue.mp3"
},
{
title: "Rack City Glass Teeth",
artist: "BarcaVibesOfficial",
src: "music/rack-city-glass-teeth.mp3"
}
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const volume = document.getElementById("volume");
const items = document.querySelectorAll("#playlist li");

let index = 0;
let playing = false;

loadSong(index);

function loadSong(i){

audio.src = songs[i].src;
title.textContent = songs[i].title;
artist.textContent = songs[i].artist;

items.forEach(li=>li.classList.remove("active"));
items[i].classList.add("active");

}

playBtn.onclick = ()=>{

if(playing){

audio.pause();
playBtn.innerHTML="▶️";
playing=false;

}else{

audio.play();
playBtn.innerHTML="⏸";
playing=true;

}

};

nextBtn.onclick=()=>{

index++;

if(index>=songs.length){

index=0;

}

loadSong(index);

audio.play();

playing=true;

playBtn.innerHTML="⏸";

};

prevBtn.onclick=()=>{

index--;

if(index<0){

index=songs.length-1;

}

loadSong(index);

audio.play();

playing=true;

playBtn.innerHTML="⏸";

};

audio.addEventListener("timeupdate",()=>{

if(audio.duration){

progress.value=(audio.currentTime/audio.duration)*100;

current.textContent=format(audio.currentTime);

duration.textContent=format(audio.duration);

}

});

progress.oninput=()=>{

audio.currentTime=(progress.value/100)*audio.duration;

};

volume.oninput=()=>{

audio.volume=volume.value;

};

audio.onended=()=>{

nextBtn.click();

};

items.forEach(item=>{

item.onclick=()=>{

index=parseInt(item.dataset.index);

loadSong(index);

audio.play();

playing=true;

playBtn.innerHTML="⏸";

};

});

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}
