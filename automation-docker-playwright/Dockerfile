# Etapa 1 — usar imagem oficial do Playwright já com browsers
FROM mcr.microsoft.com/playwright:v1.56.1-jammy

# Define o fuso horário para o Brasil (horário de Brasília)
ENV TZ=America/Sao_Paulo

# Evita prompts interativos durante o build
ARG DEBIAN_FRONTEND=noninteractive

# Etapa 2 — instalar servidor VNC e utilitários gráficos
RUN apt-get update && apt-get install -y \
    x11vnc xvfb fluxbox websockify \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Etapa 3 — definir diretório de trabalho
WORKDIR /app

# Etapa 4 — copiar apenas arquivos de dependência primeiro (melhor cache)
COPY package*.json ./

# Etapa 5 — instalar dependências (modo CI)
RUN npm ci

# Etapa 6 — copiar o restante dos arquivos do projeto
COPY . .

# Etapa 7 — expor porta do VNC (interface web via noVNC)
EXPOSE 7900

# Etapa 8 — definir variáveis para o ambiente gráfico
ENV DISPLAY=:99
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

# Etapa 9 — comando padrão: iniciar o ambiente gráfico e abrir o Playwright UI
CMD ["bash", "-c", "Xvfb :99 -screen 0 1280x1024x16 & fluxbox & x11vnc -forever -usepw -create -display :99 -rfbport 5900 & websockify --web=/usr/share/novnc/ 7900 localhost:5900 & npx playwright test --ui"]
