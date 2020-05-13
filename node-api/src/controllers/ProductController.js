const mongoose = require('mongoose');
// importa o model Product
const Product = mongoose.model('Product');

// index faz uma listagem de todos os dados de registros dentro do DB
module.exports = {
    async index(req, res) {
        // desestruturação para pegar a page dos param da url com default = 1
        const { page = 1 } = req.query;

        // busca todos os produtos
        // const products = await Product.find();

        // busca os produtos com page inicial e limit 10 por página
        // no primeiro {} pode ser colocado where por exemplo
        // utilizando short syntax não precisa page: page
        const products = await Product.paginate({}, { page, limit: 10 });

        // com await essa linha abaixo só será executada após a busca no DB
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {
        // Criação passando o body
        const product = await Product.create(req.body);
        // retorna o produto que acabou de ser criado no DB
        return res.json(product);
    },

    async update(req, res) {
        // busca o produto e o atualiza com o conteúdo que vem no body com método PUT
        // { new: true } retorna o produto atualizado para a const product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async destroy(req, res) {
        // só busca o produto pelo id e o deleta
        await Product.findByIdAndRemove(req.params.id);
        // resposta com o status code
        return res.send();
    }
}