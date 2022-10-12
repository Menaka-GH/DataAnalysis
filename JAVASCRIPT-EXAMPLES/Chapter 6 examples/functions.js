//Function Definitions

function displayGreeting()
{
    document.write("Hey there, dude!");
}

function displayPlayerScore(theScore)
{
    //playerScore = 1000;
    theScore += 1000;  //theScore = theScore + 1000;
    document.write("<br/>Player score: " + theScore);
}

function addTheseNumbers(x,y)
{
    //document.write(x+y);
    return (x+y);
}