# Projeto Full Stack Week 2.0 💻

Este é o repositório oficial do e-commerce desenvolvido durante a Full Stack Week, um evento diferente de tudo que você já viu, com 4 lives de muito conteúdo. Nosso objetivo principal é criar um projeto altamente relevante, utilizando as tecnologias mais modernas e demandadas pelo mercado, a fim de adicionar autoridade ao currículo de desenvolvedor.

## Tecnologias Utilizadas 🚀

- **React**: Uma biblioteca JavaScript popular para construir interfaces de usuário interativas.

- **Next.js 13**: Um framework React que oferece renderização do lado do servidor (SSR), geração estática (SSG), entre muitos outros recursos.

- **Next Auth**: Biblioteca para autenticação de usuários com OAuth.

- **Postgres**: Um sistema de gerenciamento de banco de dados relacional.

- **Prisma**: Um ORM (Object-Relational Mapping) para Node.js e TypeScript.

- **shadcn/ui**: Uma biblioteca de componentes de IU reutilizáveis e estilizáveis.

- **Tailwind CSS**: Um framework CSS que oferece várias classes para utilização já pré-estilizadas.

- **API do Stripe**: Uma API de pagamento popular para processar pagamentos online de forma segura.

## Funcionalidades 📦

- **Login com o Google**: Permitimos que os usuários façam login usando suas contas do Google para uma experiência de autenticação simplificada.

- **Navegação por Categorias**: Os usuários podem explorar produtos por categorias, facilitando a busca e a compra.

- **Descontos em Produtos**: Alguns produtos podem ter descontos especiais, permitindo aos usuários economizar em suas compras.

- **Gerenciamento do Carrinho de Compras**: Os usuários podem adicionar produtos ao seu carrinho de compras, remover produtos e também modificar a quantidade de um produto no carrinho de compras conforme necessário.

- **Pagamento do Pedido com a API do Stripe**: Oferecemos uma experiência segura de pagamento online com a integração da API do Stripe, incluindo o uso de webhooks para processar eventos relacionados ao pagamento. Os usuários podem concluir seus pedidos com facilidade e segurança.

## Protótipo no Figma 🎨

Você pode visualizar o protótipo do nosso projeto no Figma. Ele oferece uma prévia visual de como a interface do usuário é projetada e como as diferentes funcionalidades são organizadas. Confira o protótipo [aqui](https://www.figma.com/file/Y8jmabSZXxAobeUJQdI4bm/FSW-Store-%5BLive%5D?type=design&mode=design&t=JoIB87O9jkqADxpN-1).

Fique à vontade para explorar e compartilhar suas opiniões sobre o design do projeto!

## Contribuições e Colaborações 🤝

Este projeto está totalmente aberto a contribuições. Se você deseja colaborar, fique à vontade para criar pull requests, corrigir bugs, adicionar novos recursos ou aprimorar a documentação. Sua contribuição é valiosa e ajuda a melhorar ainda mais este projeto!

### Como Contribuir

1. Faça um fork deste repositório.

2. Crie uma branch para sua contribuição:

```bash
    git checkout -b minha-contribuicao
```

3. Faça suas alterações e adicione commits descritivos (seguindo o Conventional Commits, preferencialmente).

4. Crie um pull request para a branch `main` deste repositório.

## Execução do projeto

Clone o projeto e acesse a pasta do mesmo.

```bash
git clone https://github.com/felipemotarocha/fullstackweek-store.git
cd fullstackweek-store
```

Renomeie o arquivo **.env.example** para **.env** e preencha os valores das variáveis.

**DATABASE_URL:** Variavel contendo a string de conexão do seu banco de dados (No projeto foi utilizado o banco Postresql com o serviço [Supabase](https://supabase.com/)).

**GOOGLE_CLIENT_ID** e **GOOGLE_CLIENT_SECRET:** Para essas variáveis é necessário a criação de um projeto no [Google Developer Console](https://console.cloud.google.com/)

**STRIPE_SECRET_KEY:** Inserir o valor da secret key da conta no [Stripe](https://stripe.com/br)

**STRIPE_WEBHOOK_SECRET_KEY:** Rodar o comando npm run stripe:listen e pegar a key no output (Your webhook signing secret is...). Não fechar o terminal.

**HOST_URL:** Em ambiente local pode ser utilizado o valor "http://localhost:3000"

Para iniciar o projeto, siga os passos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

### Deploy na Vercel

Em ambiente de produção também é necessário o preenchimento das variáveis de ambiente, porém existem algumas diferenças com relação ao ambiente de desenvolvimento.

**NEXT_PUBLIC_STRIPE_PUBLIC_KEY:** Chave pública de API encontrada no dashboard da sua conta do [Stripe](https://stripe.com/br)

**NEXTAUTH_SECRET:** Secret utilizado para autenticação pelo NextAuth

**HOST_URL:** Alterar para a URL do seu website em produção.

**STRIPE_WEBHOOK_SECRET_KEY:** Valor encontrado no Endpoint criado dentro do Stripe. ([Referência](https://github.com/felipemotarocha/fullstackweek-store/issues/9))
