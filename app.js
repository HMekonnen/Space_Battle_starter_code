// Created playerShip class 
class PlayerShipProperties{
    constructor(shipName, hull, firePower, accuracy, isAlive){
        this.shipName= shipName;
        this.hull= hull;
        this.firePower= firePower;
        this.accuracy= accuracy;
        this.isAlive = this.hull
        }

       
       }
         
        // isAlive- set to boolean 
 class AlienShipProperties extends PlayerShipProperties {
        constructor(shipName, hull, firePower, accuracy, isAlive){
          super(shipName, hull, firePower, accuracy, isAlive);
        this.hull= Math.floor(Math.random()*(6-3)+3) ;
        this.firePower= Math.floor(Math.random()*(4-2)+2) ;
        this.accuracy= (Math.random() * ((8 - 6) ) + 6) /10 ;   
        this.isAlive= true
    }

}

    //Created objects 1- player and 6- Alien ships 
    let player = new PlayerShipProperties ("USS HelloWorld", 20, 5, .7,20)
    let objEnemy1 = new AlienShipProperties("Alien Ship 1")
    let objEnemy2 = new AlienShipProperties("Alien Ship 2")
    let objEnemy3 = new AlienShipProperties("Alien Ship 3")
    let objEnemy4 = new AlienShipProperties("Alien Ship 4")
    let objEnemy5 = new AlienShipProperties("Alien Ship 5")
    let objEnemy6 = new AlienShipProperties("Alien Ship 6")

    // created a sixShip Array - to hold all 6 Alien ship objects// 
   let sixShipsArray= [objEnemy1,objEnemy2,objEnemy3,objEnemy4,objEnemy5,objEnemy6]
  
       // testing array loaded successfully-  console.log(sixShipsArray);//
  
       // Button to commence/ call "play"()
   function play() {
    document.getElementById("demo").innerHTML = play();
  }
  
     // Initialize play function 
  play=()=>{
       while (player.isAlive > 0 && sixShipsArray.length >= 0){ 
    
       for(let  i= sixShipsArray.length-1; i>=0; i--){
            
          if (player.accuracy >= sixShipsArray[i].accuracy && player.isAlive >0) { 
            
                    sixShipsArray[i].isAlive === false  
                
                       sixShipsArray.splice(i,1)
             
                 
                                console.log("ship index #:" + i)
          
                              console.log("Nice Work, Ship annihilated!")
           
            }

          else if (player.accuracy < sixShipsArray[i].accuracy && player.isAlive >0){
                
                  player.isAlive = player.isAlive - sixShipsArray[i].firePower
                              
                                console.log("Ship index #:" +i)
                  
                                console.log(`Oo, you've been hit, your hull is now ${player.isAlive}`)
           }
          
          
            
          else if (player.isAlive<=0 || sixShipsArray.length < 0){
            
                     break;}
       
          }}
          
          
                  console.log(`Game Over! Player Hull: ${player.isAlive} Number of undefeated Spaceships: ${sixShipsArray.length} `) }
       
         
         
          