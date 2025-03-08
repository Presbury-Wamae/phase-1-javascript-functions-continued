// code your solution here
function mondayWork(Activity = "go to the office"){
    return `This Monday, I will ${Activity}.`;
}
mondayWork();

function saturdayFun(Activity = "roller-skate"){
    return `This Saturday, I want to ${Activity}!`;
}
saturdayFun();

function wrapAdjective(flair){
    return function(special){
        return `You are ${flair}${special}${flair}!`;
    }; 
}