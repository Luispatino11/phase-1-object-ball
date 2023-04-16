
  function gameObject (){
      return {
        "home": {
            "teamName":"Brooklyn Nets",
            "colors":["Black","White"],
            "players":{
              "Alan Anderson":{
                "number": "0",
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1
              }
            }
          }, 
        "away": {
            "teamName":"",
            "colors":["",""],
            "players":{}
          }
      }
  }
  
  function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log("Run homeTeamName(): ", homeTeamName());
  