# SISTEMA DE MODULOS

    A organizacao de aplicoes em js, difere da forma em que vamos utilizar a aplicacao, ou seja a forma de organizarmos na web vai ser diferente da forma de organizar para server
    lembre-se que o Browser so entende JS

    Dentro de node, um arquivo representa um modulo

    VAMOS CRIAR UM NOVO ARQUIVO CHAMADO moduloA.js

    Perceba que organizamos nossa aplicacao em node, usando pastas (diretorios) e arquivos sendo que cada arquivo representa um modulo

    Lembre-se sempre: *EM NODE UM ARQUIVO REPRESENTA UM MODULO

    O modulo significa, que ele n deixa disponivel no global. para que consigamos colocar o que é escrito num modulo publico precisamos exportar (baseado no commons.js)
    Ou seja para colocar pra fora do codigo precisamos exportar e para trazer pra dentro precisamos importar.
    No caso o modo mais conhecido de exportar mdulos é usando o padrao commons.js

    Vamos ao conteudo. Lembre-se , neste capitulo veremos padroes de projetos mais complexos, ou seja teremos o padrao se sempre ter algum arquivo terminado cm Client. neste caso sempre que terminar em client significa que este arquivo esta importando modulos

# USANDO MÓDULOS DE TERCEIROS

    Nesta aula vamos ver como pegar modulos de terceiros e usar dentro do nosso sistema.
    vamos rodar os comandos de importacao direto do terminal. as linhas a seguir serao digitadas no terminal

    node -v  (comando para ver a versao do node)
    npm -v (junto ao node vem o npm, o npm é o gerenciador de pacotes do node, por ele fazemos as instalacoes de pacotes por exemplo)

    <-- Comandos para importacao no terminal -->
        
        npm i lodash 

    <-- Perceba que ao rodarmos o comando de instalacao de pacotes citado acima, apareceram duas areas novas dentro do diretorio de conteudo das aulas de node, no caso o node_modules e dentro dele veremos que esta instalado apenas o lodash e suas dependencias (NUNCA MANDE O NODE_MODULES PARA O REPOSITORIO NO GITHUB USE O GITIGNORE) -->

    <-- Beleza! acabamos de instalar o lodash e a pasta node_modules foi criada!  agora vamos criar o novo arquivo chamado usndoModulosTerceiros.js (vamos pra lá!) -->

# SISTEMA DE MÓDULOS: REQUIRE

    Ainda falando sobre o sistema de modulos de node, vamos focar em Require. vamos criar duas pastas dentro do diretorio node vamos ate la...
    Perceba que cada pasta é um diretorio 

# SISTEMA DE MÓDULOS: EXPORT

    Agora vamos ver algumas observacoes sobre o modulo export. vamos ao arquivo exportar.js...
    Perceba que tudo que é exportado a partir de um modulo é o module.exports. usar apenas exports ou this é apenas uma forma de referenciar o objeto apontado por module.exportes...

# ARQUIVO package.json

    Nesta aula vamos ver o arquivo descritor de porjeos em node, o chamado package.json
    vamos criar dentro da pasta node uma nova pasta, simbolizando um novo projeto. 
    vamos acessar o terminal e ir pra dentro da pasta criada

    existe um comando chamado npm init, este comando habilita um wizard para definicao do projeto

    usando o npm init, temos varias perguntas a serem respondidas sobre a estrutura do projeto.

    usando o npm init -y, ele responde todas as perguntas e cria o arquivo de projeto automaticamente!
 
    Ainda dentro do terminal, podemos instalar dependecias de terceiros, usando o npm i <nome da dependencia> (Obs a pasta node_modules vai ser criada no diretorio em que vc roda o comando npm i)

        NESTE PONTO ENTENDEMOS PARA QUE SERVE O package.json.. ELE SERVE LITERALMENTE PARA DESCREVER SEU PROJETO, OU SEJA, QUAIS AS DEPENDENCIAS QUE PRECISAM SER BAIXADAS E COMO FUNCIONA!

    vamos agora ver como instalar uma nova dependencia e salvar no package...

        npm i --save  //o save salva dentro do package

            vamos iniciar instalando o axios (observe o aarquivo package.json, veja que o axios vai aparecer descrito, tal como a sua versao!)

            "dependencies": {
                "axios": "^0.21.1"
            } 
                    //perceba que existe um caractere antes da versao (^) isso quer dizer que ele vai atualizar a versao do meio! Perceba que a versao é separada em 3 blocos, 0 . 21 . 1, no caso o numero do meio podera ser atualizado quando o simbolo (^) estiver presente na frente da dependencia.

                    //Tambem podera acontecer casos em que antes da versao tera o simbolo (~) que quer dizer aproximacao, isso quer dizer que vc pode pegar apenas versoes onde o fix (ultimo numero) podera ser atualizado...

                    //Deixando apenas a versao, sem nenhum simbolo dizemos que queremos apenas aquela determinada versao...

                        podemos tambem baixar uma  vesao fixa em modo de teste usando o comando...

                            npm install --save-dev axios@0.17.1 -E (neste caso estalariamos o axios em modo de desenvolvimento e perceba que quando executarmos ele criaria um novo campo chamado devdependencies)

        OBS - PERCEBA QUE DENTRO DE funcionarios FOI CRIDA TBM UM ARQUIVO CHAMADO package-lock.json ESSE ARQUIVO TORNA AS DEPENDENCIAS MAIS SEGURAS, POIS ELE NAO DEIXA QUE BAIXEMOS DEPENDENCIAS DE OUTRAS VERSOES, ESSE ARQUIVO DEVE IR PRO GIT. NO CASO ELE SO VAI DEIXAR BAIXAR AS VERSOES QUE TESTAMOS EM NOSSAS MAQUINAS!


    a pasta vai ser chaamda de funcionarios... vamos ate la!