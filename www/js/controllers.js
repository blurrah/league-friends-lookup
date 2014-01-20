angular.module('ioniclol.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})

.controller('PlayerIndexCtrl', function($scope, PlayerService) {
    $scope.players = PlayerService.all();
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, PlayerService) {
    $scope.player = PlayerService.get($stateParams.playerId);
})
// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
