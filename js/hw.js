function maker(myChoice){
    
    var choiceArray = ['1番', '2番', '3番'];
    console.log(choiceArray[myChoice]);
    
    var random = Math.random() * 100;
    console.log(random);
    
    var randomNum = Math.floor(random);
    console.log(randomNum);
    
    var computerChoice = randomNum % 3;
    console.log(computerChoice);
    
    if(myChoice == 0) {
        if(computerChoice == 0) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはマツダです。");
        } else if(computerChoice == 1) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはSUBARUです。");
        } else if(computerChoice == 2) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはスズキです。");
        }
    } else if (myChoice == 1) {
        if(computerChoice == 0) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはマツダです。");
        } else if(computerChoice == 1) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはSUBARUです。");
        } else if(computerChoice == 2) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはスズキです。");
        }
    } else if (myChoice == 2) {
        if(computerChoice == 0) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはマツダです。");
        } else if(computerChoice == 1) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはSUBARUです。");
        } else if(computerChoice == 2) {
            alert("あなたの選択は" + choiceArray[myChoice] + "、おすすめのメーカーはスズキです。");
        }
    }
    
}