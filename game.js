//this function creates a deck of cards, the arrays give the values and suits

function makeDeck() {
  const value = ["2","3","4","5","6","7","8","9","10","11","12","13","14"];
  const suits = ["♠","♥","♦","♣"];
  const deck = [];

  //for loop assigns the suit to each card
  for (let s of suits)
    //for loop assigns a value to each card
    for (let i = 0; i < value.length; i++)
      //the combines the suit and value for each card
      deck.push({ r: value[i], v: i + 2, s });
  //this returns a full deck, each card with a suit and value    
  return deck;
}

//this function shuffles the deck of cards
function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

//this function is the playing of the game
function playGame() {
  let deck = makeDeck();

  //shuffling the deck and giving each player 26 cards
  shuffle(deck);
  let p1 = deck.slice(0, 26);
  let p2 = deck.slice(26);

  //this sets the scroe to zero to begin
  let p1Score = 0;
  let p2Score = 0;

  //this for loop runs until all 26 plays have taken place
  for (let i = 0; i < 26; i++) {
    let c1 = p1[i];
    let c2 = p2[i];
    //prints the turn #, and player 1 and player 2 cards are for the turn
    console.log(`Turn ${i + 1}: P1 ${c1.r + c1.s} vs P2 ${c2.r + c2.s}`);

//compares the cards and will print who won the round
if (c1.v > c2.v) {
      p1Score++;
      console.log("→ Player 1 wins this turn");
    }
    else if (c2.v > c1.v) {
      p2Score++;
      console.log("→ Player 2 wins this turn");
    }
    else {
      console.log("→ Tie (no points)");
    }

    console.log("");
  }

  //prints the final totals of all of the turns
  console.log("FINAL SCORE");
  console.log("Player 1:", p1Score);
  console.log("Player 2:", p2Score);

  //prints who won the game
  if (p1Score > p2Score) console.log("Player 1 WINS the game!");
  else if (p2Score > p1Score) console.log("Player 2 WINS the game!");
  else console.log("The game ends in a DRAW!");
}

//calls the playgame function to start the game
playGame();