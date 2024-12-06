// 1.saturdayFun
function saturdayFun(activity = "roller-skate") { 
        
    console.log (`This Saturday, I am going to ${activity}!`);
          
}
saturdayFun(("bathe my dog"));

   

// 2. mondayWork
function mondayWork(task = "go to the office") {
    return `This Monday, I need to ${task}.`;
  }


//3. wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  