
app.controller("TaskController", function ($scope, $filter, TaskService) {
    $scope.modalActive = false;

    $scope.tasks = TaskService.getTasks();
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
    };


    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    };



    $scope.handleSubmitAddTask = () => {
        const title = $scope.taskInput.title;
        const date = $scope.taskInput.date;


        if (!title || !date) return;

        const dateObj = new Date(date);
        const dateStr = dateObj.toLocaleDateString();

        TaskService.addTask(title, date, dateStr);
        $scope.tasks = TaskService.getTasks();


        $scope.toggleModal();
        $scope.taskInput.title = "";
        $scope.taskInput.date = "";

    };

    $scope.toggleChecked = (task) => {
        TaskService.toggleCheck();
        $scope.tasks = TaskService.getTasks();

    };

    $scope.deleteTask = (currentTask) => {
        console.log(currentTask)
        TaskService.removeTask(currentTask.id);
        $scope.tasks = TaskService.getTasks();
    };


});