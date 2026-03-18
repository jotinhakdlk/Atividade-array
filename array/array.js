let igredientes = [];
let quantidades = [];

function adicionar(){
    let igrediente = document.getElementById("igrediente").value;
    let quantidade = document.getElementById("quantidade").value;
    if(igrediente != "" || quantidade != ""){
        igredientes.push(igrediente);
        quantidades.push(quantidade);
        document.getElementById("igrediente").value = "";
        document.getElementById("quantidade").value = "";
        document.getElementById("resultado").innerHTML = "Igrediente registrado com sucesso!"
    } else{
        document.getElementById("resultado").innerHTML = "Algum valor está em branco!"
    }

}

function mostrar(){
    let texto = "Igredientes atuais: <br>"
    for(let i=0; i < igredientes.length; i++){
        texto += igredientes[i] + " | " + quantidades[i] + "<br>"
    }
    document.getElementById("resultado").innerHTML = texto;
}

function remove(){
    quantidades.pop()
    igredientes.pop()
}