function unlockInv()
{
    document.getElementById("invrowOne").className = "invrow";
    document.getElementById("invrowTwo").className = "invrow";
    document.getElementById("invrowThree").className = "invrow";
    document.getElementById("invrowFour").className = "invrow";
    document.getElementById("invrowFive").className = "invrow";
    document.getElementById("invrowSix").className = "invrow";

    document.getElementById("itemoneinvdisplay").className = "invrowleftitem";
    document.getElementById("itemtwoinvdisplay").className = "invrowleftitem";
    document.getElementById("itemthreeinvdisplay").className = "invrowleftitem";
    document.getElementById("invrowoneright").className = "invrowright";

    document.getElementById("itemfourinvdisplay").className = "invrowleftitem";
    document.getElementById("itemfiveinvdisplay").className = "invrowleftitem";
    document.getElementById("itemsixinvdisplay").className = "invrowleftitem";
    document.getElementById("invrowtworight").className = "invrowright";

    document.getElementById("itemseveninvdisplay").className = "invrowleftitem";
    document.getElementById("itemeightinvdisplay").className = "invrowleftitem";
    document.getElementById("itemnineinvdisplay").className = "invrowleftitem";
    document.getElementById("invrowthreeright").className = "invrowright";

    document.getElementById("itemteninvdisplay").className = "invrowleftitem";
    document.getElementById("itemeleveninvdisplay").className = "invrowleftitem";
    document.getElementById("itemtwelveinvdisplay").className = "invrowleftitem";
    document.getElementById("invrowfourright").className = "invrowright";

    document.getElementById("itemthirteeninvdisplay").className = "invrowleftitem";
    document.getElementById("itemfourteeninvdisplay").className = "invrowleftitem";
    document.getElementById("itemfifteeninvdisplay").className = "invrowleftitem";
    document.getElementById("invrowfiveright").className = "invrowright";

    document.getElementById("itemsixteeninvdisplay").className = "invrowleftitem";
    document.getElementById("itemseventeeninvdisplay").className = "invrowleftitem";
    document.getElementById("itemeighteeninvdisplay").className = "invrowleftitem";
    document.getElementById("invrowsixright").className = "invrowright";
}

function setAllInvRowHeight()
{
    setInvRowHeight('invrowoneleft', 'invrowoneright')
    setInvRowHeight('invrowtwoleft', 'invrowtworight')
    setInvRowHeight('invrowthreeleft', 'invrowthreeright')
    setInvRowHeight('invrowfourleft', 'invrowfourright')
    setInvRowHeight('invrowfiveleft', 'invrowfiveright')
    setInvRowHeight('invrowsixleft', 'invrowsixright')
    setInvRowHeight('invrowoneleft', 'invrowsevenleft')
    setInvRowHeight('invrowoneleft', 'invrowsevenright')
}

function unlockUpgRows()
{
    document.getElementById("upgRow_click").style.display = "block";
    document.getElementById("upgRow_counterfeit").style.display = "block";
    document.getElementById("upgRow_gambling").style.display = "block";
    document.getElementById("upgRow_digital").style.display = "block";
    document.getElementById("upgRow_drugs").style.display = "block";
    document.getElementById("upgRow_stealing").style.display = "block";
    document.getElementById("upgRow_professionals").style.display = "block";
    document.getElementById("upgRow_overall").style.display = "block";
}

function unlockUpgColumnsOne()
{
    document.getElementById("upgList_bldgOne").className = "leftcolumn";
    document.getElementById("upgList_bldgTwo").className = "middlecolumn";
    document.getElementById("upgList_bldgThree").className = "rightcolumn";

}

function unlockUpgColumnsTwo()
{
    document.getElementById("upgList_bldgFour").className = "leftcolumn";
    document.getElementById("upgList_bldgFive").className = "middlecolumn";
    document.getElementById("upgList_bldgSix").className = "rightcolumn";
}

function unlockUpgColumnsThree()
{
    document.getElementById("upgList_bldgSeven").className = "leftcolumn";
    document.getElementById("upgList_bldgEight").className = "middlecolumn";
    document.getElementById("upgList_bldgNine").className = "rightcolumn";
}

function unlockUpgColumnsFour()
{
    document.getElementById("upgList_bldgTen").className = "leftcolumn";
    document.getElementById("upgList_bldgEleven").className = "middlecolumn";
    document.getElementById("upgList_bldgTwelve").className = "rightcolumn";
}

function unlockUpgColumnsFive()
{
    document.getElementById("upgList_bldgThirteen").className = "leftcolumn";
    document.getElementById("upgList_bldgFourteen").className = "middlecolumn";
    document.getElementById("upgList_bldgFifteen").className = "rightcolumn";
}

function unlockUpgColumnsSix()
{
    document.getElementById("upgList_bldgSixteen").className = "leftcolumn";
    document.getElementById("upgList_bldgSeventeen").className = "middlecolumn";
    document.getElementById("upgList_bldgEighteen").className = "rightcolumn";
}

function unlockAllUpgRows()
{
    unlockUpgRows()
    unlockUpgColumnsOne()
    unlockUpgColumnsTwo()
    unlockUpgColumnsThree()
    unlockUpgColumnsFour()
    unlockUpgColumnsFive()
    unlockUpgColumnsSix()

    document.getElementById("upgList_bldgZero").className = "leftcolumn";
    document.getElementById("upgList_bldgNineteen").className = "leftcolumn";
}

function unlockAll()
{
    unlockInv()
    unlockAllUpgRows()
    setAllInvRowHeight()
}


function devCheat()
{
    inv_playerCash += 99999999
}
