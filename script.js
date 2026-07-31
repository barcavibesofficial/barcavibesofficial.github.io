import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  doc
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
// ===========================
// Latest News Card (Homepage)
// ===========================

async function loadLatestNewsCard() {

    const latestTitle = document.getElementById("latestTitle");
    const latestText = document.getElementById("latestText");

    if (!latestTitle || !latestText) return;

    const q = query(
        collection(db, "news"),
        orderBy("created", "desc")
    );

    const snapshot = await getDocs(q);

    if (!snapshot.empty) {

        const data = snapshot.docs[0].data();

        latestTitle.textContent = data.title;

        latestText.textContent =
            data.content.length > 100
                ? data.content.substring(0,100) + "..."
                : data.content;

    } else {

        latestTitle.textContent = "No News Yet";

        latestText.textContent = "Publish your first article.";

    }

}

window.addEventListener("load", loadLatestNewsCard);
window.deleteNews = async function(id){

if(confirm("Delete this article?")){

await deleteDoc(doc(db,"news",id));

alert("Article deleted!");

loadNews();

}

}
window.editNews = async function(id){

const newTitle = prompt("New title:");
const newCategory = prompt("New category:");
const newContent = prompt("New content:");
const newImage = prompt("New image URL:");

if(!newTitle || !newCategory || !newContent || !newImage){
    return;
}

await updateDoc(doc(db,"news",id),{
    title:newTitle,
    category:newCategory,
    content:newContent,
    image:newImage
});

alert("✏ Article updated!");

loadNews();
loadLatestNewsCard();

        }
