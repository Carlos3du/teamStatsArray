const team = {
  _players:[
    {firstname: 'John', lastname: 'Marcos', age: 18 },
    {fistname: 'Mary', lastname: 'Jane', age: 22},
    {fistname: 'Tom', lastname: 'Maker', age: 19}
  ],
  
  _games:[
    {opponent: 'Team Purple', teampoints: 20, opp_points: 19 },
    {opponent: 'Team Green', teampoints: 15, opp_points: 17},
    {opponent: 'Team Teal', teampoints: 13, opp_points: 8}
  ],

  get players(){
    return this._players();
  },

  get games(){
    return this._games();
  },

  addPlayer(new_firstname, new_lastname, new_age){
    let player = {
      firstname: new_firstname,
      lastname: new_lastname,
      new_age: new_age
    };

    this._players.push(player);
  },

  addGame(new_opponent, new_teampoints, new_opp_points){
    let game = {
      opponent: new_opponent,
      teampoints: new_teampoints,
      opp_points: new_opp_points
    };

    this._games.push(game);
  }

};

team.addPlayer('Will', 'Wilson', 45);
team.addGame('Team Orange', 23, 14 );
console.log(team._games)



