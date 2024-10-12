// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// import { getFirestore } from "firebase/firestore";
//adicionar
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, query, where, updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
    
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js";
//ler
import { getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
//atualizar dados
// import { query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
//Apagar
// import { deleteDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mKeOTJjVYDOmMF-jN81EF1vz_J0iKd0",
  authDomain: "testeweb-97a3a.firebaseapp.com",
  projectId: "testeweb-97a3a",
  storageBucket: "testeweb-97a3a.appspot.com",
  messagingSenderId: "669044153148",
  appId: "1:669044153148:web:ed9ca27cdbca8bab38dc39",
  measurementId: "G-W2QF8BG3ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Referência ao Firestore
const db = getFirestore(app);

//SignUp


 
 const form = document.getElementById('signupForm');
 let enviado = false
 let pathC = ""
 form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const fileInput = document.getElementById('video');
     const file = fileInput.files[0];
     const fileName = fileInput.value.split('\\').pop();
 
     if (file) {
         const formData = new FormData();
         formData.append('file', file);
 
         fetch('upload.php', {
             method: 'POST',
             body: formData
         })
         .then(async response => {
             if (response.ok) {
                 console.log('Arquivo enviado com sucesso!');
                 enviado = true
                 pathC = fileName           
                 console.log(pathC)
                //  const SignUp = {
                //     nomeFilme: document.querySelector(".nomeFilme").value,
                //     direccao: document.querySelector(".direccao").value,
                //     elenco: document.querySelector(".elenco").value,
                //     categoria: document.querySelector(".categoria").value,
                //     dataLancamento: document.querySelector(".dataLancamento").value,
                //     arquivo: pathC,
                //     post: document.querySelector(".post").value,
                //     sinopse: document.querySelector(".sinopse").value,
                //     preco: document.querySelector(".plano").value
                    
                // };
                const docRef = await addDoc(collection(db, "movieTaven"), {
                    nomeFilme: pathC
                });
                window.open("../index.html", "_self")
                 //document.getElementById('fileName').textContent = 'Nome do Arquivo: ' + fileName;
                 //fileInput.value = ''; // Limpa o campo de arquivo
                 console.log(SignUp)
             } else {
                 alert('Erro no envio do arquivo: ' + response.statusText);
             }
         })
         .catch(error => {
             console.error('Erro:', error);
         });
     } else {
         alert('Por favor, selecione um arquivo.');
     }

    
 })



 function uploadFile() {
    const fileInput = document.getElementById('video');
    const file = fileInput.files[0];
    const fileName = fileInput.value.split('\\').pop();

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('upload.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Arquivo enviado com sucesso!');
                enviado = true
                pathC = fileName
                //document.getElementById('fileName').textContent = 'Nome do Arquivo: ' + fileName;
                //fileInput.value = ''; // Limpa o campo de arquivo
            } else {
                alert('Erro no envio do arquivo: ' + response.statusText);
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    } else {
        alert('Por favor, selecione um arquivo.');
    }
}
