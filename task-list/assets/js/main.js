const app = angular.module("taskModule", []);

app.controller("TaskController", function ($scope) {
    $scope.modalActive = false;

    $scope.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    $scope.taskInput = {
        title: "",
        date: "",
    };


    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    }

    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title;
        const date = $scope.taskInput.date;
        const dateStr = $scope.taskInput.date.toLocaleDateString();

        if (!title || !date) return;

        $scope.tasks.push({
            id: Math.random().toString(36).substring(2, 9),
            title: title,
            date: date,
            dateStr: dateStr,
        });

        localStorage.setItem('tasks', JSON.stringify($scope.tasks));

        $scope.toggleModal();
        $scope.taskInput.title = "";
        $scope.taskInput.date = "";

    };

    $scope.toggleChecked = (task) => {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }

    $scope.deleteTask = (currentTask) => {
        $scope.tasks = $scope.tasks.filter((task) => task.id != currentTask.id);
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }


});