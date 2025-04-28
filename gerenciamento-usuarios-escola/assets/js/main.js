var app = angular.module('userModule', []);
app.controller('AppController', function ($scope) {
    $scope.mensagem = "Bem-Vindo ao sistema de cadastro Escolar";
    $scope.user = { nome: "João", tipo: "Professor" };
});

