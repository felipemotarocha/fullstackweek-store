# Guia Prático de Git no FSC Labs (Usando Forks)

## 1. Antes de Começar a Tarefa

### Atualize sua cópia local do projeto:

Certifique-se de que seu fork esteja sincronizado com o repositório original:

1. Busque as atualizações do repositório original:

   ```bash
   git fetch upstream
   ```

2. Atualize o branch `main` local com o conteúdo do repositório original:

   ```bash
   git checkout main
   git merge upstream/main
   ```

3. Envie as alterações sincronizadas para o seu fork:
   ```bash
   git push origin main
   ```

### Crie uma branch para sua tarefa:

```bash
git checkout -b feat/add-delete-product-button
```

### Padrões de nomes de branch:

- **`feat/`** para novas funcionalidades.
- **`fix/`** para correções de bugs.
- **`chore/`** para configurações ou ajustes não relacionados ao código principal.

> **Nota:** Sempre trabalhe em uma branch separada. Nunca edite diretamente o branch `main`.

---

## 2. Durante o Desenvolvimento

### Adicione as mudanças ao controle de versão:

```bash
git add .
```

### Faça commits descritivos seguindo o padrão **Conventional Commits**:

```bash
git commit -m "feat: add delete product button"
```

---

## 3. Finalizando a Tarefa

### Sincronize sua branch com o branch principal do repositório original:

1. Busque as atualizações do repositório original:

   ```bash
   git fetch upstream
   ```

2. Mescle o branch `main` do repositório original na sua branch local:
   ```bash
   git merge upstream/main
   ```

### Envie sua branch para o seu fork:

```bash
git push origin feat/add-delete-product-button
```

### Abra um Pull Request (PR) para o repositório original e descreva:

- **O que foi feito.**
- **O motivo da mudança.**
- **Qualquer detalhe técnico relevante.**

> **Dica:** Certifique-se de que seu PR está apontando para o branch correto do repositório original.
