let listaDeNome = [];

function adicionarAmigo() {
    escreveHTML('resultado',"");
    if (document.getElementById('amigo').value === '') {
        alert('Por favor insira um nome válido');
    } else {
        let nome = document.getElementById('amigo').value;
        let nomeCorrigido = nome.charAt(0).toUpperCase() + nome.slice(1);
        listaDeNome.push(nomeCorrigido);
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        numeroDeNomes = listaDeNome.length;
        console.log(numeroDeNomes);
        for (let i = 0; i < listaDeNome.length; i++) {
            let item = document.createElement('li');
            item.textContent = listaDeNome[i];
            lista.appendChild(item);
            console.log(numeroDeNomes)
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
        let numeroLista = Math.floor((Math.random() * numeroDeNomes));
        let nomeSelecionado = listaDeNome[numeroLista]
        escreveHTML('resultado', `o seu amigo secreto é : ${nomeSelecionado}` );
        escreveHTML('listaAmigos', '') 
        sortearAmigo.value = "";
        listaDeNome = [];
        numeroDeNomes = [];
    }
    
}



