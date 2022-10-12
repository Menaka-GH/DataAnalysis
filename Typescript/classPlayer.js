class Player{
    static description = "player in our game";//cannot be accessed through objects, only by class 'Player'
    #score = 0;//private field cannot be accessible outside of the class
    numLives = 10;
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#secret(); 
        console.log("this is in constructor");
    }
    static randomPlayer(){
        return new Player("Kavin","Parthiv");
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    set fullname(newname)
    {
    const [firstname, lastname] = newname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;   
    } 
    get score(){
    return this.#score;
    }
    getscore()
    {
        return this.#score;
    }
    set score(newscore){
        if(newscore<0){
            throw new Error("Score must be positive!!");
        }
        this.#score = newscore;
    }
    updateScore(newscore){
        this.#score = newscore;
    }
taunt(){
    console.log("yay!!");
}
loseLife()
{
    this.numLives -= 1;

}
#secret(){
    console.log("SECRET!!");
}
}
class AdminPlayer extends Player{
    constructor(firstname,lastname,powers){
        super(firstname,lastname);
        this.powers = powers;
    }
isAdmin = true;
}
const admin = new AdminPlayer("Menaka","Hari",["Protector","of the Family"]);
// const player1 =new Player("Menaka","hari");
// player1.taunt();
// console.log(player1.lastname);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// //player1.#score;//wrong statemnt
// console.log("score value: "+player1.getscore());
// player1.updateScore(44);
// console.log("score value after update: "+player1.score);
// console.log("accessing the private value score through get score field: "+player1.score);
// //player1.score = -2.33333;
// console.log(player1.score);
// player1.score = 3332;

// console.log(player1.score);
// console.log(player1.fullname);
// player1.fullname = "Siva Hari";
// console.log(player1.fullname);
// console.log("static description field: "+Player.description);
// console.log("static randomplayer method: "+Player.randomPlayer());

