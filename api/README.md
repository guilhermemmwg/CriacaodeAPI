
# Api com Node

Esse projeto faz parte da atividade da discplina de web do professor Érico Borgonove, do curso de Análise e Desenvolvilmento de Sistemas da Esbam.

## Tabelas:

O projeto possui duas tabelas:

#### Artista: id: int, nome_artista: string, nascimento: dateonly

#### Musicas: id: int, nome_musica: string
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```
BANCO= o nome do banco de dados
HOST= o host do sistema
PORT= a porta da api
USUARIO_BANCO= usuário do banco de dados
SENHA_BANCO= senha do banco de dados
```


## Rotas da API

## Artistas

### Buscar Todos os Artistas
- **Rota:** `GET /artistas`
- **Descrição:** Retorna uma lista com todos os artistas cadastrados.
- **Controlador:** `ArtistaController.buscarTodos`

### Adicionar Novo Artista
- **Rota:** `POST /artistas/novo`
- **Descrição:** Adiciona um novo artista ao sistema.
- **Controlador:** `ArtistaController.novoArtista`

### Buscar Artista por ID
- **Rota:** `GET /artistas/:id`
- **Descrição:** Retorna os detalhes de um artista específico, identificado pelo seu ID.
- **Controlador:** `ArtistaController.buscarPorId`

### Deletar Artista
- **Rota:** `DELETE /artistas/:id`
- **Descrição:** Remove um artista do sistema, identificado pelo seu ID.
- **Controlador:** `ArtistaController.excluirArtista`

### Atualizar Artista
- **Rota:** `PUT /artistas/:id`
- **Descrição:** Atualiza as informações de um artista específico, identificado pelo seu ID.
- **Controlador:** `ArtistaController.atualizarArtista`

## Músicas

### Buscar Todas as Músicas
- **Rota:** `GET /musicas`
- **Descrição:** Retorna uma lista com todas as músicas cadastradas.
- **Controlador:** `MusicasController.buscarTodos`

### Adicionar Nova Música
- **Rota:** `POST /musicas/novo`
- **Descrição:** Adiciona uma nova música ao sistema.
- **Controlador:** `MusicasController.novaMusica`

### Buscar Música por ID
- **Rota:** `GET /musicas/:id`
- **Descrição:** Retorna os detalhes de uma música específica, identificada pelo seu ID.
- **Controlador:** `MusicasController.buscarPorId`

### Deletar Música
- **Rota:** `DELETE /musicas/:id`
- **Descrição:** Remove uma música do sistema, identificada pelo seu ID.
- **Controlador:** `MusicasController.excluirMusica`

### Atualizar Música
- **Rota:** `PUT /musicas/:id`
- **Descrição:** Atualiza as informações de uma música específica, identificada pelo seu ID.
- **Controlador:** `MusicasController.atualizarMusica`

---


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

