const express = require('express');
const knex = require('./database');


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    knex('users').then(results => {
        res.json(results);
    })
});

app.post("/create", async (req, res) => {
    let {first_name, last_name} = req.body;
    await knex('users').insert({
        first_name, 
        last_name
    });
    res.redirect('/');
});

app.listen(3333);

/* 

    Primeiramente, usamos o comando knex init no terminal para criar o knexfile
    como eu, especificamente, tenho o knex instalado globalmente foi literalmente
    só rodar esse comando. Caso você não tenha a dependência instalada globalmente
    basta rodar o npx knex init.  

    Segundo, dentro do knexfile preenchemos o objeto (deixamos apenas a parte de 
    desenvolvimento) e acrescentamos o objeto migrations e depois rodamos o comando
    knex migrate:make _nome_ - mesmo esquema do primeiro passo, se o knex não estiver instalado globamente é só rodar o comando com npx na frente. Vale lembrar que antes 
    de configurar o objeto devemos criar o database onde as tables ficarão. 

    terceiro, no arquivo criado no path database/migrations preenchemos o schema com os 
    campos desejados (vale a pena dar uma olhada na documentação do knex) e então rodamos 
    knex migrate:latest. 

    Quarto, dentro da pasta database criamos o arquivo index.js que é onde configuramos o 
    knex e o exportamos. Algo parecido com o connection do sequelize. 

    quinto, de volta ao knexfile acrescentamos um novo objeto - seed - que é basicamente um
    arquivos onde podemos predefinir algumas usuários. Rodamos o knex seed:make _nome_. 

    Sexto, dentro da arquivo da seed presetamos um usuário e rodamos knex seed:run

    Sétimo, e com isso criamos essas rotas
    
*/ 