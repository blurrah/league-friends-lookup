angular.module('ioniclol.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('PlayerService', function() {
    
    // My LoL friends I want to keep track off, will be editable and stored in the LocalStorage.
    var playerList = ['James Cameron', 'Awesome Possum', 'Prelth', 'Rambling Man', 'Kuzzer', 'Asiom', 'Sannens', 'xTheBeast', 'Fr3ak1n 0ut', 'Thomasz92'];
    
    // Key - value pair array which gets players and status pushed to after requesting data from the API
    var playerStatus = {};
    
    var players = [
        { id: 0, name: 'James Cameron', status: 'In game', icon: 605 },
        { id: 1, name: 'Awesome Possum', status: 'Online', icon: 588 },
        { id: 2, name: 'Asiom', status: 'Away from Keyboard', icon: 590 }
    ];
    
    return {
        all: function() {
            // For each loop requesting every player data from the API should be done here to keep it actual
            return players;
        },
        get: function(playerId) {
            // Specific playerdata should be requested from the API here.
            return players[playerId];
        }
    }

});
