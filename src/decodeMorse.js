// Oh no! You have stumbled upon a mysterious signal consisting of beeps of various lengths, 
// and it is of utmost importance that you find out the secret message hidden in the beeps. 
// There are long and short beeps, the longer ones roughly three times as long as the shorter ones. Hmm... that sounds familiar.
// That's right: your job is to implement a decoder for the Morse alphabet. Rather than dealing with actual beeps, we will use a common string encoding of Morse. 
// A long beep is represened by a dash (-) and a short beep by a dot (.). A series of long and short beeps make up a letter, and letters are separated by spaces ( ). 
// Words are separated by double spaces.

function decodeMorse(str) {
    var decodedText = '';
        var chars = str.split(/(\s+)/);
        for (var i=0; i<chars.length; i++) {
        switch (chars[i]) {
            case '.-': decodedText += 'a'; break;
            case '-...': decodedText += 'b'; break;
            case '-.-.': decodedText += 'c'; break;
            case '-..': decodedText += 'd'; break;
            case '.': decodedText += 'e'; break;
            case '..-.': decodedText += 'f'; break;
            case '--.': decodedText += 'g'; break;
            case '....': decodedText += 'h'; break;
            case '..': decodedText += 'i'; break;
            case '.---': decodedText += 'j'; break;
            case '-.-': decodedText += 'k'; break;
            case '.-..': decodedText += 'l'; break;
            case '--': decodedText += 'm'; break;
            case '-.': decodedText += 'n'; break;
            case '---': decodedText += 'o'; break;
            case '.--.': decodedText += 'p'; break;
            case '--.-': decodedText += 'q'; break;
            case '.-.': decodedText += 'r'; break;
            case '...': decodedText += 's'; break;
            case '-': decodedText += 't'; break;
            case '..-': decodedText += 'u'; break;
            case '...-': decodedText += 'v'; break;
            case '.--': decodedText += 'w'; break;
            case '-..-': decodedText += 'x'; break;
            case '-.--': decodedText += 'y'; break;
            case '--..': decodedText += 'z'; break;
            case '.----': decodedText += '1'; break;
            case '..---': decodedText += '2'; break;
            case '...--': decodedText += '3'; break;
            case '....-': decodedText += '4'; break;
            case '.....': decodedText += '5'; break;
            case '-....': decodedText += '6'; break;
            case '--...': decodedText += '7'; break;
            case '---..': decodedText +=  '8'; break;
            case '----.': decodedText += '9'; break;
            case '-----': decodedText += '0'; break;
            case '  ': decodedText += ' '; break;
            default : ('Check the input. There is a problem with it');
                    }
                }
        
        return decodedText;
    };


module.exports = decodeMorse;