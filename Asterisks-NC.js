function asteriks(val){
    var aster = 0;
    var spaces = 0;
    for(let i = 0; i < val; i++){
        aster += 1;
        spaces+=2;
        for(let k = 0; k < aster; k++){
            process.stdout.write("*");
        }
        console.log();
        for(let j = 0; j < spaces; j++){

            process.stdout.write("=");
        }

    }
    // console.log(aster);
    // console.log(spaces);
}

asteriks(3);