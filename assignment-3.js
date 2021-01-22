
// https://github.com/Shoman-28/assginment-3

// kilometerToMeter== start 
function kilometerToMeter(kilometer){

    if(kilometer<0){
        
        return "Distance can't be negative. Please Enter Possitive Value";

    }else{

        var meter = kilometer * 1000;
        return meter;
    }
  
}
console.log(kilometerToMeter());
// kilometerToMeter== end 


// budgetCalculator== start 
function budgetCalculator( watch, phone, laptop){

    if(watch<0 || phone<0 || laptop<0){

        return "pleas enter possitive number";

    } else{
        
        return  watch *50 + phone * 100 + laptop * 500;

    }
}
console.log(budgetCalculator());
// budgetCalculator== end 

//===hotelCost===== start
function hotelCost(day){

    if(day < 0){
        return "please enter valid number"

    }

    else if(day <=10){
        totalCost = day * 100;
        return totalCost;

    }

    else if(day <=20){
        var day = day - 10;
        var cost2 = day * 80;
        var totalCost = cost2 + (10 * 100);
        return totalCost
    }

    else{
        day = day - 20;
        var cost3 = day * 50;
        var totalCost = cost3 + (10 * 100) + (10 *50);
        return totalCost;
    }    

}
console.log(hotelCost());

//===hotelCost===== end


//===magaFriend=====start
function megaFriend(name){

    var biggestName = name[0];

    for (var i = 0; i < name.length; i++){
        var container = name[i];

        if(container.length > biggestName.length){
            biggestName = container;
        }
    }

    return biggestName;

}
var name = ["shoman", "nobodip", "abdul", "hamid", "bangladesh", "jahid", 'moni'];

console.log(megaFriend());

 //===magaFriend=====start




