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
docker build -t playwright-tests .
```

🔹 2. Rodar os testes dentro do container
```
docker run --rm -v "$(pwd)":/app -w /app playwright-tests npx playwright test
```

📁 Após a execução, o relatório em HTML será gerado automaticamente em:
```
playwright-report/index.html
```

Você pode abrir localmente com:
```
npx playwright show-report
```

☁️ Execução automática no GitHub Actions

A pipeline é executada automaticamente a cada push ou pull request na branch main.

📊 Relatório

O relatório HTML é disponibilizado como artefato na aba Actions → Workflow → Artifacts → playwright-html-report.

🧩 Scripts úteis
# Executar todos os testes
```
npx playwright test
```

# Executar um teste específico
```
npx playwright test tests/login.spec.js
```

# Abrir o relatório HTML localmente
```
npx playwright show-report
```

🧠 Dica extra

Caso queira debugar visualmente dentro do container (modo interativo com VNC):
```
docker run -p 7900:7900 playwright-tests
```

Depois acesse no navegador:

http://localhost:7900

👨‍💻 Autor

Lucas Marcio Nascimento Costa Lima  

Analista de Testes • Automação com JavaScript, Playwright, Cypress e Docker  
📍 Belo Horizonte - MG  
📧 lucasmnclima@gmail.com  

🔗 [!LinkedIn](https://www.linkedin.com/in/lucasmnclima/)
