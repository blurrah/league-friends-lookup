angular.module('ioniclol.services', [])

/**
 * A simple example service that returns some data.
 */

.factory('PlayerService', function($http, $q) {
    
    
    // My LoL friends I want to keep track off, will be editable and stored in the LocalStorage.
    var playerList = ['James Cameron', 'Awesome Possum', 'Prelth', 'Rambling Man', 'Kuzzer', 'Asiom', 'Sannens', 'xTheBeast', 'Fr3ak1n 0ut', 'Thomasz92'];
    
    var playerIds = ['19585925', '24322591', '19586047'];
    var tier = [];
    
    // Key - value pair array which gets players and status pushed to after requesting data from the API
    var playerStatus = [];
    var index = 0;
    
    var players = [
        { id: 0, name: 'James Cameron', status: 'In game', icon: 605 },
        { id: 1, name: 'Awesome Possum', status: 'Online', icon: 588 },
        { id: 2, name: 'Asiom', status: 'Away from Keyboard', icon: 590 }
    ];
    
    return {
        all: function() {
            // For each loop requesting every player data from the API should be done here to keep it actual
            if (playerStatus[0] != null) {
                return playerStatus;
            } else {
            for (i = 0; i < playerIds.length; i++) {
                console.log(playerIds[i]);
                $http.get('https://community-league-of-legends.p.mashape.com/api/v1.0/EUW/summoner/getLeagueForPlayer/' + playerIds[i], {headers: {"X-Mashape-Authorization": "HRuPCaIq0COgwg77qhcuMZexnNLHffOM"}})
                .then(function(response) {
                    console.log(i);
                    playerStatus.push({
                        id: index,
                        name: response.data.requestorsName,
                        status: response.data.tier + " " + response.data.requestorsRank,
                        icon: '590'
                    });
                    console.log(playerStatus);
                    index++;
                }, function(response) {
                    return $q.reject(response.data);
                });
            }
            return playerStatus;
                
            }
        },
        get: function(playerId) {
            // Specific playerdata should be requested from the API here.
            return playerStatus[playerId];
            
            // response.data.requestorsName.toLowerCase().replace(/\s+/g, '')
        }
    }

});
