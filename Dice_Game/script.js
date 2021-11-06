
function ludogame() {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const play1dice = `img/dice${player1}.png`;
    document.getElementById('check1').setAttribute('src', play1dice);

    const player2 = Math.floor(Math.random() * 6) + 1;
    const play2dice = `img/dice${player2}.png`;
    document.getElementById('check2').setAttribute('src', play2dice);

    if(player1 > player2){
        document.querySelector('h1').innerHTML = "player1 won";
    }else if(player1 < player2){
        document.querySelector('h1').innerHTML = "player2 won";
    }else{
        document.querySelector('h1').innerHTML = "Draw";
    }

}