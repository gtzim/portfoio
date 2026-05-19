'use strict';

const botaoModo = document.getElementById("modoClaroEscuro");
const resultadoQuiz = document.getElementById("resultado-quiz");
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const btnJava = document.getElementById("btn-java");
const btnPython = document.getElementById("btn-python");
const resultadoTech = document.getElementById("resultado-tech");

const meuNome = "Gustavo Henrique";
const tituloProfissional = "Desenvolvedor de Sistemas";
const minhaBio = "Estudante de Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação, sempre em busca de aprender algo novo.";

const dataFormatura = new Date(2026, 11, 31); 
const hoje = new Date();

let pontosFront = 0;
let pontosBack = 0;

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

function atualizarTexto(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.innerText = texto;
  }
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
  const { anos, meses, dias } = calcularTempoRestante(dataFormatura);

  if (anos <= 0 && meses <= 0 && dias <= 0) {
    atualizarTexto("temporRestante", "Curso Concluído! 🎓");
    return;
  }

  atualizarTexto(
    "temporRestante",
    `Tempo restante para formatura: ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`
  );
}

function estilizarResultadoQuiz(cor) {
  resultadoQuiz.style.backgroundColor = cor;
  resultadoQuiz.style.padding = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop = "10px";
  resultadoQuiz.style.color = "#111111"; 
}

function mostrarResultadoQuiz(tipo) {
  if (tipo === "front") {
    resultadoQuiz.innerHTML = `<strong>🎨 Você tem perfil Front-End!</strong><br>Você curte interfaces e experiência visual.`;
    estilizarResultadoQuiz("#e8f4fd");
  } else {
    resultadoQuiz.innerHTML = `<strong>⚙️ Você tem perfil Back-End!</strong><br>Você curte lógica e resolução de problemas.`;
    estilizarResultadoQuiz("#d1f2e1");
  }
}

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    console.log("Perfil Predominante: Front-End");
  } else if (pontosBack > pontosFront) {
    console.log("Perfil Predominante: Back-End");
  } else {
    console.log("Perfil Predominante: Full Stack");
  }
}

function listarHabilidades() {
  const listaHabilidadesContainer = document.getElementById("lista-habilidades");
  if (!listaHabilidadesContainer) return;

  const habilidades = [
    "Agilidade em pedidos", "Bom em comunicação", "Fácil em aprendizado",
    "Java", "Python", "HTML", "CSS", "JS"
  ];
  const hardSkills = ["Java", "Python", "HTML", "CSS", "JS"];

  listaHabilidadesContainer.innerHTML = "";

  habilidades.forEach(habilidade => {
    const tipo = hardSkills.includes(habilidade) ? "Hard Skill" : "Soft Skill";
    const p = document.createElement("p");
    p.textContent = `🎯 ${habilidade} (${tipo})`;
    listaHabilidadesContainer.appendChild(p); 
  });
}

function listarProjetos(listaDeProjetos) {
  const container = document.getElementById("lista-projetos-container");
  if (!container) return;

  container.innerHTML = "";

  listaDeProjetos.forEach(projeto => {
    const card = document.createElement("div");
    card.className = "projeto-card";
    card.innerHTML = `
      <h3>💻 ${projeto.nome}</h3>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologias.join(", ")}</p>
      <p><strong>Conhecimentos:</strong> ${projeto.conhecimentos}</p>
      <hr>
    `;
    container.appendChild(card); 
  });
}

if (btnJava) {
  btnJava.addEventListener("click", () => {
    resultadoTech.innerHTML = "<p>☕ <strong>Java:</strong> Muito foda, também gosto muito</p>";
  });
}

if (btnPython) {
  btnPython.addEventListener("click", () => {
    resultadoTech.innerHTML = "<p>🐍 <strong>Python:</strong> Ainda prefiro o Java</p>";
  });
}

if (btnVisual) {
  btnVisual.addEventListener("click", () => {
    pontosFront++;
    mostrarResultadoQuiz("front");
    exibirPerfil();
  });
}

if (btnLogica) {
  btnLogica.addEventListener("click", () => {
    pontosBack++;
    mostrarResultadoQuiz("back");
    exibirPerfil();
  });
}

if (botaoModo) {
  botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

const inputBusca = document.getElementById("busca-projeto");
if (inputBusca) {
  inputBusca.addEventListener("input", (evento) => {
    const termo = evento.target.value.toLowerCase();
    const projetosFiltrados = projetos.filter(projeto => {
      const nomeMatch = projeto.nome.toLowerCase().includes(termo);
      const techMatch = projeto.tecnologias.join(" ").toLowerCase().includes(termo);
      return nomeMatch || techMatch;
    });
    listarProjetos(projetosFiltrados);
  });
}

atualizarTexto("meuNome", meuNome);
atualizarTexto("tituloProfissional", tituloProfissional);
atualizarTexto("minhaBio", minhaBio);
atualizarTexto("anoFormatura", `Previsão de Formatura: ${dataFormatura.toLocaleDateString('pt-BR')}`);

exibirTempoRestante();
listarHabilidades();
listarProjetos(projetos);