import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const comidas = [
  { nome: "Pizza Pepperoni", tipo: "Prato Principal", preco: 38.0, descricao: "Pizza com molho de tomate, queijo e pepperoni." },
  { nome: "Lasanha de Frango", tipo: "Prato Principal", preco: 36.0, descricao: "Lasanha com frango desfiado, molho branco e queijo." },
  { nome: "Hambúrguer de Carne", tipo: "Lanche", preco: 20.0, descricao: "Hambúrguer suculento com queijo, alface e tomate." },
  { nome: "Cachorro-quente Especial", tipo: "Lanche", preco: 12.0, descricao: "Pão com salsicha, queijo, milho e batata palha." },
  { nome: "Salada Grega", tipo: "Salada", preco: 18.0, descricao: "Alface, tomate, pepino, azeitonas e queijo feta." },
  { nome: "Risoto de Cogumelos", tipo: "Prato Principal", preco: 42.0, descricao: "Arroz arbóreo com cogumelos frescos e parmesão." },
  { nome: "Espaguete à Carbonara", tipo: "Prato Principal", preco: 40.0, descricao: "Massa com molho cremoso de ovos, queijo e bacon." },
  { nome: "Frango Grelhado", tipo: "Prato Principal", preco: 28.0, descricao: "Peito de frango temperado e grelhado, servido com legumes." },
  { nome: "Batata Frita", tipo: "Acompanhamento", preco: 10.0, descricao: "Porção de batatas fritas crocantes." },
  { nome: "Coxinha de Frango", tipo: "Salgado", preco: 6.0, descricao: "Salgado de massa recheado com frango desfiado." },
  { nome: "Pastel de Queijo", tipo: "Salgado", preco: 7.0, descricao: "Pastel frito recheado com queijo derretido." },
  { nome: "Bolo de Chocolate", tipo: "Sobremesa", preco: 15.0, descricao: "Bolo fofinho com cobertura de chocolate." },
  { nome: "Mousse de Maracujá", tipo: "Sobremesa", preco: 12.0, descricao: "Mousse aerado com sabor intenso de maracujá." },
  { nome: "Pudim de Leite", tipo: "Sobremesa", preco: 10.0, descricao: "Pudim cremoso com calda de caramelo." },
  { nome: "Suco de Laranja", tipo: "Bebida", preco: 7.0, descricao: "Suco natural de laranja, sem açúcar." },
  { nome: "Refrigerante Cola", tipo: "Bebida", preco: 6.0, descricao: "Lata de refrigerante de cola (350ml)." },
  { nome: "Água Mineral", tipo: "Bebida", preco: 4.0, descricao: "Garrafa de água mineral sem gás." },
  { nome: "Chá Gelado", tipo: "Bebida", preco: 5.0, descricao: "Chá preto gelado com limão e hortelã." },
  { nome: "Omelete Simples", tipo: "Prato Principal", preco: 16.0, descricao: "Omelete com ovos, queijo e temperos." },
  { nome: "Crepioca de Frango", tipo: "Prato Principal", preco: 14.0, descricao: "Massa de tapioca com frango desfiado e queijo." },
  { nome: "Espetinho de Carne", tipo: "Prato Principal", preco: 22.0, descricao: "Espetinhos de carne temperada grelhados." },
  { nome: "Filé de Peixe", tipo: "Prato Principal", preco: 35.0, descricao: "Filé de peixe grelhado com limão e ervas." },
  { nome: "Arroz à Grega", tipo: "Acompanhamento", preco: 12.0, descricao: "Arroz com legumes coloridos e temperos suaves." },
  { nome: "Feijão Tropeiro", tipo: "Acompanhamento", preco: 14.0, descricao: "Feijão misturado com farinha, bacon e temperos." },
  { nome: "Purê de Batata", tipo: "Acompanhamento", preco: 10.0, descricao: "Purê cremoso de batata com manteiga." },
  { nome: "Polenta Frita", tipo: "Acompanhamento", preco: 11.0, descricao: "Tiras de polenta frita crocantes." },
  { nome: "Espetinho de Frango", tipo: "Prato Principal", preco: 20.0, descricao: "Espetinhos de peito de frango temperados." },
  { nome: "Quiche de Alho-Poró", tipo: "Prato Principal", preco: 25.0, descricao: "Quiche cremosa de alho-poró e queijo." },
  { nome: "Wrap de Frango", tipo: "Lanche", preco: 18.0, descricao: "Tortilha recheada com frango, alface e molho." },
  { nome: "Hambúrguer Vegetariano", tipo: "Lanche", preco: 22.0, descricao: "Hambúrguer de grão de bico, queijo coalho e rúcula." },
  { nome: "Panqueca de Carne", tipo: "Prato Principal", preco: 28.0, descricao: "Panquecas recheadas com carne moída e molho." },
  { nome: "Torta de Frango", tipo: "Prato Principal", preco: 30.0, descricao: "Torta salgada recheada com frango desfiado." },
  { nome: "Sushi Combo", tipo: "Prato Principal", preco: 45.0, descricao: "Combo com 12 peças variadas de sushi." },
  { nome: "Yakissoba Tradicional", tipo: "Prato Principal", preco: 38.0, descricao: "Macarrão oriental com legumes e molho especial." },
  { nome: "Temaki de Salmão", tipo: "Prato Principal", preco: 25.0, descricao: "Cone de alga recheado com arroz e salmão." },
  { nome: "Coxinha de Queijo", tipo: "Salgado", preco: 6.5, descricao: "Salgado frito com massa de batata e queijo." },
  { nome: "Esfiha de Carne", tipo: "Salgado", preco: 7.0, descricao: "Massa aberta recheada com carne temperada." },
  { nome: "Churros com Doce de Leite", tipo: "Sobremesa", preco: 8.0, descricao: "Churros crocantes com recheio de doce de leite." },
  { nome: "Sorvete de Chocolate", tipo: "Sobremesa", preco: 9.0, descricao: "Sorvete cremoso sabor chocolate." },
  { nome: "Mousse de Chocolate", tipo: "Sobremesa", preco: 12.0, descricao: "Mousse aerado com chocolate meio amargo." },
  { nome: "Bolo de Cenoura", tipo: "Sobremesa", preco: 10.0, descricao: "Bolo fofinho de cenoura com cobertura de chocolate." },
  { nome: "Panqueca Doce", tipo: "Sobremesa", preco: 11.0, descricao: "Panqueca recheada com doce de leite e morango." },
  { nome: "Salada de Frutas", tipo: "Sobremesa", preco: 9.0, descricao: "Mix de frutas frescas da estação." },
  { nome: "Suco Detox", tipo: "Bebida", preco: 8.0, descricao: "Suco de frutas e verduras para desintoxicação." },
  { nome: "Limonada Suíça", tipo: "Bebida", preco: 7.5, descricao: "Limonada batida com leite condensado." },
  { nome: "Cerveja Pilsen", tipo: "Bebida", preco: 9.0, descricao: "Cerveja leve e refrescante." },
  { nome: "Vinho Branco", tipo: "Bebida", preco: 28.0, descricao: "Taça de vinho branco suave." },
  { nome: "Café Latte", tipo: "Bebida", preco: 6.5, descricao: "Café expresso com leite vaporizado." },
  { nome: "Torta de Limão", tipo: "Sobremesa", preco: 12.0, descricao: "Torta cremosa de limão com merengue." },
  { nome: "Brownie com Sorvete", tipo: "Sobremesa", preco: 15.0, descricao: "Brownie quente servido com sorvete de creme." }
];

async function main() {
    console.log('Iniciando o processo de seed...');

    // Limpa toda a tabela antes de inserir
    await prisma.comidas.deleteMany();
    console.log('Tabela comidas limpa.');

    // Insere os dados
    const result = await prisma.comidas.createMany({
        data: comidas,
        skipDuplicates: true, // ignora registros duplicados por nome, não por id
    });

    console.log(`Seed concluído! ${result.count} registros inseridos.`);
}

main()
    .catch((e) => {
        console.error("ERRO ao executar o Seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("Conexão com o Prisma fechada.");
    });