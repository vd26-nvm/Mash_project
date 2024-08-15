//All steps completed as well as Extra Credit
function mash() {
    let stri = getHome();
    
    let yourWay = "You will live in a " + stri + " and travel to " + getTravelCount() + " countries, and have a pet " + getPet() + "! Your future occupation will be: " + futureOcc() + ", and the name of your future wife is " + wifeName();
    return yourWay;
}

let var1 = mash();
console.log(var1);

function randNumGenerator(theInt) {
    let reVal = Math.floor(Math.random() * theInt);
    return reVal;
}

function futureOcc() {
    let occupation = ['Jobless', 'Cardiologist', 'Astrologist', 'Janitor', 'Dog Groomer'];
    let urFuture = occupation[randNumGenerator(occupation.length)]
    return urFuture;
}

function getHome() {
    let arr1 = ['Mansion', 'Castle', 'Shack', 'House'];
    let input1 = process.argv[2];
    if (input1) {
        arr1.push(process.argv[2])
    }
    let choice = arr1[randNumGenerator(arr1.length)];
    return choice;
}
function getTravelCount() {
    let send = randNumGenerator(101);
    return send;
}
function wifeName() {
    let getWife = ['Nonexistant', 'Jamie', 'Arjun', 'Esam', 'Taylor'];
    let decision = getWife[randNumGenerator(getWife.length)];
    if (decision === 'Esam' || decision === 'Arjun') {
        console.log("You got very UNLUCKY :)");
    }
    return decision;
}
function getPet() {
    let chance = randNumGenerator(3);
    if (chance == 1) {
        let randomPets = ['Dog', 'Crocodile', 'Iguana', 'Bald Eagle', 'Sea Lion'];
        return randomPets[randNumGenerator(randomPets.length)];
    } else {
        let urPet = process.argv[3];
        if (urPet) {
            return urPet;
        } else {
            let randomPets = ['Dog', 'Crocodile', 'Iguana', 'Bald Eagle', 'Sea Lion'];
            return randomPets[randNumGenerator(randomPets.length)];
        }
        
    }
    
}
