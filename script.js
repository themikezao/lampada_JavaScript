var lampadaAcesa = false;
var botao = document.getElementById('botao');
var lampada = document.getElementById('lampada');

botao.addEventListener('click', function() {
  lampadaAcesa = !lampadaAcesa; 
  if (lampadaAcesa) {
    lampada.src = 'https://i.postimg.cc/6QyTynzr/bulb-on.png';
    botao.textContent = 'Apagar';
    document.body.style.backgroundColor = 'white'; 
  } else {
    lampada.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png';
    botao.textContent = 'Acender';
    document.body.style.backgroundColor = 'black'; 
  }

  
  lampada.style.opacity = '0';


  setTimeout(function() {
    lampada.style.opacity = '1';
  }, 10);
});
