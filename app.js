let listaDeNome = [];
numeroDeNomes = 0;

function adicionarAmigo() {
    if (document.getElementById('amigo').value === '') {
        alert('Por favor insira um nome válido');
    } else {
        let nome = document.getElementById('amigo').value;
        let nomeCorrigido = nome.charAt(0).toUpperCase() + nome.slice(1);
        listaDeNome.push(nomeCorrigido);
        numeroDeNomes++;
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        for (let i = 0; i < listaDeNome.length; i++) {
            let item = document.createElement('li');
            item.textContent = listaDeNome[i];
            lista.appendChild(item);
        }
        apagaNome('amigo');
    }
}
function apagaNome(id) {
    document.getElementById(id).value = '';
}

function apagaNome(tag){
    document.getElementById(tag).value = '';
}

function escreveHTML(tag, texto) {
    document.getElementById(tag).innerHTML = texto;
}


function sortearAmigo() {
    if (listaDeNome.length == 0){
        alert('Por favor, insira um nome.')
    }else {
        let numeroLista = parseInt(Math.random() * numeroDeNomes);
        console.log(numeroLista)
        let nomeSelecionado = listaDeNome[numeroLista]
        escreveHTML('resultado', `o seu amigo secreto é : ${nomeSelecionado}` );
        console.log(nomeSelecionado)
        escreveHTML('listaAmigos', '') 
        console.log(listaDeNome)
        sortearAmigo.value = "";
        listaDeNome = [];
        numeroDeNomes = [];
        console.log("reset reset");
        console.log(`o número é ${numeroLista}`)
    }
    
}



