var monthName = ["January", "February", "March", "April", "May", "June",

{name: "ashik"},{name: "ashik"},{name: "ashik"},

"July", "August", "September", "October", "November", "December", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//arr.splice(index, 1);
removeDuplicateFromArray(monthName);
function removeDuplicateFromArray(arr){
    for(var i=0; i<arr.length; i++){
        var item = arr[i];
        
        for(var j=i+1; j<arr.length; j++){
        if(arr[j] === item){
                arr.splice(j, 1);
            }
        }
    }
   console.log(arr);
}