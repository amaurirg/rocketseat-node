// importa mongoose
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// tabela DB
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    // preenche automaticamente com a data atual
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Para paginação
ProductSchema.plugin(mongoosePaginate);

// registra o model na aplicação
mongoose.model('Product', ProductSchema);

// no arquivo server.js, abaixo da conexão com o DB precisa informar o require