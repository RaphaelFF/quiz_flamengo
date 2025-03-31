# Quiz do Mengão

O **Quiz do Mengão** é um aplicativo interativo desenvolvido para testar o conhecimento dos torcedores sobre o Clube de Regatas do Flamengo. O projeto foi estruturado utilizando a metodologia **Scrum**, com foco em entregas incrementais e feedback contínuo.

Este projeto foi desenvolvido como parte da disciplina **Tópicos em Engenharia de Software**, com o objetivo de aplicar conceitos de desenvolvimento ágil, integração com backend e boas práticas de engenharia de software.

---

## 📋 Objetivos Principais

- Criar um quiz dinâmico com perguntas sobre história, jogadores e títulos do Flamengo.
- Fornecer feedback visual imediato (respostas corretas/incorretas).
- Implementar um painel administrativo para gerenciamento de perguntas.
- Garantir uma experiência imersiva com identidade visual do clube (vermelho, preto e branco).

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: React Native (Expo)
- **Backend**: Supabase (banco de dados)
- **Painel Administrativo**: Python (Streamlit)
- **Gestão**: Trello (tarefas) e GitHub (versionamento)

---

## 📋 Funcionalidades

- Sistema de perguntas e respostas.
- Feedback imediato para respostas corretas e incorretas.
- Barra de progresso para acompanhar o avanço no quiz.
- Exibição da pontuação final ao término do quiz.
- Botão para reiniciar o quiz.
- Painel administrativo para gerenciar perguntas (adicionar, editar e excluir).
- Interface estilizada com as cores e identidade visual do Flamengo.

---

## 🛠️ Como Rodar o Projeto

### 1. Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão LTS recomendada: 18.x ou 20.x)
- **npm** ou **yarn**
- **Expo CLI** (instalado globalmente ou via `npx`)

### 2. Clone o repositório
### 2. Clone o repositório
```bash
git clone https://github.com/seu-usuario/quiz_flamengo.git
```

### 3. Instale as Dependências
```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento
```bash
npx expo start
```

### 5. Teste no dispositivo ou emulador
Escaneie o QR Code no terminal com o aplicativo Expo Go (disponível na Play Store ou App Store).
Ou use um emulador Android/iOS configurado.

OBS: 

🗂️ Banco de Dados
O projeto utiliza o Supabase para gerenciar as perguntas do quiz. Certifique-se de configurar as variáveis de ambiente no arquivo **perguntasService.ts**
- **const supabaseUrl** = 'https://sua-url.supabase.co';
- **const supabaseKey** = 'sua-chave-publica';

