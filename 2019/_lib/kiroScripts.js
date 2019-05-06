//Personal library for handling quick stuff
var klib = {
    text : function(elemId, text){
        element = document.getElementById(elemId).innerHTML = text;
    }
}


//REQUIRES BIG.JS FOR KNUM FUNCTIONS - https://github.com/MikeMcl/big.js/
var Knum = {
    toNumeral : function(input){
        inputStr = input.toFixed();
        numPower = inputStr.slice(inputStr.length%3, inputStr.length);
        
        //Todo: make actual try/catch block
        if(inputStr.includes("e")){
            //Throws error if input is standard string >= 1 Sextillion
            throw Knum.SciNote;
        }

        decPlace = inputStr.length%3;
        if(inputStr.length == numPower.length){numPower = numPower.slice(3);}

        inputRound = inputStr.slice(0,inputStr.length%3)+"."+inputStr.slice(inputStr.length%3,inputStr.length%3+3);
        if(inputRound.charAt(0) == "."){
            inputRound = inputRound.slice(1);
            inputRound += "." + inputStr.slice(3,4);
        };

        inputRound = Math.round(inputRound*1000)/1000;

        if(numPower.length/3 <= 1){return input;}
        if(numPower.length/3 > numerals.length){return "Number too big. Way to go."};
        return inputRound + " " + numerals[(numPower).length/3];
    }
}

Knum.SciNote = {
    error : new TypeError("Scientific notation (e notation) passed to Knum.toNumeral")
}

var sciNote = new TypeError("Knum: .toNumeral cannot use scientific notation!")

var numerals = ["Hundred", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Dectillion", "Undectillion", "Dodectillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", "Novemdecillion", "Vigintillion", "Unvigintillion", "Duovigintillion", "Trevigintillion", "Quattuorvigintillion", "Quinvigintillion", "Sexvigintillion", "Septenvigintillion", "Octovigintillion", "Novemvigintillion", "Trigintillion", "Untrigintillion", "Duotrigintillion", "Tretrigintillion", "Quattuortrigintillion", "Quintrigintillion", "Sextrigintillion", "Septentrigintillion", "Octotrigintillion", "Novemtrigintillion", "Quadragintillion", "Unquadragintillion", "Duoquadragintillion", "Trequadragintillion", "Quattuorquadragintillion", "Quinquadragintillion", "Sexquadragintillion", "Septenquadragintillion", "Octoquadragintillion", "Novemquadragintillion", "Quinquagintillion", "Unquinquagintillion", "Duoquinquagintillion", "Trequinquagintillion", "Quattuorquinquagintillion", "Quinquinquagintillion", "Sexquinquagintillion", "Septenquinquagintillion", "Octoquinquagintillion", "Novemquinquagintillion", "Sexagintillion", "Unsexagintillion", "Duosexagintillion", "Tresexagintillion", "Quattuorsexagintillion", "Quinsexagintillion", "Sexsexagintillion", "Septensexagintillion", "Octosexagintillion", "Novemsexagintillion", "Septuagintillion", "Unseptuagintillion", "Duoseptuagintillion", "Treseptuagintillion", "Quattuorseptuagintillion", "Quinseptuagintillion", "Sexseptuagintillion", "Septenseptuagintillion", "Octoseptuagintillion", "Novemseptuagintillion", "Octogintillion", "Unoctogintillion", "Duooctogintillion", "Treoctogintillion", "Quattuoroctogintillion", "Quinoctogintillion", "Sexoctogintillion", "Septenoctogintillion", "Octooctogintillion", "Novemoctogintillion", "Nonagintillion", "Unnonagintillion", "Duononagintillion", "Trenonagintillion", "Quattuornonagintillion", "Quinnonagintillion", "Sexnonagintillion", "Septennonagintillion", "Octononagintillion", "Novemnonagintillion", "Centillion"];