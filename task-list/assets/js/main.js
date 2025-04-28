const app = angular.module("taskModule", []);

app.controller("TaskController", function ($scope, $filter) {
    $scope.modalActive = false;

    $scope.tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    $scope.showCompletedOnly = false;
    $scope.showIncompletedOnly = false;
    $scope.showTodayOnly = false;
    $scope.today = new Date().toLocaleDateString();

    $scope.taskInput = {
        title: "",
        date: "",
    };

    $scope.filteredTasks = function () {
        return $filter('filter')(
            $filter('filter')(
                $filter('filter')(
                    $scope.tasks,
                    $scope.showCompletedOnly ? { checked: true } : {}
                ),
                $scope.showIncompletedOnly ? { checked: false } : {}
            ),
            $scope.showTodayOnly ? { dateStr: $scope.today } : {}

        );
    }


    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    }



    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title;
        const date = $scope.taskInput.date;


        if (!title || !date) return;

        const dateObj = new Date(date);
        const dateStr = dateObj.toLocaleDateString();

        $scope.tasks.push({
            id: Math.random().toString(36).substring(2, 9),
            title: title,
            date: date,
            dateStr: dateStr,
            checked: false
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