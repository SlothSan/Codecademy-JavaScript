const team = {
    _players: [
      {firstName: 'Mike', lastName:'Oram', age: 29},
      {firstName: 'Josh', lastName:'Bennet', age: 27},
      {firstName: 'Lily', lastName: 'Chapman', age: 27},
     ],
    _games: [ 
      {opponent: 'Giants', teamPoints: 10, opponentPoints: 20,},
      {opponent: 'Rovers', teamPoints: 20, opponentPoints: 30,},
      {opponent: 'City', teamPoints: 25, opponentPoints: 15,},
    ],
    
    get players() {
      return this._players;
    },
    
    get games() {
      return this._games;
    },
    
    addPlayer(newFirstName, newLastName, newAge) {
      let player = new Object ();
      player.firstName = newFirstName;
      player.lastName = newLastName;
      player.age = newAge;
      this._players.push(player);
    },
    
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = new Object();
      game.opponent = newOpponent;
      game.teamPoints = newTeamPoints;
      game.opponentPoints = newOpponentPoints;
      this._games.push(game);
    },
    
    };
    
    team.addGame('Titans', 100, 98);
    team.addPlayer('Bugs','Bunny', 76);
    console.log(team.players);
    console.log(team.games);