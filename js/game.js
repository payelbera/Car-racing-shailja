class Game{
    constructor(){

    }
    getState(){
       var gameStateref = database.ref("gameState")
       gameStateref.on("value",function(data){
           gameState = data.val()
       })
    } 
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        console.log("start"+gameState)
        if(gameState === 0){
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display();
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        //car3 = createSprite(500,200)
        //car4 = createSprite(700,200)
        cars = [car1,car2]
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            //for the cars array 
            var index = 0
            var xpos = 0
            var ypos = 0
           // var displayPosition = 130
            for(var plr in allPlayers){
                index = index+1
                xpos = xpos + 200
                ypos = displayHeight-allPlayers[plr].distance
                cars[index-1].x = xpos
                cars[index-1].y = ypos
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }    
              //  displayPosition += 20
                //textSize(15)
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
            }
            
        }
        if(keyIsDown(UP_ARROW) && player.index!== null){
         player.distance +=50
         player.update()
        }
        drawSprites();
    }
}