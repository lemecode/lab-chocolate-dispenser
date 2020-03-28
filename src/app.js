var chocolates = [
    "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "silver", "purple", "silver", "red", "red", "blue", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates, color, count) {
    for (i = 0; i < count; i++) {
        chocolates.unshift(color)
    }

    if (count === 0.0 || count < 0.0) {
        return ('Number cannot be zero/negative')
    }

}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(choclates, number) {
    let removed = chocolates.splice(0, number);


    if (number > chocolates.length) {
        return ('Insufficient chocolates in the dispenser');
    }

    if (number === 0.0 || number < 0.0) {
        return ('Number cannot be zero/negative')
    }

    return removed;

}



//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {


    if (number > chocolates.length) {
        return ('Insufficient chocolates in the dispenser');
    }
    if (number === 0 || number < 0.0) {
        return ('Number cannot be zero/negative')
    }
    let dispensed = chocolates.splice(-number);
    return dispensed;
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    for (i = chocolates.length, choco = []; i > 0; i--) {
        if (chocolates[i] === color) {
            choco.push(chocolates[i]);
        }
    }
    if (number > chocolates.length) {
        return ('Insufficient chocolates in the dispenser');
    }
    if (number === 0 || number < 0.0) {
        return ('Number cannot be zero/negative')
    }
    return (choco);
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let count = [], cg = 0, cs = 0, cb = 0; cc = 0, cp = 0, cr = 0, cpi = 0;
    chocolates.forEach(element => {
        for (i = 0; i < chocolates.length; i++){
            
        }
        if (element === "green") {
            cg++;
            count[0] = cg;
        }
        if (element === "silver") {
            cs++;
            count[1] = cs;
        }
        if (element === "blue") {
            cb++;
            count[2] = cb;
        }
        if (element === "crimson") {
            cc++;
            count[3] = cc;
        }
        if (element === "purple") {
            cp++;
            count[4] = cp;
        }
        if (element === "red") {
            cr++;
            count[5] = cr;
        }
        if (element === "pink") {
            cpi++;
            count[6] = cpi;
        }
    });
    return count;

    }
    
//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount() {
    
    
}

//Progression 7: Change ___ chocolates of ____ color to ____ color


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
