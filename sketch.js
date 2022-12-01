//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha/2;

//velocidade da bolinha
let velocidadeXBolinha = 1;
let velocidadeYBolinha = 1;

//dimensões da requete
let raqueteComprimento = 10;
let raqueteAltura = 80;

//raquete jogador
let xRaquete = 5;
let yRaquete = 150;

//variaveis do oponente (NPC)
let xRaqueteNPC = 585;
let yRaqueteNPC = 150;
let velocidadeYNPC;

//biblioteca
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;


function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteNPC, yRaqueteNPC);
  movimentoRaquete();
  //movimentoRaquete2J();
  //verificaColisaoRaquete(xRaquete,yRaquete);
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteNPC, yRaqueteNPC);
  movimentoRaqueteNPC();
  placar();
  marcarPonto();
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametroBolinha);}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;}  
    if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;}
}

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura)
}

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;}
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;}
}

function verificaColisaoRaquete(){
  if (xBolinha - raioBolinha < xRaquete + raqueteComprimento 
    && yBolinha - raioBolinha < yRaquete + raqueteAltura
     && yBolinha + raioBolinha > yRaquete)
      {velocidadeXBolinha *= -1;}
}

function movimentoRaqueteNPC(){
  velocidadeYNPC = yBolinha - yRaqueteNPC - raqueteComprimento / 2 - 70;
  yRaqueteNPC += velocidadeYNPC
}

function colisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raioBolinha)
  if(colidiu){velocidadeXBolinha *= -1
             raquetada.play()}
}

function placar(){
  textSize(16)
  textAlign(CENTER)
  stroke (255)
  
  fill(255,140,0)
  rect(150,10,40,20)
  rect(410,10,40,20)
  
  fill(255)
  text(meusPontos, 170, 26)
  text(pontosOponente, 430, 26)  
}

function marcarPonto(){
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play()}
   if(xBolinha < 10){
    pontosOponente += 1
    ponto.play()}  
}

function movimentoRaquete2J(){
  if(keyIsDown(87)){
    yRaqueteNPC -= 10;}
  if(keyIsDown(83)){
    yRaqueteNPC += 10;}
}

function bolinhaNaoFicaPresa(){
    if (XBola - raio < 0){
      XBola = 23
    }
    if (XBola + raio > 600){
      XBola = 580
    }
}

