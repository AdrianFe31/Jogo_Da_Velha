var player = "Foguete";
var numJog = 0;

function checkjogo(id) {

var opt = verificaSrc(id);

var pc = document.getElementById('cpu').checked;

if(opt == "transp.png") {
document.getElementById(id).src = "img/" + player + ".png";

if(winchek()){
    alert("Fim de Jogo, o jogador " + player + " venceu!");
    return false;

}   

if(player == "Foguete") {
    player = "ET";

}else {
    player = "Foguete";

}

numJog++;

    if (numJog >= 9) {
        alert("Fim de Jogo, deu velha!!!");
        return false;
    }
    if (pc && player == "ET") {
        checkjogo(JogoDoPc());
    }
    }
}

function verificaSrc(id) {

  var file = document.getElementById(id).src;
  return file.substring(file.length - 10, file.length);
}

function winchek() {

if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") {
    return true;
}

if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png") {
    return true;
}

if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") {
    return true;
}

if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") {
    return true;
}
if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") {
    return true;
}

if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") {
    return true;
}
if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") {
    return true;
}

if ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png") {
    return true;

}

return false;
}

//-----------PC


 function JogoDoPc() {

    if (verificaSrc('c1') == "transp.png"){
        return 'c1';
    }
    if (verificaSrc('c2') == "transp.png"){
        return 'c2';
    }
    if (verificaSrc('c3') == "transp.png"){
        return 'c3';
    }
    if (verificaSrc('c4') == "transp.png"){
        return 'c4';
    }
    if (verificaSrc('c5') == "transp.png"){
        return 'c5';
    }
    if (verificaSrc('c6') == "transp.png"){
        return 'c6';
    }
    if (verificaSrc('c7') == "transp.png"){
        return 'c7';
    }
    if (verificaSrc('c8') == "transp.png"){
        return 'c8';
    }
    if (verificaSrc('c9') == "transp.png"){
        return 'c9';
    }
    
    return 'c' + Math.floor ((Math.random() * 9) + 1);
 }

 


