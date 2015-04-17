//P2 req. 2>A
var isArmstrong = function(k){
    "use strict";
    k = k.toString();
    var m= k.length;
    var number, sum = 0;
    for( var i = 0; i < m; ++i){
        number= Number(k[i]);
        var multi = Math.pow(number,m);
        sum = sum + multi;
    }
    if (Number(k)==sum){
        return true;
    }
    else{return false}
}

//P2 req. 2>B
var allArmstrongs=function(){
    var result = "";
     //generate

     for(var k=1; k<=99999; ++k){
        //test
        if (isArmstrong(k)){
        result = result + k + ' ';}
     }
     return result;
} 

//P2 req. 2>C
var allSubstrings1 = function(x){
    var result ="";
    for(var i = 0; i< x.length; i++) {
        for(var j = i+1; j<=x.length;j++) {
            var str = x.substring(i,j);
            result = result + str + ", ";
        }
    }
    return result;
}

//P2 req. 2>D
var allSubstrings2 = function(x){
    var array =[];
    for(var i = 0; i< x.length; i++) {
        for(var j = i+1; j<=x.length;j++) {
            var str = x.substring(i,j);
            array.push(str);
        }
    }
    return array;
}

//P2 req. 2>E
var maxWord = function(x) {

    words = x.split(" ");
    var maxSoFar = words[0]
    for(var i = 0; i < words.length; ++i){
            if (maxSoFar.length < words[i].length)
                { maxSoFar = words[i]}

            }
 return maxSoFar;
}