let botao = document.querySelector("#botao");
let textoAparecer = document.querySelector("#textoAparecer");

botao.addEventListener("click", e =>{
    textoAparecer.innerHTML = '"As circunstâncias do nascimento de alguém são irrelevantes; é o que você faz com o dom da vida que determina quem você é." - Mewtwo, Pokémon';

    setTimeout(() => {
        textoAparecer.innerHTML = "";
    }, 6000);
});