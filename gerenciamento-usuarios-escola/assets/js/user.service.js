window.app.factory('UsuarioService', function () {
    let _usuarios = [];

    const salvarUsuario = ()=> {
        localStorage.setItem('_usuarios', JSON.stringify(_usuarios));
    }

    return {
        listar() {
            return _usuarios;
        },

        adicionarUsuario(nome, tipo, dataCadastro) {
            _usuarios.push({
                nome: nome,
                tipo: tipo,
                dataCadastro: dataCadastro
            });
            salvarUsuario();
        },

        removerUsuario(nomeUsuario){
            _usuarios = _usuarios.filter((_usuarios)=> _usuarios.nome != nomeUsuario.nome);
            salvarUsuario();
        }

    };


});
