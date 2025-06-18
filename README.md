
# Atividade 1 - Projeto PetLovers – Sistema CLI

---

## 🎯 Objetivo

Criar um sistema de linha de comando (CLI) para gerenciamento completo de pet shops e clínicas veterinárias, com foco em operações de cadastro, registro de consumo e geração de estatísticas.

---

## 🧰 Tecnologias Utilizadas

- **TypeScript** – linguagem principal do projeto
- **Node.js** – ambiente de execução
- **VSCode** – editor recomendado para desenvolvimento

---

## 🛠️ Funcionalidades

O sistema é executado via terminal e permite:

### 👥 Clientes
- CRUD (Create, Read, Update, Delete) de clientes
- Registro de informações: nome, nome social, CPF, RG e telefones

### 🐾 Pets
- Associação de múltiplos pets a cada cliente
- Informações registradas: nome, tipo, raça e gênero

### 🛍️ Produtos e Serviços
- Cadastro, edição, visualização e remoção de produtos e serviços

### 🧾 Registro de Consumo
- Registro de consumo de produtos e serviços por cliente

### 📊 Estatísticas
- Top 10 clientes que mais consumiram (quantidade)
- Top 5 clientes que mais consumiram (valor)
- Produtos e serviços mais consumidos no geral
- Produtos e serviços mais consumidos por **tipo e raça de pet**

---

## 🚀 Como Executar o Projeto

> Pré-requisitos: Node.js e TypeScript instalados

```bash
# Instale as dependências
npm install

# Compile o TypeScript
npx tsc

# Execute o sistema
node dist/app.js
```
---
