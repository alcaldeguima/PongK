
let colidiu = false;
//placar
let meusPontos = 0;
let pontosInimigo = 0;
//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 24;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//raquete
let xRaquete =5;
let yRaquete =150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
//inimigo
let xRaqueteInimigo = 585;
let yRaqueteInimigo = 150;
let raqueteComprimentoInimigo = 10;
let raqueteAlturaInimigo = 90;
let velocidadeYInimigo;
//sons
let trilha;
let ponto;
function preload(){
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("megalovania.mp3");
  raquetada = loadSound("raquetada.mp3");
}
  function setup() {
    createCanvas(600, 400); 
    trilha.loop();
    line(0, 60, 85, 5);
}
function draw() {
  background(50);
  mostraBolinha();
  movimentaBolinha(); 
  colisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteInimigo, yRaqueteInimigo);
  mostraRaquete(xRaqueteInimigo, yRaqueteInimigo);
  movimentaRaqueteInimigo();
  incluiPlacar();
  marcaPonto();
  movimentaRaqueteInimigo();
  raqueteLock();
  line(300, 30, 300, 400);
  line(300, 0, 300, 10)
}

function mostraBolinha(){
  circle (xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}
function colisaoBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
  }
  if(yBolinha +   raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y){
  rect (x, y, raqueteComprimento, raqueteAltura);
}
function movimentaRaqueteInimigo(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteInimigo -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteInimigo += 5;
  }

}
function colisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento,     raqueteAltura, xBolinha, yBolinha , raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
    meusPontos ++;
  }
}
/*function movimentaRaqueteInimigo(){
  velocidadeYInimigo = yBolinha - yRaqueteInimigo - raqueteComprimento /2 -30;
  yRaqueteInimigo += velocidadeYInimigo;
}*/
function incluiPlacar(){
  stroke(0,255,255);
  fill(138,43,226);
  textSize(15);
  textAlign(CENTER);
  rect(280, 10, 40, 20);
  fill(0,255,255);
  text(meusPontos, 280, 13, 44, 20);
}
function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos *= 0;
      ponto.play();
    }
    if (xBolinha < 10) {
        meusPontos *= 0;
      ponto.play();
    }
}
function movimentaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}
function raqueteLock(){
  if(yRaquete<0){
    yRaquete +=10;
  }
  if(yRaquete>325){
    yRaquete -=10;
  }
  if(yRaqueteInimigo<0){
    yRaqueteInimigo +=10;
  }
  if(yRaqueteInimigo>325){
    yRaqueteInimigo -=10;
  }
  
}

