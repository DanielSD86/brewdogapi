## Teste BrewDog

## Padrão autenticação
Envio via header atráves da chave "x-access-token".
> Exceto no acesso ao metodo "login"

## API v1

### Autenticação
  -URL: /v1/login
  -Método: POST
  -Body: Objeto de usuário
  -Resposta:
    -Status OK: 200 e token
	> Token a ser enviado nas solicitações via
    -Status N: Validar retorno de array de mensagens (message)

### Usuários
  -Consulta geral:
	-URL: /v1/usuarios
	-Método: GET
	-Resposta: Array de usuários
  -Consulta por ID:
	-URL: /v1/usuarios/<id>
	-Parâmetros: id = identificador único do usuário
	-Método: GET
	-Resposta: Objeto de usuários
  -Criação de usuários:
	-URL: /v1/usuarios
	-Método: POST
	-Body: Objeto de usuário
	-Resposta: 
	  -Status OK: 201 
	  -Status N: Validar retorno de array de mensagens (message)
  -Edição de usuários:
	-URL: /v1/usuarios/<id>
	-Parâmetros: id = identificador único do usuário
	-Método: PUT
	-Body: Objeto de usuário
	-Resposta: 
	  -Status OK: 200 
	  -Status N: Validar retorno de array de mensagens (message)
  -Inativação de usuários:
	-URL: /v1/usuarios/<id>
	-Parâmetros: id = identificador único do usuário
	-Método: DELETE
	-Resposta: 
	  -Status OK: 200 
	  -Status N: Validar retorno de array de mensagens (message)
	  
### Mercadorias
  -Consulta geral:
	-URL: /v1/mercadorias
	-Método: GET
	-Resposta: Array de mercadorias
	-Parâmetros (query):
	  -pagina: indica a pagina a ser retornada
	  -limite: indica o limite de registro por request
	  -filtro: indica um filtro por nome da mercadoria

