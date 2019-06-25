const Tweet = require('../models/Tweet');

module.exports = {
    //método para retornar todos os tweets(sem nenhum filtro) *ver documentação do mongoose para mais filtros
    async index(req, res){
        const tweets = await Tweet.find({}).sort("-createdAt");

        return res.json(tweets);
    },

    async store(req, res){
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};