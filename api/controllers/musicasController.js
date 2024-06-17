const {Musicas} = require('../models');

module.exports = class MusicasController {
    static async buscarTodos(req, res) {
        try {
            const musicas_all = await Musicas.findAll();
            res.status(200).json({data: musicas_all});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async buscarPorId(req, res) {
        try {
            const musicas = await Musicas.findByPk(req.params.id);
            res.status(200).json({musicas});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async novaMusica(req, res) {
        try {
            const musica = await Musicas.create({
                nome_musica: req.body.nome_musica,
                artistaId: req.body.artistaId
            });
            res.status(200).json({data: "Musica criada"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async excluirMusica(req, res) {
        try {
            const musica = await Musicas.findByPk(req.params.id);
            await musica.destroy();
            res.status(200).json({data: "Musica excluída"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async atualizarMusica(req, res) {
        try {
            const musicas = await Musicas.findByPk(req.params.id);
            const atualizado = await musicas.update({
                nome_musica: req.body.nome_musica
            })
            res.status(200).json({data: "Musica atualizada"});
        } catch(e) {
            res.status(500).json({error: e.message});
        }
    }

    static async artistaMusica(req, res) {
        try {
            const artista = await Musicas.findByPk(req.params.id, {
                include: 'artista'
            });
            res.status(200).json({artista});
        } catch(e) {
            res.status(500).json({error: e.message})
        }
    }
}