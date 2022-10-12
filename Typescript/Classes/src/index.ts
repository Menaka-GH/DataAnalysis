// class Player{
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string,last: string){
//         this.first = first;
//         this.last = last;
//         this.secretmethod();
//         }
//         private secretmethod():void{
//             console.log("SECRET!!");
//         }
//     }
class Player{
    // public readonly first: string;
    // public readonly last: string;
    // private score: number = 0;
    constructor(
        public first: string,public last: string,
        private score: number){
        
        }
        private secretmethod():void{
            console.log("SECRET!!");
        }
    }
    const elton =new Player("Menaka","hari");
    console.log(elton);
