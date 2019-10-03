const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = '';
    for (let i = 0; i < expr.length; i += 10) {
        let sign = '';

        if(expr[i] !== '*') {
            for (let j = i; j < i + 10; j += 2) {
                let temp = expr.substr(j, 2);
                if (temp === "00") {
                    sign += '';
                }
                if  (temp === "11") {
                    sign += '-';
                }

                if ( temp === "10") {
                    sign += '.';
                }

            }
            words += MORSE_TABLE[sign];
        }
        else {
            words += ' ';
        }

    }
    return words;
}

module.exports = {
    decode
}