angular.module('ioniclol.controllers', [])




.controller('PlayerIndexCtrl', function($scope, PlayerService) {
    $scope.players = PlayerService.all();
    
    $scope.rightButtons = [
  { 
    type: 'button-positive',
    content: '<i class="icon ion-navicon"></i>',
    tap: function(e) {
    }
  }
]
    /* $scope.onRefresh = function() {
       PlayerService.all().then(function(data){ 
            $scope.players = data;
            
            $scope.$emit('scroll.refreshComplete');
        });
    }; */
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, PlayerService) {
    $scope.player = PlayerService.get($stateParams.playerId);
})

