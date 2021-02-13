var open = false;
document.getElementById("Chatbot-container").style.display = "none";
document.getElementById("chat").style.display = "none";

function abrirChatBox() {
    if(open){
        document.getElementById("Chatbot-container").style.display = "none";
        open = false;
    }else{
        document.getElementById("Chatbot-container").style.display = "block";
        open = true;
    } 
}

function cerrarChatBox(){
    document.getElementById("Chatbot-container").style.display = "none";
    open = false;
}

function mostrarChat(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("chat").style.display = "block";
}

function regresar(){
    document.getElementById("inicio").style.display = "block";
    document.getElementById("chat").style.display = "none";
}

function scrollBtn () {  
    var chatBox = document.getElementById("Chatbot-container").scrollTop;
    var btnCerrar = document.getElementById("cerrar");

    chatBox > 0 ? btnCerrar.style.backgroundColor =  'rgba(0, 0, 0, 0.3)' : btnCerrar.style.backgroundColor =  'rgba(0, 0, 0, 0)';
}