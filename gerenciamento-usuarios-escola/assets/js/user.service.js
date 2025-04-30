window.app.factory('UsuarioService', function () {
    let _usuarios = [];

    const salvarUsuario = () => {
        localStorage.setItem('_usuarios', JSON.stringify(_usuarios.map(user => ({ nome: user.nome, email: user.email, tipo: user.tipo, dataCadastro: user.dataCadastro }))));
    }

    function delay(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }

    async function loading(status) {
        await delay(5000);
        return status = true;
    }


    return {
        listar() {
            return _usuarios;
        },

        async adicionarUsuario(nome, email, tipo, dataCadastro, status) {

            _usuarios.push({
                nome: nome,
                email: email,
                tipo: tipo,
                dataCadastro: dataCadastro
            });

            status = await loading(status);

            if (status === true) {
                salvarUsuario();
                return status;
            } else {
                return status = false;
            }
        },

        removerUsuario(nomeUsuario) {
            _usuarios = _usuarios.filter((_usuarios) => _usuarios.nome != nomeUsuario.nome);
            salvarUsuario();
        }

    };


});
