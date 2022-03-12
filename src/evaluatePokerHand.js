// The evaluatePokerHand() function accepts an array of objects describing the poker hand. Each object represents a single card, with "rank" and "suit"
// properties. For example, a poker hand can look like

// [
// 	{ "rank": 2, "suit": "heart" },
// 	{ "rank": 3, "suit": "spade" },
// 	{ "rank": 4, "suit": "diamond" },
// 	{ "rank": 5, "suit": "club" },
// 	{ "rank": 6, "suit": "spade" }
// ]

// Ranks 1, 11, 12 and 13 are Aces, Jacks, Queens and Kings respectively.

// The function must then return a string describing the win that has been detected.
// Here is a list of possible values that can be returned by the evaluatePokerHand function:

// * "highcard"
// * "pair"
// * "twopair"
// * "threeofakind"
// * "straight"
// * "flush"
// * "fullhouse"
// * "fourofakind"
// * "straightflush"
// * "royalflush"

// You first need to count how often a given rank appears in the hand
// * If the hand contains 4 of one rank and 1 of another it's a 'Four of a Kind'
// * If the hand contains 3 of one rank and 2 of another it's a 'Full House'
// * If the hand contains 3 of one rank and 2 other ranks it's a 'Three of a Kind'
// * If the hand contains 2 pairs of a rank and 1 of another it's a 'Two Pairs'
// * If the hand contains 4 ranks, then it's a 'Pair'

// Second, check if it is a straight or a flush
// * If all cards in the hand have the same suit it's a 'Flush'
// * If the cards are in order they are a 'Straight' (it could be a 'Wheel' or a 'Broadway' but we only need to know if it's a 'Straight')
// * If it's both a 'Flush' and a 'Straight' it's a 'Straight Flush'.
// * If it's a Straight Flush running from Ten to Ace, then it's a 'Royal Flush'

// If it's none of the above, it's a 'High Card'


function evaluatePokerHand( hand ) {
    // function to count how often each rank is appeared in the hand. result is an object with ranks as properties keys and number of appearance as properties values
    function countOfRankAppearance(hand) {
        for ( let index=0; index<hand.length; ++index ) {
            const card = hand[index];
            return hand.reduce(function(result, card) {
            result[card.rank] = card.rank in result ? result[card.rank] + 1 : 1;
            return result;
            }, {});
              }
        };
    
    
    //output of countOfRankAppearance(hand) saved into a variable
    let rankAnalyzed = {...countOfRankAppearance(hand)};
    // an array of rankAnalyzed object values 
    let rankResultArray = []
    // an array of rankAnalyzed object keys
    const keys1 = Object.keys(rankAnalyzed)
    keys1.forEach((key, val) => {
        rankResultArray.push(rankAnalyzed[key]);
        });
    //function to check if the hand is straight (consecutive numbers)
    function straightChecker(arr){
        const isStraight= arr.slice(1).map(function(j, i) { return j - arr[i]; }).every(value => value == 1)
        return isStraight;  

    }
    //function to check if two arrays are equal
    function equalArray(a, b) { 
        return !!a && !!b && !(a<b || b<a); 
    
    }
    // function to count how often each suit is appeared in the hand. result is an object with suits as properties keys and number of appearance as properties values
    function countOfSuitAppearance(hand) {
        for ( let index=0; index<hand.length; ++index ) {
            const card = hand[index];
            return hand.reduce(function(result, card) {
            result[card.suit] = card.suit in result ? result[card.suit] + 1 : 1;
            return result;
            }, {});
              }
        };
    
    
    //output of countOfSuitAppearance(hand) saved into a variable
    let suitAnalyzed = {...countOfSuitAppearance(hand)};
    // an array of suitAnalyzed object values 
    let suitResultArray = []
    // an array of suitAnalyzed object keys
    const keys2 = Object.keys(suitAnalyzed)
    keys2.forEach((key, val) => {
        suitResultArray.push(suitAnalyzed[key]);
        });
    
    //defining what a broadway straight is
    let broadwayStraight = ["1", "10", "11", "12", "13"]

    // the conditional logic to decide what win is each given hand
        if (rankResultArray.includes(4)){
            return "fourofakind";
        }
        else if (rankResultArray.includes(3) && rankResultArray.includes(2)){
            return "fullhouse";
        }
        else if (rankResultArray.includes(3)){
            return "threeofakind";
        }
        else if (rankResultArray.filter(x=>x==2).length == 2){
            return "twopair";
        }
        else if (rankResultArray.filter(x=>x==2).length == 1){
            return "pair";
        }
        else if (keys2.length == 1 && !straightChecker(keys1) && !equalArray(keys1, broadwayStraight)){
            return "flush";
        }
        else if ((straightChecker(keys1) && keys2.length > 1) || (equalArray(keys1, broadwayStraight) && keys2.length > 1)){
            return "straight";
        }
        else if (straightChecker(keys1) == true && keys2.length == 1 && keys1.length == 5) {
            return 'straightflush';
        }
        else if (keys2.length == 1 && keys1.length == 5 && equalArray(keys1, broadwayStraight)){
            return "royalflush";
        }
        else {
            return "highcard";
        }

    }





module.exports = evaluatePokerHand;


