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

# INSTANCIA UNICA VS NOVA INSTANCIA

    vamos agora ver como o node faz cash de modulos que sao importados a partir do require. vamos usar uma funcao factory para que possamos sempre que importar um modulo um novo objeto seja criado,... entao vamos ao arquivo instanciaUnica.js

# OBJETO GLOBAL DO NODE

    Assim como no browser, existe o objeto global chamado window, no node tambem temos este objeto chamado global, vamos entender como ele funciona,
    vamos para o arquivo global.js

# ENTENDENDO O THIS

    O this aponta para o module.exports, vamos ver algumas coisas ja vistas para servir mais como revisao! 
    vamos para o arquivo this.js

# PASSANDO PARAMETROS ENTRE MODULOS

    Um outro exemplo que vamos fazer é passar parametros a modulos, a primore n temos isso mas se um modulo retorna uma funcao, podemos passar paramtros
    vamos para o arquivo passandoParametros.js...

# INSTALANDO Deps & Scripts

    nesta aula vamos ver duas coisas bem simples que tem haver com o package.json:
        1 - podemos criara scripts dentro deste arquivo para a execucao mais simples a partir do terminal
        2 - a partir do package.json podemos recriar a pasta node_modules

    Vamos para nosso diretorio de funcionarios que criamos anteriormente...
        vamos excluir a pasta node_modules (porem temos o package.json que como ja foi dito, é basicamente o que descreve nosso projeto)

            VAMOS PARA DENTRO DO ARQUIVO package.json vamos criar dois comando e vamos executar a partir do terminal

            (PARA MAIOR FACILIDADE VOU EDITAR TUDO POR AQUI...)
            {
                "name": "funcionarios",
                "version": "1.0.0",
                "description": "",
                "main": "index.js", (vamos mudar o arquivo principal de index.js para funcionarios.js, pois este é nosso arquivo principal deste exemplo)
                "scripts": { (DENTRO DE SCRIPTS VAMOS ADICIONAR DOIS, UM É O START QUE CHAMA O NODEMON E OUTRO QUE CHAMA-SE DEV QUE VAI DISPARAR O NODEMON)
                    "start": "nodemon",
                    "dev": "nodemon",
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "dependencies": {
                    "axios": "0.21.1"
                }
            }
                    
        Apos as alteracoes vamos para o terminal...
            para recriar a pasta node_modules, basta ir ate o diretorio e executar o comando no terminal:

                ** npm i **

            perceba que a pasta node_modulos reapareceu dentro do diretorio funcionarios...
                
        vamos ver como estartar os scripts que criamos...

            a forma mais simples é usando o comando

                ** npm start **

            perceba que o nodemon fica persistindo a aplicacao ou seja, se mudarmos qq coisa no funcionarios.js, o proprio nodemon percebe a mudanca, da o refresh e executa de novo

            perceba que se tentarmos executar o comando ** npm dev ** como executado com o start, isso acontece pq o start é um comando padrao do node, mas o dev n é padrao, neste caso temos que executar este comando usando o run:

                ** npm run dev **

        Documentacao scripts npm - https://docs.npmjs.com/cli/v6/using-npm/scripts

# LENDO ARQUIVOS

    vamos ver como ler arquivos usando o node, dentro do node temos varios modulos para leitura de arquivos..
    vamos a primore criar um arquivo json a ser lido chamado arquivo.json

    apos criar este arquivo, vamos criar o arquivo onde vamos importar o modulo e ler o arquivo json criado,
    vamos para arquivoLeitura.js
            
# ESCREVENDO ARQUIVOS

    Vamos ver agora como podemos escrever um arquivo usando o modulo fs... 
    vamos para o arquivo, arquivoExcrita.js

# FRAMEWORKS WEB

    Vamos falar sobre o conceito de framework, vamos ver mais a frente um framework chamado expressJS, ate aqui estamoo vendo a linguagem js pura. mas em breve vamos ver mais sobre framework....

    um framework é algo que estrutura sua aplicação, no caso ele te da toda uma arquitetura e vc pode desenvolver seguindo aquela msm estrutura organizadamente!

    framework != Biblioteca
 
# PADRAO Middleware

    Existem alguns padroes importantes dentro de JS um deles é o padrao Observer,
    Mas agora vamos ver um pouco sobre o padrao middleware, pois o express que veremos a seguir é fortemente baseado neste padrao!
    vamos para o arquivo middleware.js

# INSTALANDO O POSTMAN

    BAIXE E INSTALE O POSTMAN

# PROJETO: API COM Express #01

    Dentro da pasta node vamos criar uma nova pasta chamada projeto
        pelo terminal, vamos entrar dentro do diretorio da pasta que acabamos de criar e vamos inicializar o npm usando o comando

            ** npm init -y **

        logo apos a inicializacao, vamos instalar express usando o comando...

            ** npm i --save express@4.16.2 -E **

        perceba que usando o @ e no final o -E, dizemos que queremos a versao exata pedida no comando!


        logo apos isso, vamos criar uma outra pasta dentro do diretorio projeto, chamado src...
            dentro de js criamos outro arquivo chamado server.js

    primeiramente quando vamos executar alguma aplicacao que tem comunicao cm rede, nos precisamos declarar uma porta! Mas o que é uma porta? 
        Porta é um processo dentro do computador, ela serve para especificar por onde pode-se aceitar os pacotes de informacao para ser interpretado pela apliocacao especifica que precisamos mandar, pense assim, dentro do seu pc tem varios processos, imagine que vc precisa receber uma informacao para uma aplicacao, mas a informacao tem apenas seu endereco IP, ela vai chegar n sua maquina, mas n vai saber para qual aploicaacao vai mandar a informacao.
        Pense isso que cada porta é unica por processo!

        Perceba que, se definirmos uma porta e estartar a aplicacao. Blz ai vou abro outro interpretador e tento executar a msm aplicacao na msm porta. Perceba que vai dar problema porque como foi dito. A porta é unica por processo!!

        Existe uma porta padrao para requisicoes http, a porta 80

    vamos para o arquivo server.js...

# PROJETO: API COM Express #02

    Vamos continuar o projeto mas agora criando um arquivo para simular um bd....

# TAREFAS AGENDADAS COM TEMPORIZADOR

    Outra coisa muito legal de fazer no node, sao disparar processos temporizados! existe um modulo expecifico, onde podemos agendar processos,
    este modulo se chama node-schedule, podemos fazer a instalacao dele pelo comando

        ** npm i node-schedule ** vamos instalar a versao @1.3.0

    vamos para o arquivo chamado temporizador.js

# PROCESS: ENTRADA E SAIDA PADRAO

    Dentro do node, temos alguns objetos e constantes que sao disponiveis globalmente por exemplo o _dirname ou mesmo o objeto global.
    temos tambem o process que serve para ler dados do teclado do usuario e podemos lelo tbm. 
    vamos fazer um exemplo usando process
    entradaESaida.js