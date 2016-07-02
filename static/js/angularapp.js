var speachApp = angular.module('speachApp',[]);

speachApp.controller('MainCtrl',
    function($scope, $http) {
        $scope.title = 'Title';
        $scope.files = [
            {
                name: '1335.wav'
            },
            {
                name: '1302.wav'
            },
            {
                name: '1311.wav'
            },
            {
                name: '1316.wav'
            },
            {
                name: '1326.wav'
            }
        ];
        $scope.accuracy = 'accuracy';
        $scope.delay = 'delay';

        $scope.predict = function (apt, dpt, date) {
            var $req = {
                method: 'POST',
                url: '/predict',
                data: {
                    apt: apt,
                    dpt: dpt,
                    date: date
                }
            };

            $http($req).then(
                function (data) {
                    $scope.accuracy = data.data["Accuracy"];
                    $scope.delay = data.data["Delay"];
                }
            )
        };
        
        $scope.source = function (name) {
            return '../record/' + name
        }
});