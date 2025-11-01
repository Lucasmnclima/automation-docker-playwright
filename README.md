# 🧪 Automação Docker Playwright

[![Playwright Tests CI](https://github.com/<Lucasmnclima>/automation-docker-playwright/actions/workflows/ci-playwright.yml/badge.svg)](https://github.com/<Lucasmnclima>/automation-docker-playwright/actions/workflows/ci-playwright.yml)

Ambiente completo de automação de testes **end-to-end (E2E)** utilizando **Playwright**, **Docker** e **GitHub Actions**.  
Ideal para rodar testes automatizados de forma **isolada**, **reprodutível** e **totalmente integrada ao CI/CD**.

---

## 🚀 Tecnologias utilizadas

- [Playwright](https://playwright.dev/) — Framework de testes E2E moderno
- [Docker](https://www.docker.com/) — Containerização do ambiente de testes
- [Node.js 20+](https://nodejs.org/) — Plataforma base para execução dos testes
- [GitHub Actions](https://github.com/features/actions) — Pipeline CI/CD automatizado

---


## 🧱 Estrutura do projeto
```
automacao-docker-playwright/
├── .github/
│ └── workflows/
│ └── ci-playwright.yml # Pipeline CI/CD do GitHub Actions
├── tests/
│ ├── checkoutone.spec.js # Teste de checkout
│ ├── login.spec.js # Teste de login
│ ├── register.spec.js # Teste de registro
├── pages/
│ ├── CheckoutOnePage.js # Page Object do checkout
│ ├── LoginPage.js # Page Object do login
│ ├── RegisterPage.js # Page Object do registro
├── utils/
│ └── fakeData.js # Geração de dados fake com Faker.js
├── playwright.config.js # Configuração global do Playwright
├── Dockerfile # Ambiente isolado para execução dos testes
├── package.json # Dependências e scripts NPM
└── README.md # Este arquivo 😄
```

---

## 🐳 Executando via Docker

### 🔹 1. Build da imagem
```
bash
docker build -t playwright-tests .
```

🔹 2. Rodar os testes dentro do container
```
bash
docker run --rm -v "$(pwd)":/app -w /app playwright-tests npx playwright test
```

📁 Após a execução, o relatório em HTML será gerado automaticamente em:
```
bash
playwright-report/index.html
```

Você pode abrir localmente com:
```
bash
npx playwright show-report
```
