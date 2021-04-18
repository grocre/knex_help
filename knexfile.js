module.exports = {

  development: {
    client: 'pg', //cliente que vai nos comunicar com o database
    connection: {
      database: "test", //nome do database
      user: "postgres", //nome do user - no postgres esse é o user standart
      password: "senha", //senha do postgres
      port: "5432" //Usamos o docker e essa era a porta do container
    },
    migrations: {
      tableName: 'migrations',
      directory: `${__dirname}/src/database/migrations` //caminho do arquivo que vai ser criado
    }, 
    seeds: {
      directory: `${__dirname}/src/database/seeds` //caminho da seed que será criada
    }
  }
};