'use strict';

const botaoModo = document.getElementById("modoClaroEscuro");
const resultadoQuiz = document.getElementById("resultado-quiz");

const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");

const meuNome = "Gustavo Henrique";
const tituloProfissional = "Desenvolvedor de Sistemas";

const minhaBio =
  "Estudante de Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação, sempre em busca de aprender algo novo.";

const dataFormatura = new Date(2026, 11, 31); // mês começa em 0
const hoje = new Date();

let pontosFront = 0;
let pontosBack = 0;

function atualizarTexto(id, texto) {
  document.getElementById(id).innerText = texto;
}

function calcularTempoRestante(dataFinal) {

  let anos = dataFinal.getFullYear() - hoje.getFullYear();
  let meses = dataFinal.getMonth() - hoje.getMonth();
  let dias = dataFinal.getDate() - hoje.getDate();

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  return { anos, meses, dias };
}

function exibirTempoRestante() {

  const { anos, meses, dias } =
    calcularTempoRestante(dataFormatura);

  if (anos <= 0 && meses <= 0 && dias <= 0) {
    atualizarTexto("temporRestante", "Curso Concluído");
    return;
  }

  atualizarTexto(
    "temporRestante",
    `Tempo restante para formatura: ${anos} ano(s)`
  );
}

function obterDiaSemana() {

  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  return diasSemana[hoje.getDay()];
}

/**
 * Configura aparência do resultado do quiz
 */
function estilizarResultadoQuiz(cor) {

  resultadoQuiz.style.backgroundColor = cor;
  resultadoQuiz.style.padding = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop = "10px";
}

/**
 * Exibe resultado do quiz
 */
function mostrarResultadoQuiz(tipo) {

  if (tipo === "front") {

    resultadoQuiz.innerHTML = `
      <strong>🎨 Você tem perfil Front-End!</strong><br>
      Você curte interfaces e experiência visual.
    `;

    estilizarResultadoQuiz("#e8f4fd");

  } else {

    resultadoQuiz.innerHTML = `
      <strong>⚙️ Você tem perfil Back-End!</strong><br>
      Você curte lógica e resolução de problemas.
    `;

    estilizarResultadoQuiz("#33b172");
  }
}

function exibirPerfil() {

  if (pontosFront > pontosBack) {
    console.log("Perfil Front-End");
  }

  else if (pontosBack > pontosFront) {
    console.log("Perfil Back-End");
  }

  else {
    console.log("Perfil Full Stack");
  }
}

/**
 * Lista habilidades separando hard e soft skills
 */
function listarHabilidades() {

  const habilidades = [
    "Agilidade em pedidos",
    "Bom em comunicação",
    "Facil em aprendizado",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JS"
  ];

  const hardSkills = ["Java", "Python", "HTML", "CSS", "JS"];

  habilidades.forEach(habilidade => {

    const tipo =
      hardSkills.includes(habilidade)
        ? "Hard Skill"
        : "Soft Skill";

    const p = document.createElement("p");

    p.textContent = `${habilidade}: ${tipo}`;

    document.body.appendChild(p);
  });
}

function listarProjetos() {

  const projetos = [
    {
      nome: "Aplicação de Estacionamento",
      tecnologias: ["Python", "Tkinter", "fpdf"],
      conhecimentos: "VSCode, GitHub, pip, PyInstaller"
    },
    {
      nome: "Aplicação de Caixa Eletrônico",
      tecnologias: ["Java", "SQL"],
      conhecimentos: "IntelliJ, SQLite, GitHub"
    }
  ];

  projetos.forEach(projeto => {

    const container = document.createElement("div");

    container.innerHTML = `
      <h2>${projeto.nome}</h2>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
      <p><strong>Conhecimentos:</strong> ${projeto.conhecimentos}</p>
    `;

    document.body.appendChild(container);
  });
}


btnVisual.addEventListener("click", () => {

  pontosFront++;

  mostrarResultadoQuiz("front");
  exibirPerfil();
});

btnLogica.addEventListener("click", () => {

  pontosBack++;

  mostrarResultadoQuiz("back");
  exibirPerfil();
});

atualizarTexto("meuNome", meuNome);
atualizarTexto("tituloProfissional", tituloProfissional);
atualizarTexto("minhaBio", minhaBio);

exibirTempoRestante();

console.log("Dia atual:", obterDiaSemana());

listarHabilidades();
listarProjetos();