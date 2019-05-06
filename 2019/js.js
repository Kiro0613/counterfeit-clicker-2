//Player Cash Stuff
var playerCash = 0;
var cashPerSecond = 0;
var cashPerClick = 1;

var bldg = ["",
    //Counterfeit
    ["",
        {name:"Printer", inv:0, basePrice:10, baseCps:0.1, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:2000000, baseCps:8000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:450000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ],
    //Gambling    
    ["",
        {name:"Printer", inv:0, basePrice:75, baseCps:0.3, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:12000000, baseCps:35000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:5200000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ],
    //Digital
    ["",
        {name:"Printer", inv:0, basePrice:500, baseCps:4, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:80000000, baseCps:200000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:43210000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ],
    //Drug Dealing
    ["",
        {name:"Printer", inv:0, basePrice:4200, baseCps:15, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:600000000, baseCps:1250000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:300000000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ],
    //Stealing
    ["",
        {name:"Printer", inv:0, basePrice:25000, baseCps:130, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:4000000000, baseCps:5000000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:4000000000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ],
    //Pros
    ["",
        {name:"Printer", inv:0, basePrice:123456, baseCps:450, multiplier:0, cps:0, alltimeCps:0},
        {name:"Artist", inv:0, basePrice:25000000000, baseCps:20000000, multiplier:0, cps:0, alltimeCps:0},
        {name:"Mint", inv:0, basePrice:100000000000000000, baseCps:0, multiplier:0, cps:0, alltimeCps:0}
    ]
];

var allTimeCash = 0;

var totalCps = 0;
var cpsDirectory;


//Vars for price calc
var inv;
var calcPrice;
var calc;
var price
var sumPrice;
var currentVal
var priceProg = [];
var priceAdds = [];


//Functions
function cashButton()
{
    playerCash += cashPerClick;
    allTimeCash += cashPerClick;
    
    document.getElementById("padding3").innerHTML = "";
}

function buyBuilding(bldgClass, bldgLvl, qty)
{
    console.log("CC2: " + "**buyBuilding()**")

    price = returnPrice(bldgClass, bldgLvl, parseInt(document.getElementById(qty).value), true);

    if(playerCash >= price)
    {
        playerCash -= price;
        bldg[bldgClass][bldgLvl].inv += parseInt(document.getElementById(qty).value);
    }
}

function sellBuilding(bldgInv, bldgPrice, buyQty)
{
    console.log("CC2: " + "**sellBuilding()**")

    price = returnSellPrice(window[bldgInv], window[bldgPrice], parseInt(document.getElementById(buyQty).value), true);

    if(document.getElementById(buyQty).value <= window[bldgInv])
    {
        playerCash += price;
        window[bldgInv] -= parseInt(document.getElementById(buyQty).value);
        console.log("CC2: " + bldgInv, window[bldgInv], bldgPrice, window[bldgPrice]);
    }
}

function returnPrice(bldgClass, bldgLvl, qty)
{
    var price = bldg[bldgClass][bldgLvl].basePrice;
    var inv = bldg[bldgClass][bldgLvl].inv;
    var calc = [price];

    for(i=0;i<inv+qty;i++)
    {
        price = Math.round((price*1.178)*100)/100;
        calc.push(price);
    }
    return Math.round(((calc.slice(inv, inv+qty)).reduce(sumArray))*100)/100;
}

function buyUpg(upg)
{
    if(upg.price <= playerCash)
    {
        playerCash -= upg.price;
        document.getElementById(upg.id).style.visibility = "hidden";
        document.getElementById(upg.id).style.display = "none";
    }
}

//Cash Adding Functions
window.setInterval(function addCash()
{
    bldg[1][1].alltimeCps += bldg[1][1].cps
    bldg[1][2].alltimeCps += bldg[1][2].cps
    bldg[1][3].alltimeCps += bldg[1][3].cps

    bldg[2][1].alltimeCps += bldg[2][1].cps
    bldg[2][2].alltimeCps += bldg[2][2].cps
    bldg[2][3].alltimeCps += bldg[2][3].cps

    bldg[3][1].alltimeCps += bldg[3][1].cps
    bldg[3][2].alltimeCps += bldg[3][2].cps
    bldg[3][3].alltimeCps += bldg[3][3].cps

    bldg[4][1].alltimeCps += bldg[4][1].cps
    bldg[4][2].alltimeCps += bldg[4][2].cps
    bldg[4][3].alltimeCps += bldg[4][3].cps

    bldg[5][1].alltimeCps += bldg[5][1].cps
    bldg[5][2].alltimeCps += bldg[5][2].cps
    bldg[5][3].alltimeCps += bldg[5][3].cps

    bldg[6][1].alltimeCps += bldg[6][1].cps
    bldg[6][2].alltimeCps += bldg[6][2].cps
    bldg[6][3].alltimeCps += bldg[6][3].cps
    
    allTimeCash += cashPerSecond;
    
    playerCash += cashPerSecond;
}, 1000);


function updateCps()
{
    //bldg[1][3].cps
    bldg[1][1].cps = (bldg[1][1].baseCps*bldg[1][1].inv)*(bldg[1][1].multiplier+1);
    bldg[1][2].cps = (bldg[1][2].baseCps*bldg[1][2].inv)*(bldg[1][2].multiplier+1);
    bldg[1][3].cps = (bldg[1][3].baseCps*bldg[1][3].inv)*(bldg[1][3].multiplier+1);
    bldgOneCpsArray = [bldg[1][1].cps, bldg[1][2].cps, bldg[1][3].cps];
    bldgOneCps = bldgOneCpsArray.reduce(sumArray);

    //bldgTwocps
    bldg[2][1].cps = (bldg[2][1].baseCps*bldg[2][1].inv)*(bldg[2][1].multiplier+1);
    bldg[2][2].cps = (bldg[2][2].baseCps*bldg[2][2].inv)*(bldg[2][2].multiplier+1);
    bldg[2][3].cps = (bldg[2][3].baseCps*bldg[2][3].inv)*(bldg[2][3].multiplier+1);
    bldgTwoCpsArray = [bldg[2][1].cps, bldg[2][2].cps, bldg[2][3].cps];
    bldgTwoCps = bldgTwoCpsArray.reduce(sumArray);

    //bldgThreecps
    bldg[3][1].cps = (bldg[3][1].baseCps*bldg[3][1].inv)*(bldg[3][1].multiplier+1);
    bldg[3][2].cps = (bldg[3][2].baseCps*bldg[3][2].inv)*(bldg[3][2].multiplier+1);
    bldg[3][3].cps = (bldg[3][3].baseCps*bldg[3][3].inv)*(bldg[3][3].multiplier+1);
    bldgThreeCpsArray = [bldg[3][1].cps, bldg[3][2].cps, bldg[3][3].cps];
    bldgThreeCps = bldgThreeCpsArray.reduce(sumArray);

    //bldgFourcps
    bldg[4][1].cps = (bldg[4][1].baseCps*bldg[4][1].inv)*(bldg[4][1].multiplier+1);
    bldg[4][2].cps = (bldg[4][2].baseCps*bldg[4][2].inv)*(bldg[4][2].multiplier+1);
    bldg[4][3].cps = (bldg[4][3].baseCps*bldg[4][3].inv)*(bldg[4][3].multiplier+1);
    bldgFourCpsArray = [bldg[4][1].cps, bldg[4][2].cps, bldg[4][3].cps];
    bldgFourCps = bldgFourCpsArray.reduce(sumArray);

    //bldgFivecps
    bldg[5][1].cps = (bldg[5][1].baseCps*bldg[5][1].inv)*(bldg[5][1].multiplier+1);
    bldg[5][2].cps = (bldg[5][2].baseCps*bldg[5][2].inv)*(bldg[5][2].multiplier+1);
    bldg[5][3].cps = (bldg[5][3].baseCps*bldg[5][3].inv)*(bldg[5][3].multiplier+1);
    bldgFiveCpsArray = [bldg[5][1].cps, bldg[5][2].cps, bldg[5][3].cps];
    bldgFiveCps = bldgFiveCpsArray.reduce(sumArray);

    //bldgSixcps
    bldg[6][1].cps = (bldg[6][1].baseCps*bldg[6][1].inv)*(bldg[6][1].multiplier+1);
    bldg[6][2].cps = (bldg[6][2].baseCps*bldg[6][2].inv)*(bldg[6][2].multiplier+1);
    bldg[6][3].cps = (bldg[6][3].baseCps*bldg[6][3].inv)*(bldg[6][3].multiplier+1);
    bldgSixCpsArray = [bldg[6][1].cps, bldg[6][2].cps, bldg[6][3].cps];
    bldgSixCps = bldgSixCpsArray.reduce(sumArray);
    
    cpsDirectory = [
        [bldgOneCps,bldgTwoCps,bldgThreeCps,bldgFourCps,bldgFiveCps,bldgSixCps],
        [bldg[1][1],bldg[1][2],bldg[1][3]],
        [bldg[2][1],bldg[2][2],bldg[2][3]],
        [bldg[3][1],bldg[3][2],bldg[3][3]],
        [bldg[4][1],bldg[4][2],bldg[4][3]],
        [bldg[5][1],bldg[5][2],bldg[5][3]],
        [bldg[6][1],bldg[6][2],bldg[6][3]],
    ]
    
    cashPerSecond = cpsDirectory[0].reduce(sumArray);
}


//CSS Stuff

function hide(id)
{
    document.getElementById(id).style.display = "none";
    document.getElementById(id).style.visibility = "hidden";
}

var activeWindow = "invWindow"

function changeWindow(window)
{
    console.log("CC2: " + window)
    document.getElementById(activeWindow).style = "display:none; visibility:hidden;"
    document.getElementById(window).style = "display:block; visibility:visible;"
    activeWindow = window;
}

function sumArray(a,b){return a+b};


var numStr;
var numLength;
var numPower;
var numRemain;
var numSI;
var SIPrefixes = ["h","k","M","B","T","Qa","Qi","Sx","Sp","Oc","Non","Dec"]
var SIPrefsLong = [
    " Hundred",
    " Thousand",
    " Million",
    " Billion",
    " Trillion",
    " Quadrillion",
    " Quintillion",
    " Sextillion",
    " Septillion",
    " Octillion",
    " Nonillion",
    " Dectillion"
]

function getSIPref(num, log)
{
    numStr = Math.round(num).toString();
    numLength = numStr.length
    numRemain = numLength%3; if(numRemain == 0){numRemain = 3};
    numPower = (numLength - numRemain)/3;
    
    numSI = numStr.slice(0,numRemain)+"."+Math.round((numStr.slice(numRemain,4)/10))*10;
    numSI = numSI.slice(0,numSI.length-1);
    if(log==true){newnum = numSI}
    if(numSI.lastIndexOf(".") == numSI.length-1){numSI = numSI.slice(0,numSI.length-1);}
    
    if(numPower >= 1){
        numSI += SIPrefixes[numPower];
        return numSI;
    } else {
        return num;
    }
}

function getSIPrefLong(num)
{
    numStr = Math.round(num).toString();
    numLength = numStr.length
    numRemain = numLength%3; if(numRemain == 0){numRemain = 3};
    numPower = (numLength - numRemain)/3;
    
    numSI = numStr.slice(0,numRemain)+"."+Math.round((numStr.slice(numRemain,4)/10))*10;
    numSI = numSI.slice(0,numSI.length-1);
    if(numSI.lastIndexOf(".") == numSI.length-1){numSI = numSI.slice(0,numSI.length-1);}
    
    if(numPower >= 2){
        numSI += SIPrefsLong[numPower];
        return numSI;
    } else {
        return num;
    };
}



window.setInterval(
function updateSpan()
{
    document.getElementById("playerCash").innerHTML = Math.round((getSIPref(playerCash))*10)/10;
    document.getElementById("cashPerSecond").innerHTML = Math.round((getSIPref(cashPerSecond))*10)/10;
    updateCps();
    buyTooltips();
}, 1);


function buyTooltips()
{
    document.getElementById("tt111").innerHTML = getSIPref(returnPrice(1,1,1))
    document.getElementById("tt121").innerHTML = getSIPref(returnPrice(1,2,1))
    document.getElementById("tt131").innerHTML = getSIPref(returnPrice(1,3,1))
    
    document.getElementById("tt211").innerHTML = getSIPref(returnPrice(2,1,1))
    document.getElementById("tt221").innerHTML = getSIPref(returnPrice(2,2,1))
    document.getElementById("tt231").innerHTML = getSIPref(returnPrice(2,3,1))
}

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

