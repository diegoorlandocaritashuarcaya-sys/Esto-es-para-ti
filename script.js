let mensaje="Solo quería decirte que admiro mucho la mujer que eres. Tu forma de luchar por tus metas, tu inteligencia y tu esencia siempre fueron algo que me inspiró. Hoy solo quería desearte un feliz Día de la Mujer y recordarte que mereces cosas muy bonitas en tu vida. 💜";

let i=0;

function abrirCarta(){

document.querySelector(".sobre").classList.add("abierto");

let intervalo=setInterval(function(){

if(i<mensaje.length){

document.getElementById("texto").innerHTML+=mensaje.charAt(i);

i++;

}else{

clearInterval(intervalo);

}

},40);

}

/* corazones flotando */

function crearCorazon(){

let corazon=document.createElement("div");

corazon.innerHTML="💜";

corazon.classList.add("corazon");

corazon.style.left=Math.random()*100+"vw";

corazon.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},6000);

}

setInterval(crearCorazon,600);

/* mensaje final */

function mensajeFinal(){

document.getElementById("final").innerHTML=
"Aunque el tiempo pase, siempre te voy a desear lo mejor. Gracias por haber sido parte de mi historia. ✨";

}