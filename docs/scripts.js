'use strict';

// Elements da DOM
const botaoModo = document.getElementById("modoClaroEscuro");
const resultadoQuiz = document.getElementById("resultado-quiz");
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const btnJava = document.getElementById("btn-java");
const btnPython = document.getElementById("btn-python");
const resultadoTech = document.getElementById("resultado-tech");
const inputBusca = document.getElementById("busca-projeto");

// Informações Pessoais
const meuNome = "Gustavo Henrique";
const tituloProfissional = "Desenvolvedor de Sistemas";
const minhaBio = "Estudante de Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação, sempre em busca de aprender algo novo.";

// Datas do Curso
const dataFormatura = new Date(2026, 11, 31); 
const hoje = new Date();

// Pontuação do Quiz
let pontosFront = 0;
let pontosBack = 0;

// Lista de Projetos Estáticos
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



// ==========================================
// --- Funções Auxiliares e Lógica de Interface ---
// ==========================================

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
//API frases do dia
const frases = [
  "Todo erro é uma oportunidade de aprender.",
  "Programar é transformar café em código.",
  "Seu código não precisa ser perfeito, só precisa funcionar primeiro.",
  "Debugging é como ser detetive em um filme criminal onde você também é o culpado.",
  "A prática diária vale mais que horas de teoria.",
  "Grandes desenvolvedores também começaram sem saber nada.",
  "Cada linha de código é um passo para evoluir.",
  "Não tenha medo de errar, tenha medo de não tentar.",
  "O código mais difícil é aquele que você nunca começou.",
  "Programação é resolver problemas, não decorar sintaxe.",
  "Consistência vence talento.",
  "Todo programador já quebrou algo antes de aprender a construir.",
  "Aprender programação é aprender a pensar diferente.",
  "Seu futuro pode começar com uma única ideia e algumas linhas de código.",
  "A melhor forma de aprender programação é programando."
];

function mostrarFrase() {
  const frase =
    frases[Math.floor(Math.random() * frases.length)];

  document.getElementById("frase").innerText = frase;
}

mostrarFrase();
function estilizarResultadoQuiz(cor) {
  if (!resultadoQuiz) return;
  // Correção: a variável 'cor' passada como parâmetro estava sendo chamada como 'color'
  resultadoQuiz.style.backgroundColor = cor; 
  resultadoQuiz.style.padding = "12px";
  resultadoQuiz.style.borderRadius = "8px";
  resultadoQuiz.style.marginTop = "10px";
  resultadoQuiz.style.color = "#111111"; 
}

function mostrarResultadoQuiz(tipo) {
  if (!resultadoQuiz) return;
  if (tipo === "front") {
    resultadoQuiz.innerHTML = `<strong>🎨 Você tem perfil Front-End!</strong><br>Você curte interfaces e experiência visual.`;
  } else {
    resultadoQuiz.innerHTML = `<strong>⚙️ Você tem perfil Back-End!</strong><br>Você curte lógica e resolução de problemas.`;
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


// --- Event Listeners ---

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

const botaoTema = document.getElementById("toggle-theme");

if (document.body.classList.contains("dark-mode")) {
    botaoTema.innerText = "Black";
} else {
    botaoTema.innerText = "Light";
}

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoTema.innerText = "Black";
    } else {
        botaoTema.innerText = "Light";
    }

});

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

{
  "scripts"; {
    "start"; "node server.js"
  }
}
// --- Inicialização da Página ---

atualizarTexto("meuNome", meuNome);
atualizarTexto("tituloProfissional", tituloProfissional);
atualizarTexto("minhaBio", minhaBio);
atualizarTexto("anoFormatura", `Previsão de Formatura: ${dataFormatura.toLocaleDateString('pt-BR')}`);

exibirTempoRestante();
listarHabilidades();
listarProjetos(projetos);