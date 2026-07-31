import { db } from "./firebase.js";
import {
collection,
addDoc,
getDocs,
orderBy,
query,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Publish News
window.publishNews = async function () {

const title = document.getElementById("newsTitle").value;
const category = document.getElementById("newsCategory").value;
const image = document.getElementById("newsImage").value;
const content = document.getElementById("newsContent").value;

if (!title || !content) {
alert("Please fill all required fields.");
return;
}

await addDoc(collection(db, "news"), {
title,
category,
image,
content,
created: serverTimestamp()
});

alert("✅ News Published!");

document.getElementById("newsTitle").value = "";
document.getElementById("newsImage").value = "";
document.getElementById("newsContent").value = "";
};

// Load News
window.loadNews = async function () {

const container = document.getElementById("newsContainer");

if (!container) return;

container.innerHTML = "";

const q = query(collection(db, "news"), orderBy("created", "desc"));

const snapshot = await getDocs(q);

snapshot.forEach(doc => {

const data = doc.data();

container.innerHTML += `

<div class="news-card">

<img src="${data.image}" alt="">

<h2>${data.title}</h2>

<p><strong>${data.category}</strong></p>

<p>${data.content}</p>

</div>

`;

});

};

window.addEventListener("load", loadNews);
// ==============================
// Barca Music Playlist
// ==============================

const musicPlayer = document.getElementById("barcaPlayer");
const musicTitle = document.getElementById("songTitle");

const playlist = [
{
title: "Barça Anthem",
src: "images/anthem.mp3"
},
{
title: "Haneef Night",
src: "images/haneef-night.mp3"
},
{
title: "Lamine Yamal - Y Que Fue",
src: "images/lamine-yamal-y-que-fue.mp3"
},
{
title: "Rack City Glass Teeth",
src: "images/rack-city-glass-teeth.mp3"
}
];

let currentTrack = 0;

if (musicPlayer && musicTitle) {

loadTrack(currentTrack);

musicPlayer.addEventListener("ended", nextSong);

}

function loadTrack(index) {

musicPlayer.src = playlist[index].src;
musicTitle.textContent = playlist[index].title;
musicPlayer.load();

}

window.nextSong = function () {

currentTrack++;

if (currentTrack >= playlist.length)
currentTrack = 0;

loadTrack(currentTrack);
musicPlayer.play();

};

window.prevSong = function () {

currentTrack--;

if (currentTrack < 0)
currentTrack = playlist.length - 1;

loadTrack(currentTrack);
musicPlayer.play();

};
