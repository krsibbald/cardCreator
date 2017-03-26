<script language='JavaScript'>
   var pointsDrop = document.getElementById("points");
   pointsDrop.onchange = function(event){
     var pointsNums = document.getElementsByClassName('pointsNum');
     var pointsToShow = event.target.value;
     str = "";
     if (pointsToShow == 1) {
      ans = pointsToShow + " point";
     }
     else{
      ans = pointsToShow + " points";
      }
     for(var i = 0; i < pointsNums.length; i++){
       pointsNums[i].innerHTML = ans;
     }
   };
  var reagentToShow = function(reagentName){
    if (reagentName == undefined){
      return '';
    }else{
     var displayName = reagentName.charAt(0).toUpperCase()+reagentName.slice(1).replace(/([A-Z])/g, ' $1').trim()
     return '<span class='+reagentName+'>'+displayName+'</span>';
    }
  };
  var reagentType1Drop = document.getElementById('reagentType1');
  reagentType1Drop.onchange = function(event){
    var cardReagentType1s = document.getElementsByClassName('cardReagentType1');
    var reagentToShow1 = reagentToShow(event.target.value);
    for(var i = 0; i < cardReagentType1s.length; i++){
      cardReagentType1s[i].innerHTML = reagentToShow1;
    }
  };
  var reagentType2Drop = document.getElementById('reagentType2');
  reagentType2Drop.onchange = function(event){
    var cardReagentType2s = document.getElementsByClassName('cardReagentType2');
    var reagentToShow2 = reagentToShow(event.target.value);
    for(var i = 0; i < cardReagentType2s.length; i++){
      cardReagentType2s[i].innerHTML = reagentToShow2;
    }
  };
  var nameInput = document.getElementById('name');
  var nameUpdate = function(event){
    var cardNames = document.getElementsByClassName('cardName');
    var nameToShow = event.target.value;
    for(var i=0; i < cardNames.length; i++){
      cardNames[i].innerHTML = nameToShow;
    }
  };
  nameInput.onchange = function(event){
    nameUpdate(event);
  };
  nameInput.oninput = function(event){
    nameUpdate(event);
  };
  nameInput.onpaste = function(event){
    nameUpdate(event);
  };
  nameInput.keypress = function(event){
    nameUpdate(event);
  };
  var reactivityNotesInput = document.getElementById('reactivityNotes');
  var reactivityNotesUpdate = function(event){
  var cardReactivityNotes = document.getElementsByClassName('cardReactivityNotes');
  var reactivityNotesToShow = event.target.value;
  var specialWordsArr = [['alcohols', 'Alcohols'],
    ['alkene', 'Alkene'],
    ['alkylHalide', 'Alkyl Halide'],
    ['carbonyl', 'Carbonyl'],
    ['catalyst', 'Catalyst'],
    ['chlorinatingReagent', 'Chlorinating Reagent'],
    ['electrophile', 'Electrophile'],
    ['metal', 'Metal'],
    ['oxidant', ' Oxidant '],
    ['reducingAgent', 'Reducing Agent'],
    ['strongAcid', 'Strong Acid'],
    ['strongBase', 'Strong Base'],
    ['strongNucleophile', 'Strong Nucleophile'],
    ['weakAcid', 'Weak Acid'],
    ['weakBase', 'Weak Base'],
    ['weakNucleophile', 'Weak Nucleophile']];

  for(var i = 0; i < specialWordsArr.length; i++){
    var wordToFind = specialWordsArr[i][1];
    var wordToShow = reagentToShow(specialWordsArr[i][0]);
    reactivityNotesToShow = reactivityNotesToShow.replace(wordToFind, wordToShow);  
    reactivityNotesToShow = reactivityNotesToShow.replace(wordToFind.toLowerCase(), wordToShow);
  }

  for(var i = 0; i < cardReactivityNotes.length; i++){
    cardReactivityNotes[i].innerHTML = reactivityNotesToShow;
  }
  };
  reactivityNotesInput.onchange = function(event){
    reactivityNotesUpdate(event);
  };
  reactivityNotesInput.oninput = function(event){
    reactivityNotesUpdate(event);
  };
  reactivityNotesInput.onpaste = function(event){
    reactivityNotesUpdate(event);
  };
  reactivityNotesInput.keypress = function(event){
    reactivityNotesUpdate(event);
  };

  var numOfCopiesDrop = document.getElementById("numOfCopies");
  numOfCopiesDrop.onchange = function(event){
     var copiesToShow = event.target.value;
     var cardHTML = document.getElementById('firstCard').getElementsByClassName("card")[0];
     document.getElementById('firstCard').className = 'hidden';
     var additionalCards = document.getElementById('additionalCards');
     additionalCards.innerHTML = '';
     
     for(var i = 0; i < copiesToShow; i++){
       var copyNode = cardHTML.cloneNode(true);
       additionalCards.appendChild(copyNode);
     }
   };
</script>