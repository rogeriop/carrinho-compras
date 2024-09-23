

function mostra() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let comentario = document.getElementById('comentario');
    
    alert(`Nome = ${nome} e Idade = ${idade}anos`);
    console.log(`Nome = ${nome} e Idade = ${idade}anos`);

    if(idade<18) {
        comentario.textContent = "Você é menor de idade"
    } else if (idade >= 18 & idade < 60) {
        comentario.textContent = "Você é uma pessoa adulta";
    } else if (idade >= 60) {
        comentario.textContent = "Você é uma pessoa idosa";

    }

    
    }



