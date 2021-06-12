CREATE TABLE IF NOT EXISTS Produto
( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    codigoProduto TEXT NOT NULL, 
    nome TEXT NOT NULL, 
    fabricacao TEXT NOT NULL, 
    tamanho TEXT NOT NULL, 
    valor FLOAT NOT NULL
);