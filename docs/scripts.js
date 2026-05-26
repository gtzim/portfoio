'use strict';

// ELEMENTOS DA DOM

// Botão de alternância de tema claro/escuro
const botaoModo = document.getElementById("modoClaroEscuro");

// Área onde será exibido o resultado do quiz
const resultadoQuiz = document.getElementById("resultado-quiz");

// Botões do quiz de perfil
const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");

// Botões de tecnologias favoritas
const btnJava = document.getElementById("btn-java");
const btnPython = document.getElementById("btn-python");

// Área de resultado das tecnologias
const resultadoTech = document.getElementById("resultado-tech");

// Campo de busca de projetos
const inputBusca = document.getElementById("busca-projeto");


// INFORMAÇÕES PESSOAIS

// Nome exibido no portfólio
const meuNome = "Gustavo Henrique";

// Título profissional
const tituloProfissional = "Desenvolvedor de Sistemas";

// Pequena descrição pessoal
const minhaBio = "Estudante de Desenvolvimento de Sistemas, apaixonado por tecnologia e inovação, sempre em busca de aprender algo novo.";


// DATAS DO CURSO

// Data prevista para formatura
const dataFormatura = new Date(2026, 11, 31);

// Data atual
const hoje = new Date();


// PONTUAÇÃO DO QUIZ

// Pontos relacionados ao perfil Front-End
let pontosFront = 0;

// Pontos relacionados ao perfil Back-End
let pontosBack = 0;


// ==========================================
// LISTA DE PROJETOS
// ==========================================

// Array contendo os projetos cadastrados
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


// FUNÇÕES AUXILIARES

/**
 * Atualiza o texto de um elemento HTML pelo ID
 * 
 * @param {string} id - ID do elemento HTML
 * @param {string} texto - Texto que será exibido
 */
function atualizarTexto(id, texto) {

  // Busca o elemento na página
  const elemento = document.getElementById(id);

  // Verifica se o elemento existe
  if (elemento) {

    // Atualiza o conteúdo de texto
    elemento.innerText = texto;
  }
}


/**
 * Calcula o tempo restante até a formatura
 * 
 * @param {Date} dataFinal - Data final da formatura
 * @returns {Object} Objeto contendo anos, meses e dias restantes
 */
function calcularTempoRestante(dataFinal) {

  // Calcula diferença de anos
  let anos = dataFinal.getFullYear() - hoje.getFullYear();

  // Calcula diferença de meses
  let meses = dataFinal.getMonth() - hoje.getMonth();

  // Calcula diferença de dias
  let dias = dataFinal.getDate() - hoje.getDate();

  // Ajusta caso os meses sejam negativos
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Retorna os valores calculados
  return { anos, meses, dias };
}


/**
 * Exibe o tempo restante para a formatura
 */
function exibirTempoRestante() {

  // Desestrutura os valores retornados
  const { anos, meses, dias } = calcularTempoRestante(dataFormatura);

  // Verifica se o curso já foi concluído
  if (anos <= 0 && meses <= 0 && dias <= 0) {

    atualizarTexto("temporRestante", "Curso Concluído! 🎓");
    return;
  }

  // Exibe o tempo restante
  atualizarTexto(
    "temporRestante",
    `Tempo restante para formatura: ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`
  );
}


// FRASES MOTIVACIONAIS

// Lista de frases aleatórias
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


/**
 * Exibe uma frase aleatória na tela
 */
function mostrarFrase() {

  // Seleciona uma frase aleatória do array
  const frase =
    frases[Math.floor(Math.random() * frases.length)];

  // Exibe a frase no elemento HTML
  document.getElementById("frase").innerText = frase;
}

// Executa a função ao carregar a página
mostrarFrase();


// FUNÇÕES DO QUIZ

/**
 * Estiliza a área do resultado do quiz
 * 
 * @param {string} cor - Cor de fundo do resultado
 */
function estilizarResultadoQuiz(cor) {

  // Verifica se o elemento existe
  if (!resultadoQuiz) return;

  // Define cor de fundo
  resultadoQuiz.style.backgroundColor = cor;

  // Adiciona espaçamento interno
  resultadoQuiz.style.padding = "12px";

  // Arredonda as bordas
  resultadoQuiz.style.borderRadius = "8px";

  // Define margem superior
  resultadoQuiz.style.marginTop = "10px";

  // Define cor do texto
  resultadoQuiz.style.color = "#111111";
}


/**
 * Exibe o resultado do quiz
 * 
 * @param {string} tipo - Tipo de perfil
 */
function mostrarResultadoQuiz(tipo) {

  // Verifica se o elemento existe
  if (!resultadoQuiz) return;

  // Perfil Front-End
  if (tipo === "front") {

    resultadoQuiz.innerHTML =
      `<strong>🎨 Você tem perfil Front-End!</strong><br>Você curte interfaces e experiência visual.`;

  } else {

    // Perfil Back-End
    resultadoQuiz.innerHTML =
      `<strong>⚙️ Você tem perfil Back-End!</strong><br>Você curte lógica e resolução de problemas.`;
  }
}


/**
 * Exibe no console qual perfil predominou
 */
function exibirPerfil() {

  // Perfil Front-End
  if (pontosFront > pontosBack) {

    console.log("Perfil Predominante: Front-End");

  // Perfil Back-End
  } else if (pontosBack > pontosFront) {

    console.log("Perfil Predominante: Back-End");

  // Perfil equilibrado
  } else {

    console.log("Perfil Predominante: Full Stack");
  }
}


// HABILIDADES

/**
 * Lista habilidades na tela
 */
function listarHabilidades() {

  // Busca o container das habilidades
  const listaHabilidadesContainer =
    document.getElementById("lista-habilidades");

  // Verifica se o container existe
  if (!listaHabilidadesContainer) return;

  // Lista de habilidades
  const habilidades = [
    "Agilidade em pedidos",
    "Bom em comunicação",
    "Fácil em aprendizado",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JS"
  ];

  // Lista de Hard Skills
  const hardSkills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JS"
  ];

  // Limpa conteúdo antigo
  listaHabilidadesContainer.innerHTML = "";

  // Percorre todas as habilidades
  habilidades.forEach(habilidade => {

    // Verifica se é hard ou soft skill
    const tipo =
      hardSkills.includes(habilidade)
      ? "Hard Skill"
      : "Soft Skill";

    // Cria elemento HTML
    const p = document.createElement("p");

    // Define conteúdo do texto
    p.textContent =
      `🎯 ${habilidade} (${tipo})`;

    // Adiciona ao container
    listaHabilidadesContainer.appendChild(p);
  });
}


// PROJETOS

/**
 * Lista os projetos na tela
 * 
 * @param {Array} listaDeProjetos - Lista de projetos
 */
function listarProjetos(listaDeProjetos) {

  // Busca container dos projetos
  const container =
    document.getElementById("lista-projetos-container");

  // Verifica se o container existe
  if (!container) return;

  // Limpa conteúdo antigo
  container.innerHTML = "";

  // Percorre todos os projetos
  listaDeProjetos.forEach(projeto => {

    // Cria card do projeto
    const card = document.createElement("div");

    // Define classe CSS
    card.className = "projeto-card";

    // Estrutura HTML do card
    card.innerHTML = `
      <h3>💻 ${projeto.nome}</h3>

      <p>
        <strong>Tecnologias:</strong>
        ${projeto.tecnologias.join(", ")}
      </p>

      <p>
        <strong>Conhecimentos:</strong>
        ${projeto.conhecimentos}
      </p>

      <hr>
    `;

    // Adiciona card ao container
    container.appendChild(card);
  });
}


// EVENTOS DOS BOTÕES

// Evento do botão Java
if (btnJava) {

  btnJava.addEventListener("click", () => {

    resultadoTech.innerHTML =
      "<p>☕ <strong>Java:</strong> Muito foda, também gosto muito</p>";
  });
}


// Evento do botão Python
if (btnPython) {

  btnPython.addEventListener("click", () => {

    resultadoTech.innerHTML =
      "<p>🐍 <strong>Python:</strong> Ainda prefiro o Java</p>";
  });
}


// Evento do botão Front-End
if (btnVisual) {

  btnVisual.addEventListener("click", () => {

    // Soma ponto Front-End
    pontosFront++;

    // Mostra resultado
    mostrarResultadoQuiz("front");

    // Exibe perfil
    exibirPerfil();
  });
}


// Evento do botão Back-End
if (btnLogica) {

  btnLogica.addEventListener("click", () => {

    // Soma ponto Back-End
    pontosBack++;

    // Mostra resultado
    mostrarResultadoQuiz("back");

    // Exibe perfil
    exibirPerfil();
  });
}


// SISTEMA DE TEMA

// Busca botão de tema
const botaoTema =
  document.getElementById("toggle-theme");

// Verifica tema atual ao carregar
if (document.body.classList.contains("dark-mode")) {

  botaoTema.innerText = "Black";

} else {

  botaoTema.innerText = "Light";
}


// Evento de troca de tema
botaoTema.addEventListener("click", () => {

  // Alterna classe dark-mode
  document.body.classList.toggle("dark-mode");

  // Atualiza texto do botão
  if (document.body.classList.contains("dark-mode")) {

    botaoTema.innerText = "Black";

  } else {

    botaoTema.innerText = "Light";
  }
});


// BUSCA DE PROJETOS

// Verifica se o input existe
if (inputBusca) {

  // Evento de digitação
  inputBusca.addEventListener("input", (evento) => {

    // Texto digitado
    const termo =
      evento.target.value.toLowerCase();

    // Filtra projetos
    const projetosFiltrados =
      projetos.filter(projeto => {

        // Busca pelo nome
        const nomeMatch =
          projeto.nome.toLowerCase().includes(termo);

        // Busca pelas tecnologias
        const techMatch =
          projeto.tecnologias
            .join(" ")
            .toLowerCase()
            .includes(termo);

        // Retorna se encontrou
        return nomeMatch || techMatch;
      });

    // Exibe projetos filtrados
    listarProjetos(projetosFiltrados);
  });
}





// INICIALIZAÇÃO DA PÁGINA

// Atualiza nome
atualizarTexto("meuNome", meuNome);

// Atualiza título profissional
atualizarTexto(
  "tituloProfissional",
  tituloProfissional
);

// Atualiza bio
atualizarTexto("minhaBio", minhaBio);

// Atualiza previsão de formatura
atualizarTexto(
  "anoFormatura",
  `Previsão de Formatura: ${dataFormatura.toLocaleDateString('pt-BR')}`
);

// Exibe tempo restante
exibirTempoRestante();

// Lista habilidades
listarHabilidades();

// Lista projetos
listarProjetos(projetos);