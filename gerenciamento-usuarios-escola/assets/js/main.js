var app = angular.module('userModule', []);
app.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem-Vindo ao sistema de cadastro Escolar";
    const date = new Date();
    const dateStr = date.toLocaleDateString();


    $scope.filtros = {
        aluno: false,
        professor: false
    };

    $scope.usuarios = [
        { nome: "João", tipo: "Professor", dataCadastro: dateStr },
        { nome: "Maria", tipo: "Aluno", dataCadastro: dateStr },
        { nome: "Augusto", tipo: "Aluno", dataCadastro: dateStr },
        { nome: "Ana", tipo: "Professor", dataCadastro: dateStr },
        { nome: "Gustavo", tipo: "Aluno", dataCadastro: dateStr },
        { nome: "Marta", tipo: "Professor", dataCadastro: dateStr },
    ];

    $scope.filtroPorTipo = function (usuario) {
        if (!$scope.filtros.aluno && !$scope.filtros.professor) {
            return true;
        }

        return ($scope.filtros.aluno && usuario.tipo === 'Aluno') ||
            ($scope.filtros.professor && usuario.tipo === 'Professor');

    };


});

