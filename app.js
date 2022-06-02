function qsort(origiAr){
    if(origiAr.length<=1){
        return origiAr;
    }else {

        var l= []; 
        var r= [];
        var newAr = [];
        var pivot = origiAr.pop();
        var length = origiAr.length;
        
        //partitioning
        for (var i=0; i<length; i++){
            if(origiAr[i]<= pivot){
                l.push(origiAr[i]);
            } else {
                r.push(origiAr[i]);
            }
        }    
        return newAr.concat(qsort(l), pivot, qsort(r));
    }

}

//comparing 
function checkMiss(sortedAr){
    var min = sortedAr[0];
    for(i=0;i<sortedAr.length; i++){
        if(min!=sortedAr[i]){
            console.log("Missing number "+ min);
            return;            
        }
        min++;
        if(min==sortedAr[sortedAr.length-1]){
            console.log("Number missing from beginning or the end of the sequence");    
        }
    }
}



var theArray = [22, 24, 28, 23, 25, 27];
var sortedAr = qsort(theArray);
console.log("Sorted array " + sortedAr);
checkMiss(sortedAr);