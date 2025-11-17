# Desafio Front-End - Cadastro de Produtos

Sistema de cadastro e gerenciamento de produtos desenvolvido com **React**, **TypeScript**, **Material-UI** e **Vite**.

## 📋 Sobre o Projeto

Aplicação front-end completa que permite:
- ✅ Registro e autenticação de usuários
- ✅ Login com JWT
- ✅ CRUD de produtos (Criar, Listar, Editar, Excluir)
- ✅ Máscara de preço em formato BRL (R$)
- ✅ Tema claro/escuro
- ✅ Rotas protegidas (autenticação obrigatória)
- ✅ Navegação com React Router
- ✅ Design responsivo com Material-UI

## 🏗️ Arquitetura

O projeto segue uma arquitetura limpa inspirada no MVVM:

```
src/
├── api/              # Configuração do cliente HTTP e endpoints
├── core/             # Lógica de negócio
│   ├── auth/         # Contexto de autenticação
│   ├── models/       # Interfaces e tipos (Product, User)
│   ├── utils/        # Utilitários (storage, validação, máscaras)
│   └── viewmodels/   # Lógica de apresentação (hooks)
├── ui/
│   ├── components/   # Componentes reutilizáveis
│   ├── layout/       # Layouts (PrivateLayout, etc.)
│   ├── pages/        # Páginas da aplicação
│   ├── routes/       # Definição de rotas
│   ├── styles/       # Estilos globais
│   └── theme/        # Configuração do tema MUI
└── lib/              # Bibliotecas auxiliares
```

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** v9+ (vem com Node.js)
- **Git** ([Download](https://git-scm.com/))

Para verificar as versões instaladas:
```bash
node --version
npm --version
```

## 📦 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/imarmendes/desafioFrontZz.git
cd desafioFrontZz
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Porta local do frontend (padrão: 5173)
VITE_PORT=5173

# URL do backend (API)
VITE_API_URL=http://localhost:3000
```

**⚠️ Importante:**
- Se o backend estiver rodando em outra porta, atualize `VITE_API_URL`.
- Variáveis no Vite **devem** começar com `VITE_` para serem expostas ao navegador.

### 4. Configure a URL da API (alternativa)

Se preferir configurar diretamente no código, edite `src/api/apiClient.ts`:

```typescript
const BASE_URL = "http://localhost:3000/api"; // 👈 altere aqui
```

## ▶️ Executando o Projeto

### Modo de desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em:
- **Frontend:** http://localhost:5173
- **Proxy API:** http://localhost:5173/api (redireciona para o backend)

### Build para produção
```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`.

### Pré-visualizar build
```bash
npm run preview
```

### Linter
```bash
npm run lint
```

## 🔧 Configurações Importantes

### Porta do Frontend

Por padrão, o frontend roda na porta **5173**. Para alterar:

**Opção 1: Via `.env`**
```env
VITE_PORT=3001
```

**Opção 2: Via `vite.config.ts`**
```typescript
export default defineConfig({
  server: {
    port: 3001, // 👈 altere aqui
  }
})
```

### URL do Backend

**Opção 1: Via `.env` (recomendado)**
```env
VITE_API_URL=http://localhost:3000
```

**Opção 2: Via `src/api/apiClient.ts`**
```typescript
const BASE_URL = "http://localhost:3000/api";
```

### Proxy (desenvolvimento)

O `vite.config.ts` configura um proxy para evitar problemas de CORS:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
}
```

Isso faz com que chamadas para `/api/...` sejam redirecionadas para `http://localhost:3000/api/...`.

## 🧩 Endpoints da API

O frontend espera que o backend exponha os seguintes endpoints:

### Autenticação
- `POST /api/auth/login` → Login (retorna `{ token, user: { id, name, email } }`)
- `POST /api/auth/register` → Registro de usuário

### Produtos
- `GET /api/products` → Listar produtos
- `GET /api/products/:id` → Buscar produto por ID
- `POST /api/products` → Criar produto (`{ name, price, description }`)
- `PUT /api/products/:id` → Atualizar produto
- `DELETE /api/products/:id` → Excluir produto

**Autenticação:** Todas as rotas de produtos requerem header `Authorization: Bearer <token>`.

## 🎨 Funcionalidades

### Autenticação
- **Registro:** `/register` - Cria uma nova conta
- **Login:** `/login` - Autentica e salva JWT no localStorage
- **Logout:** Botão no navbar limpa sessão
- **Rotas Protegidas:** Redireciona para login se não autenticado

### Produtos
- **Listar:** `/products` - Exibe todos os produtos
- **Criar:** `/products/new` - Formulário para novo produto
- **Editar:** `/products/edit/:id` - Formulário pré-preenchido
- **Excluir:** Botão de deletar na lista
- **Máscara BRL:** Campo de preço formatado automaticamente (R$ 1.234,56)

### Tema
- Botão no navbar alterna entre tema claro e escuro
- Preferência salva no localStorage

## 📂 Estrutura de Dados

### User
```typescript
{
  id: string;
  name: string;
  email: string;
  token: string;
}
```

### Product
```typescript
{
  id: string;
  name: string;
  price: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
```

## 🐛 Troubleshooting

### Erro de conexão com backend
- ✅ Verifique se o backend está rodando
- ✅ Confirme a URL em `.env` ou `apiClient.ts`
- ✅ Verifique o console do navegador para erros de CORS

### Erro 401 (Unauthorized)
- ✅ Faça login novamente (token pode estar expirado)
- ✅ Verifique se o backend está validando o JWT corretamente

### Porta já em uso
```bash
Error: Port 5173 is already in use
```
- ✅ Altere a porta no `.env` ou `vite.config.ts`
- ✅ Ou mate o processo: `npx kill-port 5173`

### Dependências não instaladas
```bash
npm install
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Material-UI (MUI)** - Componentes e design system
- **React Router** - Roteamento
- **Axios** - Cliente HTTP
- **ESLint** - Linter

## 📝 Scripts Disponíveis

| Comando           | Descrição                              |
|-------------------|----------------------------------------|
| `npm run dev`     | Inicia servidor de desenvolvimento     |
| `npm run build`   | Gera build de produção                 |
| `npm run preview` | Pré-visualiza build localmente         |
| `npm run lint`    | Executa linter (ESLint)                |

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Imar Mendes**
- GitHub: [@imarmendes](https://github.com/imarmendes)

---

⭐ Se este projeto foi útil, considere dar uma estrela no repositório!

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
