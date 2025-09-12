const input = document.getElementById('commandInput');
const output = document.getElementById('output');

const files = {
  'sobre.txt': `
┌───────────────────────────────────────────────┐
│                👨‍💻 SOBRE MIM                   │
├───────────────────────────────────────────────┤
│ Sou um desenvolvedor apaixonado por tecnologia│
│ e inovação, com foco em criar soluções        │
│ eficientes e impactantes. Tenho experiência em│
│ desenvolvimento web e integração de sistemas, │
│ sempre buscando aprimorar minhas habilidades  │
│ e acompanhar as tendências do setor.          │
│                                               │
│ Gosto de trabalhar em equipe, compartilhar    │
│ conhecimento e transformar ideias em projetos │
│ reais que façam a diferença.                  │
└───────────────────────────────────────────────┘
`,
  'habilidades.txt': `
┌───────────────────────────────────────────────────────────────┐
│                       🧠 HABILIDADES                          │
├───────────────────────────────────────────────────────────────┤
│ 💻 LINGUAGENS                                                 │
│   [PY ] Python          ▰▰▰▰▰▰▰▰▱▱  80%                       │
│   [JS ] JavaScript     ▰▰▰▰▰▰▰▱▱▱  60%                        │
│   [TS ] TypeScript      ▰▰▰▰▰▰▱▱▱▱  60%                       │
│   [SQL] SQL              ▰▰▰▰▰▰▰▰▱▱  80%                      │
│   [WEB] HTML / CSS       ▰▰▰▰▰▰▰▰▰▱  90%                      |
│                                                               │
│ ⚡ FRAMEWORKS & FERRAMENTAS                                   │
│   [PBI] PowerBi/Looker  ▰▰▰▰▰▰▰▰▱▱  80%                       │
│   [🟢 ] Node.js           ▰▰▰▰▰▰▱▱▱▱  60%                     │
│   [🐳 ] Docker             ▰▰▰▰▰▰▰▱▱▱  70%                    │
│   [⚙ ] Git / GitHub       ▰▰▰▰▰▰▰▰▱▱  80%                     │
└───────────────────────────────────────────────────────────────┘

`,
  'projetos.txt': `
┌───────────────────────────────────────────────────────────────┐
│                     📁 MEUS PROJETOS                          │
├───────────────────────────────────────────────────────────────┤
│ [01] 💸 Pivete Finanças                                       │
│      Sistema web para controle de finanças pessoais,          │
│      com dashboard interativo, gráficos dinâmicos e           │
│      autenticação segura.                                     │
│      └─ Tecnologias: React, Node.js, Tailwind, Supabase       │
│                                                               │
│ [02] 📂 Code Ink Chronicles                                   │
│      Portfólio interativo estilo terminal, com comandos       │
│      simulados, animações em tempo real e design futurista.   │
│      └─ Tecnologias: React, TypeScript, Framer Motion         │
│                                                               │
│ [03] 🧠 DevNotes                                              │
│      Plataforma colaborativa para anotações técnicas,         │
│      snippets de código e estudos compartilhados.             │
│      └─ Tecnologias: Next.js, Firebase, TailwindCSS           │
│                                                               │
│ [04] ⚙️ TaskForge                                             │
│      Gerenciador de tarefas minimalista com foco em           │
│      produtividade e UX limpa e responsiva.                   │
│      └─ Tecnologias: Vue.js, Node.js, MongoDB                 │
└───────────────────────────────────────────────────────────────┘
`,
  'contato.txt': `
📬 CONTATO
- GitHub: github.com/rafaeumesmo
- LinkedIn: linkedin.com/in/rafaeumesmo
`,
  'imagens.txt': `
🖼 IMAGENS
- cat soh funciona para arquivos de texto  :(
- Veja as imagens no meu GitHub: github.com/rafaeumesmo
`
};



const commands = {
  help: `
Comandos disponíveis:
- ls ................ lista arquivos disponíveis
- cat <arquivo> ...... abre um arquivo
- clear ............... limpa a tela
  `
};

function print(text, cls = '') {
  const line = document.createElement('div');
  if (cls) line.classList.add(cls);
  line.innerHTML = text; // <-- importante
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function handleCommand(cmd) {
  if (!cmd) return;
  print(`rafael@localhost:~$ ${cmd}`, 'prompt-line');

  if (cmd === 'clear') {
    output.innerHTML = '';
    return;
  }
  if (cmd === 'ls') {
    print(Object.keys(files).join('    '));
    return;
  }
  if (cmd.startsWith('cat ')) {
    const file = cmd.split(' ')[1];
    if (files[file]) {
      print(files[file]);
    } else {
      print(`Arquivo não encontrado: ${file}`);
    }
    return;
  }
  if (commands[cmd]) {
    print(commands[cmd]);
    return;
  }

  print(`Comando não reconhecido: ${cmd}`);
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleCommand(input.value.trim());
    input.value = '';
  }
});

