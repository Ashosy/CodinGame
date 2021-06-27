
var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if( initialTx < lightX && initialTy == lightY ){
        console.log('E');
    }
    else if (initialTx == lightX && initialTy > lightY){
        console.log('N');
    }
    else if(initialTx == lightX && initialTy < lightY){
        console.log('S');
    }
    else if(initialTx > lightX && initialTy < lightY){
        initialTy+=1;
        console.log('SW');
    }
    else if(initialTx > lightX && initialTy == lightY){
        initialTx-=1;
        console.log('W');
    }
    else if(initialTx < lightX && initialTy < lightY){
        initialTy+=1;
        initialTx+=1;
        console.log('SE');
    }

}