document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let palpite = document.getElementById('numero-maximo').value;

        let numeroAleatorio = Math.random() * 10;
        numeroAleatorio = Math.floor(numeroAleatorio+1);
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio

        if (palpite == numeroAleatorio){
        document.querySelector('.acertou').style.display = 'block';
        document.querySelector('.enter').innerHTML = '<button class = "jogar-novamente" onclick="window.location.reload()">Jogar novamente</button>';

    }
        else {
            document.querySelector('.errou').style.display = 'block';
            document.querySelector('.enter').innerHTML = '<button class = "jogar-novamente" onclick="window.location.reload()">Jogar novamente</button>';
        }
    })
})