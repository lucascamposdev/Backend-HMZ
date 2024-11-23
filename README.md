# Backend HMZ
<hr>

# Desafio

> O teste consiste na criação de um servidor onde o usuário administrador possa realizar o login e o controle de seus usuários; buscar, editar e excluir.

# Tecnologias utilizadas
- NodeJs w/ Express
- Typescript
- Prisma
- JWT
- MySql
- Docker

# Como executar o projeto

```bash
# clonar repositório
git clone https://github.com/lucascamposdev/Backend-HMZ

# executar na raíz do projeto
docker compose up --build

# API poderá ser acessada em:
http://localhost:3000
```

## Endpoints

``` 
* Admin Account: lucas@email.com 123456 
```

- Login
```
POST /auth/login

{
	"email": "lucas@email.com",
	"password": "123456"
}
```

<hr>

- List Users
```
GET /users?page=1&per_page=5
```

<hr>

- Find User By Id
```
GET /users/1
```

<hr>

- Update User By Id
```
PUT /users/1

{
	"email": "lucas@email.com",
	"firstName": "Lucas",
	"lastName": "Campos",
	"password": "123456"
}
```

<hr>

- Delete User By Id
```
DELETE /users/2
```

<hr>

# Autor

Lucas Campos <br/>
https://www.linkedin.com/in/lucascamposdev/


