angular.module('ioniclol.controllers', [])




.controller('PlayerIndexCtrl', function($scope, PlayerService) {
    $scope.players = PlayerService.all();
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, PlayerService) {
    $scope.player = PlayerService.get($stateParams.playerId);
})

