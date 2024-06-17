const express = require('express');
const router = express.Router();
const ArtistaController = require("../controllers/artistaController")
const MusicasController = require("../controllers/musicasController")

router.get('/', (req, res) => {
    res.status(200).json({data: "Rota inicial"});
})

// buscar todos os artista
router.get("/artistas", ArtistaController.buscarTodos);

// adicionar novo artista
router.post("/artistas/novo", ArtistaController.novoArtista);

// buscar um artista por id
router.get("/artistas/:id", ArtistaController.buscarPorId);

// deletar artista
router.delete("/artistas/:id", ArtistaController.excluirArtista);

// atualizar artista
router.put("/artistas/:id", ArtistaController.atualizarArtista);

// musicas do artista
router.get("/artistas/:id/musicas", ArtistaController.musicasArtista);



// buscar todos os musica
router.get("/musicas", MusicasController.buscarTodos);

// adicionar novo musica
router.post("/musicas/novo", MusicasController.novaMusica);

// buscar um musica por id
router.get("/musicas/:id", MusicasController.buscarPorId);

// deletar musica
router.delete("/musicas/:id", MusicasController.excluirMusica);

// atualizar musica
router.put("/musicas/:id", MusicasController.atualizarMusica);

// artista da musica
router.get("/musicas/:id/artista", MusicasController.artistaMusica);

module.exports = router