// x create ShipProperties class for shared property types - edit: created two classes due to math random function on alienship
//  createActors: Player + Alien ships
class PlayerShipProperties{
    constructor(playerShipName, playerHull, playerFirePower, playerAccuracy){
        this.playerShipName= playerShipName;
        this.playerHull= playerHull;
        this.playerFirePower= playerFirePower;
        this.playerAccuracy= playerAccuracy;
        }}
    
    class AlienShipProperties{
        constructor(shipName, hull, firePower, accuracy){
        this.shipName= shipName;
        this.hull= Math.floor(Math.random()*(6-3)+3) ;
        this.firePower= Math.floor(Math.random()*(4-2)+2) ;
        this.accuracy= (Math.random() * ((8 - 6) ) + 6) /10 ;
        
    }}
    //create objects 
    let objPlayer = new PlayerShipProperties ("USS HelloWorld", 20, 5, .7)
    let objEnemy1 = new AlienShipProperties("Alien Ship 1")
    let objEnemy2 = new AlienShipProperties("Alien Ship 2")
    let objEnemy3 = new AlienShipProperties("Alien Ship 3")
    let objEnemy4 = new AlienShipProperties("Alien Ship 4")
    let objEnemy5 = new AlienShipProperties("Alien Ship 5")
    let objEnemy6 = new AlienShipProperties("Alien Ship 6")