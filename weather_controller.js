var app = angular.module("manmaApp", []);

app.controller("weatherCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.weather = function (city) {
        console.log(city);
        var url = 'http://api.apixu.com/v1/forecast.json?key=f29f8d04728047f8aa2125613181611&q=' + city + '&days=10';
        console.log(url);
        $http.get(url)
            .then(function (data) {
                console.log(data);
                /* for(let kys in data.data.main){
                     console.log(kys)
                 }*/
                $scope.city = data.data.location.name;
                $scope.description = data.data.current.condition.text;
                $scope.image = 'http://cdn.apixu.com/weather/64x64/night/122.png';
                $scope.temp_c = data.data.current.temp_c;
                $scope.countryName = data.data.location.country;
                $scope.lat = data.data.location.lat;
                $scope.lon = data.data.location.lon;
                $scope.sunRise = data.data.forecast.forecastday[0].astro.moonrise;
                console.log($scope.sunRise);
                $scope.sunset = data.data.forecast.forecastday[0].astro.sunset;
                console.log($scope.sunset);
                $scope.wind = data.data.current.wind_mph;
                $scope.humidity = data.data.current.humidity;
                $scope.feelsLike = data.data.current.feelslike_c;

                /*---10DAYS FORECAST--*/
                $scope.foreweather = data.data.forecast.forecastday;
                console.log($scope.foreweather);
               
            })

    }

}]);
/*
app.controller('dateCtrl', function ($scope) {
    $scope.today = new Date();
});*/