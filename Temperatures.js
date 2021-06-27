const num = readline();
const value = readline().split(" ");
var val = parseInt(value[0]);
var check = [];
if(value == ""){
    val = 0;
}
for(let i = 1; i < value.length; i++){
    if(Math.abs(parseInt(value[i]) - 0) < Math.abs((val - 0)) ){
        val = parseInt((value[i]));
    }
    else if(Math.abs(parseInt(value[i]) - 0) == Math.abs((val - 0))){
        check.push(parseInt(value[i]));
        check.push(parseInt(val));
        var pos = parseInt(check[0]);
        for(let j = 1; j<check.length; j++){
            if(parseInt(check[j]) > pos){
                pos = parseInt(check[j]);
            }
            else{
                pos = pos;
            }
        }
        val = pos;
    }
}

console.log(val);