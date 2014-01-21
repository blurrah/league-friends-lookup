angular.module('ioniclol.controllers', [])




.controller('PlayerIndexCtrl', function($scope, PlayerService) {
    $scope.players = PlayerService.all();
    $scope.onRefresh = function() {
        PlayerService.all(function(data){ 
            $scope.players = data;
            
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, PlayerService) {
    $scope.player = PlayerService.get($stateParams.playerId);
})

