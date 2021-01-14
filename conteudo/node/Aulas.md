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