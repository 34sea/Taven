

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

let clientes=Number(0)
let solicitacoes = Number(0)
let dividasPagas = Number(0)
let dividasNaopagas = Number(0)
let allMsg = Number(0)
async function estati(){
    todosClientes()  
    todosSolicitacoes()  
    dividasPaga("Pago")
    dividasNaopaga("Em divida")
    Mensagensh()
    todosFilmes()
}

estati()
let uy = "fgh"



async function todosClientes(){
    console.log("Cliente")
    const querySnapshot = await getDocs(collection(db, "usersTaven"));
    querySnapshot.forEach((doc) => {

        const userData = doc.data();
        console.log(doc.id)
        clientes++
        document.querySelector(".allClientes").textContent = clientes
        document.querySelector(".clientesTexto").textContent = clientes
        document.querySelector(".tabelaUser").innerHTML+=`<tr class="linhaTabela">
        <td>
            <div class="perfiUsers">
                <input type="checkbox" name="" id="mo" >
                <label for="mo" class="perfiLabel">
                    <div class="perfilTe">
                        <img src="./img/perfil/userv2.png" alt="">
                    </div>
                    <div class="useAbr">
                        <span>${userData.nome}</span>
                        <span>${userData.email}</span>
                    </div>
                </label>
            </div>
            
        </td>
        <td>
            <div class="numeroCell">
                ${userData.celular}
            </div>
            
        </td>
        <td>
            <div class="datasEntradaSaida">
                <span>
                    ${userData.sexo}
                </span>
            </div>
            
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ${userData.dataSi}
            </span>
        </div>
        
    </td>
        </tr>`
    });
    console.log("--------------------------------------------------------------")
}

let f=0
let hn = []
let filmesT=0
async function todosSolicitacoes(){
    console.log("Filmes")
    const querySnapshot = await getDocs(collection(db, "movieTaven"));
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(doc.id)
        hn[f] = userData
        filmesT++
        //solicitacoes++
        document.querySelector(".filmes").innerHTML+=`
        <div class="filme">
                            <div class="cabecalhoFilme">
                                <span class="nomeFilmes">
                                    ${userData.nomeFilme}
                                </span>
                                <span class="nomeFilmes">
                                    detalhes
                                </span>
                            </div>
                            <div class="imgPost">
                                <img src="${userData.post}" alt="">
                            </div>
                            <div class="btnsU">
                                <div class="update atualizarFilmesL"">
                                    <span style="color: #fff;">
                                        Atualizar
                                    </span>
                                    <img src="./img/refreshv2.png" alt="Atualizar">
                                </div>
                                <div class="deletes">
                                    <span>
                                        Apagar
                                    </span>
                                    <img src="./img/trash.png" alt="Atualizar">
                                </div>
                            </div>
                            <div class="idFilmeL">${doc.id}</div>
                        </div>
        `
        f++
        
    })
    let atualizarFilmesL = window.document.querySelectorAll(".atualizarFilmesL")
    let idFilmeL = window.document.querySelectorAll(".idFilmeL")
    
   
    document.querySelector(".allPagas").textContent = filmesT
    for(let i=0; i<atualizarFilmesL.length; i++){
        atualizarFilmesL[i].addEventListener("click", ()=>{
            uy = idRR(idFilmeL[i].textContent)

            atua(i)
        })
        document.querySelectorAll(".deletes")[i].addEventListener("click", ()=>{
            apagarFilmej(idFilmeL[i].textContent)
        })
    }

    function atua(indice){
        //alert(hn[indice])
        document.querySelector(".atualizarPopFilme").style.display = "block"
        document.querySelector(".nomeFilme").value = hn[indice].nomeFilme
        document.querySelector(".direccao").value = hn[indice].direccao
        document.querySelector(".elenco").value = hn[indice].elenco
        document.querySelector(".sinopse").value = hn[indice].sinopse
        document.querySelector(".post").value = hn[indice].post
        document.querySelector(".dataLancamento").value = hn[indice].dataLancamento
        
    }
    console.log(hn)

}


async function dividasPaga(dividas){
    const usuariosCollection = collection(db, 'portalDiviAgust');
    const q = query(usuariosCollection, where('status', '==', dividas));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      console.log(doc.id)
      dividasPagas++
      //document.querySelector(".allPagas").textContent = dividasPagas
    });
    console.log("--------------------------------------------------------------")
}



async function dividasNaopaga(dividas){
    const usuariosCollection = collection(db, 'portalDiviAgust');
    const q = query(usuariosCollection, where('status', '==', dividas));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      console.log(doc.id)
      dividasNaopagas++
      document.querySelector(".allNPagas").textContent = dividasNaopagas
    });
    console.log("--------------------------------------------------------------")
}

let allMsg2 = 0
async function Mensagensh(){
    //console.log("Solicitacoes")
    const querySnapshot = await getDocs(collection(db, "formAgusto"));
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(doc.id)
        allMsg2++
        
        document.querySelector(".mensagens").innerHTML+=`<div class="mensagem">
        <div class="nomeMgs comuMsg">
            <div class="tituloMsg">
                Nome
            </div>
            <div>
                ${userData.nome}
            </div>
        </div>
        <div class="userEmail comuMsg">
            <div class="tituloMsg">
                Email
            </div>
            <div>
                ${userData.email}
            </div>
            
        </div>
        <div class="msg comuMsg">
            <div class="tituloMsg">
                Mensagem
            </div>
            <div>
            ${userData.msg}
            </div>
            
        </div>

    </div>`
    })
    document.querySelector(".todasMsg").textContent = allMsg2
    document.querySelector(".todasMsgV2").textContent = allMsg2
}


async function todosFilmes(){
    console.log("filmes")
    const querySnapshot = await getDocs(collection(db, "tavenPagamento"));
    querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(doc.id)
        solicitacoes++
        document.querySelector(".allSocicitacoes").textContent = solicitacoes
        document.querySelector(".todosSo").textContent = solicitacoes
        if(userData.status=="aprovado"){
            document.querySelector(".tabelaUser2").innerHTML+=`<tr class="linhaTabela">
        <td>
            <div class="perfiUsers">
                <input type="checkbox" name="" id="mo" >
                <label for="mo" class="perfiLabel">
                    <div class="perfilTe">
                        <img src="./img/perfil/userv2.png" alt="">
                    </div>
                    <div class="useAbr">
                        <span>${userData.user}</span>
                        <span>${userData.status}</span>
                    </div>
                </label>
            </div>
            
        </td>
        <td>
            <div class="numeroCell">
                ${userData.idPag}
            </div>
            
        </td>
        <td>
            <div class="datasEntradaSaida">
                <span>
                    ${userData.tempo}
                </span>
            </div>
            
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ${userData.dataInscricao}
            </span>
        </div>
        
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ${userData.dataTermino}
            </span>
        </div>
        
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                Aprovado
            </span>
        </div>
        
        </td>
        </tr>`
        }else{
        document.querySelector(".tabelaUser2").innerHTML+=`<tr class="linhaTabela">
        <td>
            <div class="perfiUsers">
                <input type="checkbox" name="" id="mo" >
                <label for="mo" class="perfiLabel">
                    <div class="perfilTe">
                        <img src="./img/perfil/userv2.png" alt="">
                    </div>
                    <div class="useAbr">
                        <span>${userData.user}</span>
                        <span>${userData.status}</span>
                    </div>
                </label>
            </div>
            
        </td>
        <td>
            <div class="numeroCell">
                ${userData.idPag}
            </div>
            
        </td>
        <td>
            <div class="datasEntradaSaida">
                <span>
                    ${userData.tempo}
                </span>
            </div>
            
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ${userData.dataInscricao}
            </span>
        </div>
        
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ${userData.dataTermino}
            </span>
        </div>
        
        </td>
        <td>
        <div class="datasEntradaSaida">
            <span>
                ---------------
            </span>
        </div>
        
        </td>
        </tr>`
        }
        
    });

    let aprovar = document.querySelectorAll(".aprovar")

    for(let i=0; i<aprovar.length; i++){
        aprovar[i].addEventListener("click", async ()=>{
            let idM = document.querySelectorAll(".idAprovar")[i].textContent
            console.log(idM.trim())
            const dataRef = doc(db, "portalDiviAgust", idM.trim());
            await updateDoc(dataRef, {
                status: "Em divida"
            });
            alert("Aprovado")
            location.reload()
        })
    }

    console.log("--------------------------------------------------------------")
}

document.querySelector(".sairXMaj").addEventListener("click", ()=>{
    document.querySelector(".popPagaCartao").style.display = "none"
})

document.querySelector(".btnPagarF").addEventListener("click", ()=>{
    document.querySelector(".popPagaCartao").style.display = "flex"
})

// Função para obter a data no mês seguinte
function getDataNoMesSeguinte(data) {
    var partes = data.split('/');
    var dia = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10) - 1; // Os meses em JavaScript são baseados em zero
    var ano = parseInt(partes[2], 10);
  
    var dataAtual = new Date(ano, mes, dia);
    dataAtual.setMonth(dataAtual.getMonth() + 1);
  
    var diaSeguinte = dataAtual.getDate();
    var mesSeguinte = dataAtual.getMonth() + 1;
    var anoSeguinte = dataAtual.getFullYear();
  
    return diaSeguinte + '/' + mesSeguinte + '/' + anoSeguinte;
  }
  
  // Função para obter o ano seguinte
  function getAnoSeguinte(data) {
    var partes = data.split('/');
    var dia = parseInt(partes[0], 10);
    var mes = parseInt(partes[1], 10) - 1; 
    var ano = parseInt(partes[2], 10);
  
    var dataAtual = new Date(ano, mes, dia);
    dataAtual.setFullYear(dataAtual.getFullYear() + 1);
  
    var anoSeguinte = dataAtual.getFullYear();
  
    return anoSeguinte;
  }
  
  // Exemplos de uso:
  var dataOriginal = '31/10/2023';
  var dataMesSeguinte = getDataNoMesSeguinte(dataOriginal);
  var anoSeguinte = getAnoSeguinte(dataOriginal);
  
  console.log('Data no mês seguinte: ' + dataMesSeguinte);
  console.log('Ano seguinte: ' + anoSeguinte);
  

let pesquisa = document.getElementById("idAssina")
pesquisa.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('idPag').value;
    const usuariosCollection = collection(db, 'tavenPagamento');
    const q = query(usuariosCollection, where('idPag', '==', nome));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
        const userData = doc.data();
        console.log('Usuário encontrado:', userData);
        console.log(doc.id)
        let idDoc = doc.id
        alert(`id1: ${idDoc}`)
        atualizarPayment(idDoc, userData.tempo, userData.dataInscricao)
        /*if(userData.tempo=='mensal'){
            const dataRef = doc(db, "tavenPagamento", idDoc);
            await updateDoc(dataRef, {
            status: "aprovado",
            dataTermino: getDataNoMesSeguinte(userData.dataInscricao)
            });
        }else{
            const dataRef = doc(db, "tavenPagamento", idDoc);
            await updateDoc(dataRef, {
                status: "aprovado",
                dataTermino: getAnoSeguinte(userData.dataInscricao)
            });
        }*/
        
        const nomedf = userData.user;
        const usuariosCollection2 = collection(db, 'usersTaven');
        const q = query(usuariosCollection2, where('email', '==', nomedf));
        alert(`userData.user: ${userData.user}`)
        const querySnapshot546 = await getDocs(q);
        querySnapshot546.forEach(async (doc) => {
            const userData3 = doc.data();
            /*const dataRef2 = doc(db, "usersTaven", doc.id);
            await updateDoc(dataRef2, {
                assinar: "premium"
            });*/
            atualizarAssina(doc.id)
            alert(`id2: ${doc.id}`)
        })
        
       location.reload()
    });
})

async function atualizarPayment(id, tempo, dataIn){
    const dataRef = doc(db, "tavenPagamento", id);
    if(tempo=='mensal'){
        await updateDoc(dataRef, {
        status: "aprovado",
        dataTermino: getDataNoMesSeguinte(dataIn)
        });
    }else{
        await updateDoc(dataRef, {
            status: "aprovado",
            dataTermino: getAnoSeguinte(dataIn)
        });
    }
}


async function atualizarAssina(id){
    const dataRef2 = doc(db, "usersTaven", id);
        await updateDoc(dataRef2, {
        assinar: "premium"
    });
}

document.querySelector(".sairXMaj2").addEventListener("click", ()=>{
    document.querySelector(".atualizarPopFilme").style.display = "none"
})

const form = document.getElementById('signupForm');
let enviado = false
let pathC = ""
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(uy)
    const dataRef = doc(db, "movieTaven", uy);

    try {
        await updateDoc(dataRef, {
            nomeFilme: document.querySelector(".nomeFilme").value,
            direccao: document.querySelector(".direccao").value,
            elenco: document.querySelector(".elenco").value,
            sinopse: document.querySelector(".sinopse").value,
            post: document.querySelector(".post").value,
            dataLancamento: document.querySelector(".dataLancamento").value,
        });

       location.reload()
    } catch (error) {
        
    }
})

function idRR(id){
    return id
}

async function apagarFilmej(id){
    const documentId = id;

    const dataRef = doc(db, "movieTaven", documentId);

    try {
        await deleteDoc(dataRef);
        location.reload()
    } catch (error) {
    }
}


