# Tesla Clone

Landing page inspirada na experiência visual da Tesla, construída com React, TypeScript e Vite. A interface apresenta os modelos em seções de tela cheia, com navegação por scroll snap e conteúdo sobreposto animado conforme a rolagem.

> Este projeto é uma implementação educacional e não possui vínculo oficial com a Tesla.

## Funcionalidades

- Seções de tela cheia para Model S, Model 3, Model X e Model Y.
- Rolagem vertical com `scroll-snap`.
- Transição de opacidade dos conteúdos baseada na posição da página.
- Cabeçalho fixo e responsivo.
- Rodapé revelado ao final da rolagem.
- Layout adaptado para dispositivos móveis e desktop.
- Manifesto web e ícones para instalação como aplicação.

Os botões “Configurar”, “Ver disponibilidade”, o menu e os itens da navegação são elementos visuais e ainda não executam ações.

## Tecnologias

- [React](https://react.dev/) — construção da interface.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática.
- [Vite](https://vite.dev/) — servidor de desenvolvimento e build.
- [Styled Components](https://styled-components.com/) — estilos componentizados.
- [Framer Motion](https://motion.dev/) — valores e transições vinculados ao scroll.

## Requisitos

- Node.js 20.19 ou superior.
- npm compatível com a versão instalada do Node.js.

## Instalação

Clone o repositório, entre no diretório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd youtube-clone-tesla
npm install
```

## Execução

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em `http://localhost:5173`.

Para criar e visualizar o build de produção:

```bash
npm run build
npm run preview
```

O build é gerado em `dist/`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm start` | Alias para iniciar o servidor de desenvolvimento. |
| `npm run build` | Verifica os tipos com TypeScript e gera o build de produção. |
| `npm run preview` | Serve localmente o conteúdo gerado em `dist/`. |

## Estrutura do projeto

```text
.
├── public/
│   ├── images/cars/       # Imagens utilizadas nas seções
│   └── manifest.json      # Metadados da aplicação web
├── src/
│   ├── components/
│   │   ├── DefaultOverlayContent/ # Conteúdo padrão de cada veículo
│   │   ├── Model/                 # Registro, seções e animações dos modelos
│   │   ├── Page/                  # Dados e composição da página
│   │   └── UniqueOverlay/         # Cabeçalho e rodapé compartilhados
│   ├── styles/             # Estilos globais
│   ├── App.tsx             # Componente raiz
│   └── index.tsx           # Entrada da aplicação React
├── index.html              # Entrada HTML do Vite
├── tsconfig.json           # Configuração do TypeScript
└── vite.config.ts          # Configuração do Vite
```

## Arquitetura e fluxo de rolagem

O componente `Page` contém a lista de veículos e cria uma `ModelSection` para cada item. Cada seção registra seu nome, conteúdo e referência DOM no `ModelsContext`.

O `ModelsWrapper` concentra três responsabilidades:

1. mantém a referência do contêiner que recebe a rolagem;
2. armazena os modelos registrados pelas seções;
3. renderiza um `ModelOverlay` para cada modelo.

O hook `useWrapperScroll` converte a posição de rolagem do contêiner em valores reativos do Framer Motion. Cada `ModelOverlay` compara essa posição com as dimensões de sua seção e calcula sua opacidade. Assim, o conteúdo aparece ao entrar na seção e desaparece ao sair, enquanto as imagens permanecem no fluxo normal da página.

O `UniqueOverlay` permanece acima das seções e contém o cabeçalho global. Seu rodapé usa o progresso total do scroll e aparece nos últimos 10% da página.

## Adicionando um modelo

Os dados dos veículos ficam no array `models`, em `src/components/Page/index.tsx`. Adicione a imagem em `public/images/cars/` e inclua um novo objeto:

```tsx
{
  modelName: "Novo Modelo",
  eyebrow: "Categoria ou destaque",
  description: "Descrição curta do veículo.",
  image: "/images/cars/novo-modelo.jpg",
  imagePosition: "center 55%",
  specs: ["Primeira especificação", "Segunda especificação"]
}
```

O `modelName` deve ser único, pois ele identifica o modelo dentro do contexto. O campo `imagePosition` aceita qualquer valor válido para a propriedade CSS `background-position`.

Se o novo modelo também precisar aparecer no cabeçalho, atualize os itens de `Navigation` em `src/components/UniqueOverlay/index.tsx`.

## Personalização

- Conteúdo e veículos: `src/components/Page/index.tsx`.
- Cores e estilos globais: `src/styles/GlobalStyles.ts`.
- Aparência das seções: `src/components/Model/ModelSection/styles.ts`.
- Textos e botões: `src/components/DefaultOverlayContent/`.
- Cabeçalho, logo e rodapé: `src/components/UniqueOverlay/`.
- Curva de entrada e saída do overlay: intervalos de `useTransform` em `src/components/Model/ModelOverlay/index.tsx`.

Arquivos colocados em `public/` são servidos diretamente pela raiz. Por exemplo, `public/images/cars/model-s.jpg` é referenciado como `/images/cars/model-s.jpg`.

## Qualidade e validação

O comando de build executa `tsc --noEmit` antes do Vite. Isso impede a geração do pacote quando há erros de TypeScript:

```bash
npm run build
```

O projeto ainda não possui suíte automatizada de testes nem configuração de lint. Para evoluções futuras, Vitest, Testing Library e ESLint podem ser adicionados sem depender do antigo Create React App.

## Observações de acessibilidade

O cabeçalho fornece rótulos para a navegação, o logotipo e o botão de menu, e os botões possuem estilo de foco visível. Ao implementar as ações atualmente visuais, preserve a navegação por teclado e utilize links ou botões conforme a semântica da ação.
