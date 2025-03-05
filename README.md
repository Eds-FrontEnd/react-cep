# ⚡ Projeto - React CEP

## 🚀 Bem-vindo ao projeto React CEP!

Este projeto foi desenvolvido com:

- **🌐 REACT**
- **⚙️ NEXT.js**
- **🟦 TypeScript**
- **🎨 Tailwind CSS**
- **API Dinâmica**: Integração com a [Via Cep API](https://viacep.com.br/)

## 🚀 Sobre o projeto 
Este projeto tem como objetivo realizar consultas a CEPs e salvar essas informações para consultas futuras. Para otimizar a experiência do usuário e reduzir os acessos à API, utilizei o LocalStorage para armazenar os dados dos CEPs. Assim, mesmo após o usuário fechar o navegador, as informações permanecem salvas. Quando o CEP já estiver presente no LocalStorage, evitamos realizar uma nova requisição à API da ViaCEP, melhorando significativamente a performance da aplicação.

## Instruções para rodar o projeto

Antes de começar, certifique-se de ter o Node.js e o npm instalados em seu ambiente de desenvolvimento.

- Node.js: [Baixar Node.js](https://nodejs.org/)
- npm (gerenciador de pacotes do Node.js): Geralmente instalado junto com o Node.js

1. Navegue até a pasta web:

   ```bash
   cd react-cep-main
   ```

2. Instale as dependências necessárias do projeto utilizando npm:

   ```bash
   npm install
   ```

3. Iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Mais Detalhes sobre o Projeto

#### Função: Biblioteca Next para construir interfaces de usuário em JavaScript, permitindo a criação de componentes reutilizáveis.

#### Comando de Instalação para criar uma aplicação Next.js do zero:

```bash
npx create-next-app@latest --empty
```

## Bibliotecas utilizadas:

### 1. lucide-react

#### Função: Biblioteca de ícones para React, proporcionando ícones leves e personalizáveis.

#### Comando de Instalação:

```bash
npm install lucide-react
```

### 2. @biomejs/biome

#### Função: Ferramenta para formatação de código e linting, mantendo o código consistente e limpo.

#### Comando de Instalação:

```bash
npm install @biomejs/biome -D
```

&

```bash
npx @biomejs/biome init
```
##### E no arquivo settings.json coloca esses comandos:

```bash
{
    "[javascript]": {
        "editor.defaultFormatter": "biomejs.biome"
    },
    "[typescript]": {
        "editor.defaultFormatter": "biomejs.biome"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "biomejs.biome"
    },
    "editor.codeActionsOnSave": {
        "source.organizeImports.biome": "explicit"
    },
    "editor.formatOneSave": true
}

```

### 3. react-hook-form

#### Função: Biblioteca para gerenciar formulários em React de forma eficiente, com validação de dados.

#### Comando de Instalação:

```bash
npm install react-hook-form
```

### 4. zod & @hookform/resolvers

#### Função: Zod é uma biblioteca de validação de dados, enquanto @hookform/resolvers integra o Zod com o React Hook Form para validação no formulário.

#### Comando de Instalação:

```bash
npm install zod @hookform/resolvers
```

### 5. Axios

#### Função: Axios é uma biblioteca para fazer requisições HTTP de forma simples e eficiente em aplicações JavaScript/TypeScript. 

#### Comando de Instalação:

```bash
npm install @types/axios --save-dev

```

### 6. Toastify

#### Função: Exibir notificações (toast) de forma simples e personalizável em aplicações React. 

#### Comando de Instalação:

```bash
npm install react-toastify

```

### 7. tailwindcss

#### Função: Bibliotecas para configuração do Tailwind CSS com PostCSS, permitindo a criação de estilos utilitários e responsivos de maneira eficiente.

#### Comando de Instalação:

```bash
npm install tailwindcss @tailwindcss/postcss postcss

```

Este projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela e dispositivos e foi otimizado para alcançar a pontuação máxima no Google PageSpeed, garantindo excelente performance e experiência do usuário.

![Responsividade](./readme.png)
#### Vamos fazer algo extraordinário juntos? 🚀