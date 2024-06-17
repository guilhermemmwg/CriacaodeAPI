const {Artista} = require('../models');

module.exports = class ArtistaController {
    static async buscarTodos(req, res) {
        try {
            const artistas_all = await Artista.findAll();
            res.status(200).json({data: artistas_all});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async buscarPorId(req, res) {
        try {
            const artista = await Artista.findByPk(req.params.id);
            res.status(200).json({artista});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async novoArtista(req, res) {
        try {
            const artista = await Artista.create({
                nome_artista: req.body.nome_artista,
                nascimento: req.body.nascimento 
            });
            res.status(200).json({data: "Artista criado"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async excluirArtista(req, res) {
        try {
            const artista = await Artista.findByPk(req.params.id);
            await artista.destroy();
            res.status(200).json({data: "Artista excluído"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async atualizarArtista(req, res) {
        try {
            const artista = await Artista.findByPk(req.params.id);
            const atualizado = await artista.update({
                nome_artista: req.body.nome_artista,
                nascimento: req.body.nascimento 
            })
            res.status(200).json({data: "Artista atualizado"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async musicasArtista(req, res) {
        try {
            const musicas = await Artista.findByPk(req.params.id, {
                include: 'musicas'
            })
            res.status(200).json({musicas})
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}