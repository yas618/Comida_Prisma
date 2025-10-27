import * as comidaModel from './../models/comidaModel.js'

export const listarTodos = async (req, res) => {
    try {
        const comidas = await comidaModel.listarTodos();


    if (!comidas || comidas.length === 0) {
        res.status(404).json({
            total: comidas.length,
            mensagem: 'Comidas não encontradas',
            comidas
        });
    }

    res.status(200).json({
        total: comidas.length,
        mensagem: 'Lista de comidas',
        comidas
    });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await comidaModel.listarUm(id);

        if (!comida) {
            return res.status(404).json({
                erro: 'Comida não encontrada',
                mensagem: 'Verifique se o id do comida existe',
                id: id
            });
        }

        res.status(200).json({
            mensagem: 'Comida encontrada',
            comida
        });

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar comida por id',
            detalhes: error.message
        });
    }
};

export const criar = async (req, res) => {
    try {
        const { nome, descricao, preco, } = req.body;

        // Validação automática de campos obrigatórios
        const camposObrigatorios = ['nome', 'descricao', 'preco'];

        const faltando = camposObrigatorios.filter(campo => !data[campo]);

        if (faltando.length > 0) {
        return res.status(400).json({
            erro: "Os seguintes campos são obrigatórios: ${faltando.join(', ')}."
        });
        }

        const comidaValidas = ['Entrada', 'Principal', 'Sobremesa', 'Bebida'];
        if (!comidaValidas.includes(comida)) {
        return res.status(400).json({
            erro: 'Tipo de comida inválido!',
            comidaValidas
        });
        }

        const novaComida = await comidaModel.criar(req.body)

        res.status(201).json({
            message:'Comida criado com sucesso!',
            comida: novaComida
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar Comida',
            detalhes: error.message
        })
    }
}

export const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        //Verificar se o id existe, ou seja se tem comida com esse id
        const comidaExiste = await comidaModel.encontreUm(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não encontrado com esse id',
                id: id
            })
        }

        await comidaModel.deletar(id);

        res.status(200).json({
            mensagem: 'Comida apagada com sucesso!',
            comidaRemovido: comidaExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar comida!',
            detalhes: error.message
        })
    }

}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        //Verificar se a comida existe
        const comidaExiste = await comidaModel.encontreUm(id);

        if (!comidaExiste) {
            return res.status(404).json({
                erro: 'Comida não existe!',
                id: id
            })
        }

        // Validar se a comida é válida
        const comidaValidas = ['Entrada', 'Principal', 'Sobremesa', 'Bebida'];
        if (!comidaValidas.includes(dados.comida)) {
        return res.status(400).json({
            erro: '',
            comidaValidas
        });
        }

        const comidaAtualizada = await comidaModel.atualizar(id, dados);

        res.status(200).json({
        mensagem: 'Comida atualizado com sucesso!',
        comida: comidaAtualizada
        });


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar comida',
            detalhes: error.message
        })
    }
}