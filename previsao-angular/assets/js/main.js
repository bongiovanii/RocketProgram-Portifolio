const lang = "pt_br";
const units = "metric";
const apiKey = "34eb5a44dabbadddbd7599e6e4d1a18b";
const app = angular.module("weatherApp", []);

app.controller("weatherController", function ($scope, $http) {
    $scope.city = "";
    $scope.cityName = "";
    $scope.cardActive = false;
    $scope.temperature = "";
    $scope.feelsLike = "";
    $scope.minTemperature = "";
    $scope.maxTemperature = "";
    $scope.humidity = "";
    $scope.windVelocity = "";
    $scope.windOrientation = "";
    $scope.iconURL = "";


    $scope.callAPI = async () => {
        const city = $scope.city || localStorage.getItem("city");

        const response = await $http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`
        );

        const { data } = response;


        const icon = data.weather[0].icon;

        $scope.iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        $scope.cityName = data.name;
        $scope.temperature = data.main.temp + "°";
        $scope.minTemperature = data.main.temp_min;
        $scope.maxTemperature = data.main.temp_max;
        $scope.feelsLike = data.main.feels_like;
        $scope.humidity = data.main.humidity;
        $scope.windOrientation = data.wind.deg;
        $scope.windVelocity = data.wind.speed;
        $scope.cardActive = true;
        localStorage.setItem("city", data.name);
        console.log(data);
        $scope.$apply();

    }


});