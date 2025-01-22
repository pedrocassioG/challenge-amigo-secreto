let listaDeNome = [];
numeroDeNomes = 0;


function adicionarAmigo() {
    if (document.getElementById('amigo').value === ''){
        alert('Por favor insira um nome valido')
        }else{
            let nome = document.getElementById('amigo').value;
            let nomeCorrigido = nome.charAt(0).toUpperCase()+nome.slice(1)
            listaDeNome.push(nomeCorrigido);
            console.log(nome);
            numeroDeNomes++; 
            let colocaNaLista = `<li>  ${listaDeNome[listaDeNome.length -1]} </li> `
            escreveHTML("listaAmigos", listaDeNome.map(nome => `<li>${nome}<\li>`).join(''));
            apagaNome('amigo')
            console.log(`lista ${colocaNaLista}`);
            console.log(`o nome agora é ${colocaNaLista}`)
        }
}
function apagaNome(tag){
    document.getElementById(tag).value = ''
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
    }
}



