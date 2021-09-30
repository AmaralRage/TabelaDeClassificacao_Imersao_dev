//  chave. valor.
var amaral = {
  nome: "Amaral",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var Wellerson = {
  nome: "Wellerson",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var Joseph = {
  nome: "Joseph",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var Robson = {
  nome: "Robson",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

console.log(amaral);
var resultadoDosPontos = calculaPontos(amaral);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

amaral.pontos = calculaPontos(amaral);
Wellerson.pontos = calculaPontos(Wellerson);
Joseph.pontos = calculaPontos(Joseph);
Robson.pontos = calculaPontos(Robson);

var jogadores = [amaral, Wellerson, Joseph, Robson];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
