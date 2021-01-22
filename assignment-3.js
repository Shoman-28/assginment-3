
// https://github.com/Shoman-28/assginment-3

// kilometerToMeter== start 
function kilometerToMeter(kilometer){

    if(kilometer<0){
        //navigate value
        return "Distance can't be negative. Please Enter Possitive Value";

    }else{

        var meter = kilometer * 1000;
        return meter;
    }
  
}
console.log(kilometerToMeter(3));
// kilometerToMeter== end 


// budgetCalculator== start 
function budgetCalculator( watch, phone, laptop){

    if(watch<0 || phone<0 || laptop<0){

        return "pleas enter possitive number";

    } else{
        
        return  watch *50 + phone * 100 + laptop * 500;

    }
}
console.log(budgetCalculator(1,3,1));
// budgetCalculator== end 


//===hotelCost===== start
function hotelCost(day){

    if(day < 0){
        return "please enter valid number"

    } else if(day <=10){
        //====cost 1 to 10 day====
        totalCost = day * 100;
        return totalCost;

    } else if(day <=20){
        //====cost 11 to 20 day====
        var day = day - 10;
        var cost2 = day * 80;
        var totalCost = cost2 + (10 * 100);
        return totalCost

    } else{
        //====cost more then 20 day====
        day = day - 20;
        var cost3 = day * 50;
        var totalCost = cost3 + (10 * 100) + (10 * 80);
        return totalCost;
    }    

}
console.log(hotelCost(42));

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

console.log(megaFriend(name));

 //===magaFriend=====end




