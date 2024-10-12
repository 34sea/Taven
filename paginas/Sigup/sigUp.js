//<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
//adicionar
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
//ler
import { getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
//atualizar dados
import { query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
//Apagar
import { deleteDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoaDUktIWW56AZwohiuqLYFnZRWnSsP4o",
    authDomain: "testeweb-94123.firebaseapp.com",
    projectId: "testeweb-94123",
    storageBucket: "testeweb-94123.appspot.com",
    messagingSenderId: "391994004924",
    appId: "1:391994004924:web:81158511493f7b1d0a87b9",
    measurementId: "G-MRYS7ZTJZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//</script>
const db = getFirestore(app);

//SignUp


 
 const form = document.getElementById('signupForm');
 
 form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const SignUp = {
        nome: document.querySelector(".nomeSig").value,
        senha: document.querySelector("#senha").value,
        email: document.querySelector(".emailSig").value,
        dataSi: document.querySelector(".dataSig").value,
        sexo: document.querySelector(".selectSig").value,
        celular: document.querySelector(".numeroSig").value,
        assinar: "n"
        
     };
     if(document.querySelector("#senha").value == document.querySelector("#confirmarSenha").value){
        let ver = false
        const nome2 = document.querySelector(".emailSig").value;
        const usuariosCollection = collection(db, 'usersTaven');
        const q = query(usuariosCollection, where('email', '==', nome2));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            console.log('Usuário encontrado:', userData);
            ver=true
            
        });
        if(ver==false){
            const docRef = await addDoc(collection(db, "usersTaven"), SignUp);
            window.open("../Login/index.html", "_self")
        }else{
            alert("Este usuario já existe")
            ver=false
        }
        
     }else{
        alert("Senha e confirmar senha são diferentes")
     }
 })
