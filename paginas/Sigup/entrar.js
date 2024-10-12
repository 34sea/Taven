

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

//Login

let senhaE = ""
let emailE = ""
const form = document.getElementById('signupForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const SignUp = {
      senha: document.querySelector("#senha").value,
      email: document.querySelector(".emailSig").value 
    };
  let ver = false
  const nome2 = document.querySelector(".emailSig").value;
  const senhaBus = document.querySelector(".emailSig").value;
  const usuariosCollection = collection(db, 'usersTaven');
  const q = query(usuariosCollection, where('email', '==', nome2));
  const q2 = query(usuariosCollection, where('email', '==', nome2));
  const querySnapshot = await getDocs(q);
  const querySnapshot2 = await getDocs(q2);
  let verNome = false
  let verSenha = false
  let nomeEnc = "Augusto"
  let emailEnc = "Augusto"
  let dataEnc = "Augusto"
  let sexoEnc = "Augusto"
  let numeroCelularEnc = "Augusto"
  querySnapshot.forEach((doc) => {
      const userData = doc.data();
      verNome = true
      emailE = document.querySelector(".emailSig").value 
      nomeEnc = userData.nome
      emailEnc = userData.email
      
      dataEnc = userData.dataSi
      sexoEnc = userData.sexo
      numeroCelularEnc = userData.celular

  });
  querySnapshot2.forEach((doc) => {
      const userData = doc.data();
      verSenha = true
      senhaE = document.querySelector("#senha").value
  });
  if(verNome == verSenha){
      document.querySelector(".container").style.display = "none"
      document.querySelector("body").style.backgroundColor = "white"
      document.querySelector(".org").style.display = "block"
      document.querySelector(".nome").textContent = nomeEnc
      document.querySelector(".nomeR").textContent = nomeEnc
      document.querySelector(".emailR").textContent = emailEnc
      document.querySelector(".dataR").textContent = dataEnc
      document.querySelector(".sexoR").textContent = sexoEnc
      document.querySelector(".cellR").textContent = numeroCelularEnc
      verNome=false
      verSenha=false
      quantiCadastro(emailE)
  }else{
      alert("Este usuario não existe")
  }
})

document.getElementById('mostrarPopup').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('fecharPopup').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
};



let quantiTot = 0
let callQuanti = true
let imagens = [
  "../../imgs/Emprestimo process/Aprovado.jpg",
  "../../imgs/imgsEmprestimos/processando.jpg",
  "../../imgs/imgsEmprestimos/emprestimo.png"
 
]
let marcaV = [[false, false], [false, false], [false, false], [false, false]]
let ids = ["","","",""]
let indeiceT =0
async function quantiCadastro(email){
    const usuariosCollection = collection(db, 'portalDiviAgust');
    const q = query(usuariosCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      if(userData.status == "Em divida"){
        document.querySelectorAll(".imgEmpres")[quantiTot].src = imagens[0]
        document.querySelectorAll(".prccess")[quantiTot].style.display = "none"
        document.querySelectorAll(".dvg")[quantiTot].style.display = "block"
        document.querySelectorAll(".pDiF")[quantiTot].textContent = "Emprestimo efetuado com sucesso"
        marcaV[quantiTot][0] = true
        ids[quantiTot] = doc.id
        ///indeiceT++
        
      }else if(userData.status == "Processando..."){
        document.querySelectorAll(".imgEmpres")[quantiTot].src = imagens[1]
        document.querySelectorAll(".prccess")[quantiTot].style.display = "block"
        document.querySelectorAll(".dvg")[quantiTot].style.display = "none"
        document.querySelectorAll(".pDiF")[quantiTot].textContent = "Aguardando aprovação"
        marcaV[quantiTot][1] = true
      }
      console.log(doc.id)
      quantiTot++
      console.log('Usuário encontrado:', userData);
    });

}


let cadr = window.document.querySelectorAll(".cadr")

for(let i=0; i<cadr.length; i++){
  cadr[i].addEventListener("click", ()=>{
    empreVer(i)
  })
}

function empreVer(status){
  if(marcaV[status][0]){
    document.querySelector(".id").textContent = ids[status]
    document.querySelector(".pagarPup").style.display = "flex"
  }else if(marcaV[status][1]){
    alert("Aguarde a aprovação")
  }else{
    document.querySelector(".pupupEmprestimo").style.display = "flex"
  }
}

document.querySelector(".fazerEmprestemo").addEventListener("click", async ()=>{
  if(quantiTot<4 && quantiTot>=0){
    document.querySelector(".pupupEmprestimo").style.display = "flex"
  }else{
   alert("Emprestimos esgotados")
  }
})

document.querySelector(".sarBtnPag").addEventListener("click", ()=>{
  document.querySelector(".pagarPup").style.display = "none"
})

document.querySelector(".btnPagaEmpr").addEventListener("click", async ()=>{
  ///alert(document.querySelector(".id").textContent)
  const dataRef = doc(db, "portalDiviAgust", document.querySelector(".id").textContent);
  await updateDoc(dataRef, {
    status: "Pago"
  });
  alert("Pagamento efetuado com sucesso")
  location.reload()
})

//Solicitar emprestimo

const formSolicitar = document.querySelector('.formSolicitar');
 
formSolicitar.addEventListener('submit', async (e) => {
     e.preventDefault();
     const date = new Date();
     let dadosEmprestimos = {
        valorSig: document.querySelector(".valorSig").value,
        objetivoSig: document.querySelector(".objetivoSig").value,
        workSig: document.querySelector(".workSig").value,
        salarioSig: document.querySelector(".salarioSig").value,
        bensSig: document.querySelector(".bensSig").value,
        parcelasSig: document.querySelector(".parcelasSig").value,
        carteiraSig: document.querySelector(".carteiraSig").value,
        data: date,
        email: emailE,
        status: "???"
     };
     console.log(dadosEmprestimos)
     console.log(aprovado[0])
     console.log(compareAprovado(aprovado, dadosEmprestimos))
     if(compareAprovado(aprovado, dadosEmprestimos)){
      dadosEmprestimos.status = "Em divida"
      const docRef = await addDoc(collection(db, "portalDiviAgust"), dadosEmprestimos );
      alert("Emprestimo feito com sucesso")
      location.reload()
     }else if(compareAprovado(processando, dadosEmprestimos)){
      dadosEmprestimos.status = "Processando..."
      const docRef = await addDoc(collection(db, "portalDiviAgust"), dadosEmprestimos );
      alert("Aguarde a aprovação dos gestores")
      location.reload()
     }else{
      alert("Reprovado")
      location.reload()
     }
})


//Regras

let aprovado = [
  {
    objetivoSig: "pagar contas",
    workSig: "Funcionário publico",
    salarioSig: "Até 8000, 00mzn"
  },
  {
    objetivoSig: "Gastos com saúde",
    workSig: "empreendedor",
    salarioSig: "Até 8000, 00mzn"
  },
  {
    objetivoSig: "Ajudar um parente",
    workSig: "Funcionário publico",
    salarioSig: "Até 8000, 00mzn"
  }
]

let processando = [
  {
    objetivoSig: "Gastos com saúde",
    workSig: "desempregado",
    salarioSig: "Até 8000, 00mzn"
  }
]

function compareAprovado(aprovadoObj, userDados){
  for(let i=0; i<aprovadoObj.length; i++){
    if(aprovadoObj[i].objetivoSig == userDados.objetivoSig && aprovadoObj[i].workSig == userDados.workSig && aprovadoObj[i].salarioSig == userDados.salarioSig){
      return true
    }
    
  }
  return false
}