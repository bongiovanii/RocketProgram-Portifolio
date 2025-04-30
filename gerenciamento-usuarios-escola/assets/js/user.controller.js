app.controller('AppController', function ($scope, UsuarioService) {
    $scope.mensagem = "Bem-Vindo ao sistema de cadastro Escolar";

    $scope.filtros = {
        aluno: false,
        professor: false
    };


    $scope.usuarios = UsuarioService.listar();

    // #1 bug: os sitema não consegue pegar os dados dos Inputs => 
    // {nome: "", tipo: "", dataCadastro: "Invalid Date"}

    $scope.userInput = {
        nome: "",
        email: "",
        tipo: "",
        date: ""
    };

    $scope.loading = false;

    $scope.handleSubmitAddUser = async (form) => {
        $scope.loading = true;

        const nome = $scope.userInput.nome;
        const email = $scope.userInput.email;
        const tipo = $scope.userInput.tipo;
        const date = $scope.userInput.date;
        const dateObj = new Date(date);
        const dateStr = dateObj.toLocaleDateString();
        const status = false;

        var addUser = await UsuarioService.adicionarUsuario(nome, email, tipo, dateStr, status);


        $scope.userInput = {
            nome: "",
            email: "",
            tipo: "",
            date: ""
        };

        form.$setPristine();
        form.$setUntouched();

        $scope.usuarios = UsuarioService.listar();
        $scope.loading = false;

        $scope.$apply();

    }

    $scope.removeUsuario = (curretUsuario) => {
        UsuarioService.removeUsuario(curretUsuario.nome);
        $scope.usuarios = UsuarioService.listar();

    }


    $scope.filtroPorTipo = function (usuario) {
        if (!$scope.filtros.aluno && !$scope.filtros.professor) {
            return true;
        }

        return ($scope.filtros.aluno && usuario.tipo === 'Aluno') ||
            ($scope.filtros.professor && usuario.tipo === 'Professor');

    };


});

