class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    
    //write code to change the background color here
    background("lightblue");
    //write code to show a heading for showing the result of Quiz
    answer = createElement('h1');
    answer.position(300, 0);
    answer.html('ANSWER OF THE QUIZ')
    //call getContestantInfo( ) here
    
    contestant.getPlayerInfo()
    
    if(allContestants !== undefined){
      fill('blue')
      textSize(20)
      text("*NOTE: CONTISTANT WHO GOT IT RIGHT IS IN GREEN",130,230)
      
    }
    
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    let i = 0
    for(var plr in allContestants){
      i++
      var ca = 2;
      if(ca == allContestants[plr].answer){
        fill('green')
      }else{
        fill('red')
      }
      // print(allContestants)
      text(allContestants[plr].name+' said: '+allContestants[plr].answer,100,250+(i*20));
    }
  }

}
